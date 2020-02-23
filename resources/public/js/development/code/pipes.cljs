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

(defn- build-vert-pipes
  "Draws vertical pipes within the structure of build-frame,
  pipes are spread evenly across the frame, default numbering 5.
  Seems to be using the same x-y grid with the offset from build-frame; ie
  the offset-from-edge sets (0,0) to be (offset-from-edge, offset-from-edge)"
  [{:keys [pipe-width fw ifw fh ifh] :as config}]
  (let [num-bars       5
        bar-width      (u/%of 75 pipe-width)
        ;; config distances between bars
        bar-int-buffer (u/%of 3.3 ifw)
        bar-interval   (+ (/ ifw num-bars) bar-int-buffer)
        bar-offset     (- (+ pipe-width bar-int-buffer) (/ bar-width 2))]
    (doseq [b    (range 0 num-bars)
            :let [x (+ bar-offset (* b bar-interval))]]
      (q/rect x pipe-width bar-width ifh))))

(defn- build-bg-horiz-pipes
  "The first layer of pipes, these run horizontally behind build-vert-pipes
  These start flush with inner frame xl and  xr.
  They end random-ishly somewhere inside the frame, either 1/3 or 2/3 the way across
  These lines end with a circle at their tip."
  [{:keys [pipe-width fw fh ifw ifh] :as config}]
  (let [num-bars 6
        space-between-bars (u/%of 11 ifw)
        first-bar-width    (u/%of 66 ifw)
        set-width [(u/%of 33 ifw) (u/%of 66 ifw)]]
         ;; make this variable
    (doseq [bar (range 0 num-bars)
            :let [bar-type      (even? bar)

                  y-top-offset  (* 3 pipe-width) ;; arbitrary - how far from top
                  y-pos         (+ y-top-offset (* bar pipe-width))
                  ;; left pipe
                  lpipe-x       pipe-width ;; offset from outer frame
                  lpipe-y       y-pos
                  ;; lpipe-w       first-bar-width
                  lpipe-w       (if bar-type (first set-width) (second set-width))

                  circ1-x       (+ pipe-width lpipe-w)
                  circ-r        pipe-width
                  circ1-y       (+ (/ circ-r 2) y-pos)

                  circ2-y       circ1-y
                  circ2-x       (+ space-between-bars circ1-x)

                  rpipe-x       circ2-x
                  rpipe-w        (- fw circ2-x)
                  cc-off 1]] ; Circle / curve offset for end of horiz bar - FIXME -- magic #


      ;; batch one
      (if bar-type
        ;; Draw bars with circular-ends
        (do
          (q/rect lpipe-x lpipe-y lpipe-w pipe-width)
          (q/ellipse circ1-x circ1-y  circ-r circ-r)
          ;; batch 2
          (q/rect rpipe-x y-pos rpipe-w pipe-width)
          (q/ellipse circ2-x circ1-y circ-r circ-r))
        ;; draw bars with rounded edges.
        ;; FIXME - this block needs to overtop of the vert bars
        ;; To do this, create a new function, and simply pass this value in as a fn
        ;; then eval the fn after everything else has drawn!
        (do
          ;; left-side
          (q/rect lpipe-x lpipe-y lpipe-w pipe-width)
          (q/arc (- circ1-x cc-off) circ1-y  circ-r circ-r (- q/HALF-PI) q/HALF-PI)
          ;; batch 2 - right-side lines
          (q/rect rpipe-x y-pos rpipe-w pipe-width)
          (q/arc (+ cc-off circ2-x) circ1-y circ-r circ-r q/HALF-PI (- q/HALF-PI)))))))

        



(defn- build-frame
  "Builds the outer rectangular frame which is made of 4 long, thin rectangles."

  []
  (let [pipe-width       (u/%of 2 (q/width))                            ; width of inner pipes (a bit smaller than frame)
        offset-from-edge (u/%of 25 (q/width))                           ; centers on the canvas
        span-w           (- (- (q/width) offset-from-edge) pipe-width)  ; frame width
        span-h           (- (- (q/height) offset-from-edge) pipe-width) ; frame height
        tx               (/ offset-from-edge 2)
        config           {:pipe-width pipe-width
                          :fw         span-w ;
                          :fh         span-h ;
                          :ifw        (- span-w pipe-width)
                          :ifh        (- span-h pipe-width)}]

    (q/with-translation [tx tx]
      (q/rect 0 0 span-w pipe-width)               ; top bar
      (q/rect span-w 0 pipe-width span-h)          ; right sidebar
      (q/rect pipe-width span-h span-w pipe-width) ; bottom bar
      (q/rect 0 pipe-width pipe-width span-h)      ; left bar

      (build-bg-horiz-pipes config)
      (build-vert-pipes config))))


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
  (q/background 240)
  (build-frame)
  #_(q/save "img.jpg"))

(defn ^:export run-sketch []
  (q/defsketch code
    :host "code"
    :size [500 500]
    :setup setup
    :update update-state
    :draw draw-state
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
;; (run-sketch)
