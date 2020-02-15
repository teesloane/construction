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



(defn- build-frame
  "Builds the outer rectangular frame which is made of 4 long, thin rectangles."

  []
  (let [thickness    (u/%of 2 (q/width))
        offset-from-edge 50 ;; FIXME: magic #
        span-w (- (- (q/width) offset-from-edge) thickness)
        span-h (- (- (q/height) offset-from-edge) thickness)]

    (q/rect 0 0 span-w thickness) ;; top bar
    (q/rect span-w 0 thickness span-h) ; right sidebar
    (q/rect thickness span-h span-w thickness) ;; bottom bar
    (q/rect 0 thickness thickness span-h))) ;; left bar



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
  (q/with-translation [25 25] ;; FIXME magic number
   (build-frame))
  #_(q/save "img.jpg"))

(defn ^:export run-sketch []
  (q/defsketch code
    :host "code"
    :size [700 700]
    :setup setup
    :update update-state
    :draw draw-state
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
;; (run-sketch)
