;; There are several layers in 3d space in this sketch
;;
;; 1. Background-horizontal -  pipes that end in circles
;;
;; 2. Two horizontal pipes that run from top to bottom on left and right side.
;;
;; 3. another layer of horizontal pipes, ending in curves.

(ns code.pipes
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [code.util :as u]))

(def fg-pipes (atom []))

(defn get-stroke-weight []
  (q/stroke-weight 4))

(defn- build-vert-pipes
  "Draws vertical pipes within the structure of build-frame,
  pipes are spread evenly across the frame, default numbering 5.
  Seems to be using the same x-y grid with the offset from build-frame; ie
  the offset-from-edge sets (0,0) to be (offset-from-edge, offset-from-edge)"
  [{:keys [frame-width pipe-width fw ifw fh ifh] :as config}]
  (let [num-bars       5
        bar-width      pipe-width #_(u/%of 100 pipe-width)
        ;; config distances between bars
        bar-int-buffer (u/%of 3.3333 ifw)
        bar-interval   (+ (/ ifw num-bars) bar-int-buffer)
        bar-offset     (- (+ frame-width bar-int-buffer) (/ frame-width 2))]
    (doseq [b    (range 0 num-bars)
            :let [x (+ bar-offset (* b bar-interval))]]
      (q/rect x frame-width bar-width ifh))))



(defn build-fg-horiz-pipes
  "Used for drawing the overlaying top bars, alongside bg-bars
  Requires state! (@fg-pipes)"
  [pipes-list]

  (doseq [f @pipes-list
          :let [{:keys [lpipe-x
                        lpipe-y
                        lpipe-w
                        rpipe-w
                        pipe-width
                        rpipe-x
                        y-pos
                        pipe-width
                        circ1-y
                        circ-r
                        circ1-x
                        cc-off
                        circ2-x] :as vals} f]]
    ;; left side of lines.
    (q/rect lpipe-x lpipe-y lpipe-w pipe-width)
    (q/arc (- circ1-x cc-off) circ1-y  circ-r circ-r (- q/HALF-PI) q/HALF-PI)
    ;; batch 2 - right-side lines
    (q/rect rpipe-x y-pos rpipe-w pipe-width)
    (q/arc (+ cc-off circ2-x) circ1-y circ-r circ-r q/HALF-PI (- q/HALF-PI))))




(defn- build-bg-horiz-pipes
  "The first layer of pipes, these run horizontally behind build-vert-pipes
  These start flush with inner frame xl and  xr.
  They end random-ishly somewhere inside the frame, either 1/3 or 2/3 the way across
  These lines end with a circle at their tip."
  [{:keys [pipe-width frame-width fw fh ifw ifh num-pipes] :as config}]
  (let [space-between-bars (u/%of 11 ifw)
        rand-l             (u/rand-b-w 5 80)
        rand-r             (u/rand-b-w 5 80)
        set-width          [(u/%of rand-l ifw) (u/%of rand-r ifw)]
        pipe-width-n       (u/%of 75 pipe-width) ;; var shadowin
        local-horiz-cache  (atom [])]

         ;; make this variable
    (doseq [bar  (range 0 num-pipes)
            :let [bar-type      (even? bar)

                  y-top-offset  0 #_(* 3 pipe-width) ;; arbitrary - how far from top
                  y-pos         (+ y-top-offset (* bar pipe-width))
                  ;; left pipe
                  lpipe-x       frame-width ;; offset from outer frame
                  lpipe-y       y-pos
                  lpipe-w       (if bar-type (first set-width) (second set-width))

                  circ1-x       (+ frame-width lpipe-w)
                  circ-r        pipe-width
                  circ1-y       (+ (/ circ-r 2) y-pos)

                  circ2-y       circ1-y
                  circ2-x       (+ space-between-bars circ1-x)

                  rpipe-x       circ2-x
                  rpipe-w        (- fw circ2-x)
                  cc-off (u/%of 0.35 (q/width))]] ; Circle / curve offset for end of horiz bar - FIXME -- magic #


      ;; batch one
      (if bar-type
        ;; Draw bars with circular-ends
        (do
          (q/rect lpipe-x lpipe-y lpipe-w pipe-width)
          (q/ellipse circ1-x circ1-y  circ-r circ-r)
          ;; batch 2
          (q/rect rpipe-x y-pos rpipe-w pipe-width)
          (q/ellipse circ2-x circ1-y circ-r circ-r))
        (swap! local-horiz-cache conj {:lpipe-x    lpipe-x
                                       :lpipe-y    lpipe-y
                                       :lpipe-w    lpipe-w
                                       :rpipe-w    rpipe-w
                                       :pipe-width pipe-width
                                       :rpipe-x    rpipe-x
                                       :y-pos      y-pos
                                       :circ2-x    circ2-x
                                       :circ1-y    circ1-y
                                       :circ-r     circ-r
                                       :circ1-x    circ1-x
                                       :cc-off     cc-off})))
    (reset! fg-pipes @local-horiz-cache)))

        



(defn- build-frame
  "Builds the outer rectangular frame which is made of 4 long, thin rectangles."
  []
  (let [pipe-width            (u/%of 1.5 (q/width))                          ; width of inner pipes (a bit smaller than frame)
        frame-width           (u/%of 3 (q/width))
        offset-from-edge      (u/%of 25 (q/width))                         ; centers on the canvas
        span-w                (- (q/width)  frame-width)
        span-h                (- (q/height) frame-width)
        inner-height          (- span-h frame-width)
        ;; IF centering; do these
        ;; span-w           (- (- (q/width) offset-from-edge) pipe-width)  ; frame width
        ;; span-h           (- (- (q/height) offset-from-edge) pipe-width) ; frame height
        tx                    (/ offset-from-edge 2)
        num-batches           6                                            ; a batch is a set of fg and bg pipes
        num-pipes             5
        ;; used for centering all horiz bars in middle of frame.
        height-of-batch       (+ pipe-width pipe-width (* pipe-width num-pipes)) ; plus the sizes inbetween
        height-of-all-batches (* height-of-batch num-batches) ; 
        offset-from-top       (/ (- inner-height height-of-all-batches) 2) ;; sum of the height of all batches, subtracted from height of inner-frame divided by two
        _ (prn "offset from top is" inner-height offset-from-top height-of-batch height-of-all-batches)
        offset-batch          (let [x (/ span-h (+ 3 num-batches))]
                                (+ x (/ x 3)))
        ;; passed around to sub-draw funcs
        config                {:pipe-width      pipe-width
                               :frame-width     frame-width
                               :num-pipes       num-pipes
                               :num-batches     num-batches
                               :offset-from-top offset-from-top
                               :fw              span-w       ;
                               :fh              span-h       ;
                               :ifw             (- span-w pipe-width)
                               :ifh             inner-height #_ (- span-h pipe-width)}
        ;; sequence the sub drawing funcs
        seq-layers            (fn [func]
                                (doseq [amt (range 0 (:num-batches config))]
                                  (q/with-translation [0 (+  (/ offset-from-top 2) (* offset-from-top amt))]
                                    (func))))]

    ;; (q/with-translation [tx tx])
      ;; Frame
    (q/rect 0 0 span-w frame-width)               ; top bar
    (q/rect span-w 0 frame-width span-h)          ; right sidebar
    (q/rect frame-width span-h span-w frame-width) ; bottom bar
    (q/rect 0 frame-width frame-width span-h)      ; left bar


    ;; Inner contents - some layering magic
    (seq-layers (partial build-bg-horiz-pipes config))
    (build-vert-pipes config)
    (seq-layers (partial build-fg-horiz-pipes fg-pipes))))



(defn setup []
  (q/frame-rate 1)
  (q/smooth 2)
  (q/color-mode :hsb)
  {})

(defn update-state [state]
  {})

;; -- Line drawings ---

(defn draw-state [state]
  ;; (q/no-loop)
  (q/stroke-weight (u/%of 0.25 (q/width)) #_3)
  (q/background 240)
  (build-frame)
  #_(q/save "img.jpg"))

(defn ^:export run-sketch []
  (q/defsketch code
    :host "code"
    :size [800 800]
    :setup setup
    :update update-state
    :draw draw-state
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
;; (run-sketch)
