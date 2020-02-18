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
  "The first layer of pipes, these run horizontall behind build-vert-pipes
  These start flush with inner frame xl and  xr.
  They end random-ishly somewhere inside the frame, either 1/3 or 2/3 the way across
  These lines end with a circle at their tip."
  [{:keys [pipe-width fw fh ifw ifh] :as config}]
  (let []
    (q/rect 10 20 (u/%of 66 ifw) pipe-width)
    (q/ellipse (+ pipe-width (u/%of 66 ifw) ) 25 10 10)))



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
