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
  pipes are spread evently across the frame, default numbering 5.
  Seems to be using the same x-y grid with the offset from build-frame; ie
  the offset-from-edge sets (0,0) to be (offset-from-edge, offset-from-edge)
  @param: `f-off` - the thickness of the frame bars
  @param: `frame-width` - the span of the frame, inclusive of the bars.
  "
  [f-off frame-width frame-height]
  (let [ifw            (- frame-width f-off)  ; `inner-frame-width`
        ifh            (- frame-height f-off) ; `inner-frame-height`
        num-bars       5
        bar-width      (u/%of 75 f-off)
        ;; config distances between bars
        bar-int-buffer (u/%of 3.3 ifw)
        bar-interval   (+ (/ ifw num-bars) bar-int-buffer)
        bar-offset     (- (+ f-off bar-int-buffer) (/ bar-width 2))]
    (doseq [b    (range 0 num-bars)
            :let [x (+ bar-offset (* b bar-interval))]]
      (q/rect x f-off bar-width ifh))))


(defn- build-frame
  "Builds the outer rectangular frame which is made of 4 long, thin rectangles."

  []
  (let [thickness    (u/%of 2 (q/width))
        offset-from-edge (u/%of 25 (q/width))  #_100
        span-w (- (- (q/width) offset-from-edge) thickness)
        span-h (- (- (q/height) offset-from-edge) thickness)
        tx (/ offset-from-edge 2)]

    (q/with-translation [tx tx]
      (q/rect 0 0 span-w thickness) ;; top bar
      (q/rect span-w 0 thickness span-h) ; right sidebar
      (q/rect thickness span-h span-w thickness) ;; bottom bar
      (q/rect 0 thickness thickness span-h) ; left bar
      (build-vert-pipes thickness span-w span-h))))





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
