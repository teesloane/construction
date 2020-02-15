(ns code.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [code.util :as u]))

(defn setup []
  (q/frame-rate 1)
  (q/smooth 2)
  (q/color-mode :hsb)
  {})

(defn update-state [state]
  {})

;; -- Line drawings ---

(defmulti draw-lines (fn [lset] (:type lset)))

;; (defmethod draw-lines :weird-spider
;;   [{:keys [sq->span x-l x-r y-b y-t amp] :as lset}]
;;   (doseq [ line sq->span
;;           :let [sine-input  (u/map-n->0-1 line x-l x-r)
;;                 end-y-point (+ y-b (* amp (q/sin (+ (* sine-input 10)))))]]
;;     (q/stroke-weight u/%of 1 (q/width))
;;     (q/line x-l y-b 250 250)))

(defmethod draw-lines :sine
  [{:keys [sq->span size y-off x-l x-r y-b y-m y-t amp] :as lset}]
  (prn "input is" y-m)
  (let [your-sine-ness? (u/rand-b-w 0.2 12) ;; FIXME: magic numbers
        sin-or-cos?     (if (> 5 your-sine-ness?) q/sin q/cos)
        t->b-or-b->t?   (if (< 5 your-sine-ness?) true false)]
    (doseq [ line sq->span
            :let  [sine-input  (u/map-n->0-1 line x-l x-r)
                   end-y-point (+ y-off (* amp (sin-or-cos? (+ (* sine-input your-sine-ness?)))))]]
      (q/stroke-weight 2)
      (if t->b-or-b->t?
        (q/line line y-b line end-y-point)
        (q/line line end-y-point line y-t)))))

(defmethod draw-lines :full
  [{:keys [sq->span y-b y-m y-t] :as lset}]
  (doseq [ line sq->span]
    (q/stroke-weight 2)
    (q/line line y-b line y-t)))

(defmethod draw-lines :empty
  [lset]
  nil)

(defn rnd-draw-line-method []
  (rand-nth (conj (-> draw-lines methods keys) :empty)))
 
;; -- Square business ---

(defn draw-square [[x y] size margin]
  "Draws a square with a sin-line inside of it"
  (let [smult    #(/ size %)        ; use size of square as measuring stick for other calcs.
        amp      (/ size (smult 8)) ; depth of the waves.
        sin-a    (smult (u/rand-b-w (/ size 4) size))
        outer-sq (/ (- (+ size margin) size) 2)]
   
      (q/stroke (q/color 180 10 1))

      (q/stroke-weight (u/%of 0.125 (q/width)))
      (q/with-translation [outer-sq outer-sq]
        (q/rect x y size size)
        (draw-lines {:type     (rnd-draw-line-method)
                     :amp      amp                    ; applied to sine waves.
                     :sq->span (range x (+ size x))
                     :size     size
                     :y-t      y                      ; top of quare
                     :x-l      x                      ; left
                     :x-r      (+ x size)             ; far right
                     :y-off    (u/rand-b-w            ; picks a number between the square height
                                (+ y 15)              ; using magic number 10 as a buffer... FIXME
                                (- (+ y size) 15))
                     :y-b      (+ y size)}))))        ; base

(defn draw-state [state]
  (q/no-loop)
  (q/background 240)
  (let [sq-div      12                                    ; width size is divided against sketch width
        margin          (u/%of 4 (q/width))
        ;; margin      30 #_(/ (q/width 10))                                  ; space between squares
        num-squares 6                                     ; number along x + y axis
        size        (/ (q/width)  sq-div)                 ; size of square, but also a measuring stick
        offset      (* (/ num-squares 2) (+ margin size)) ; offset for centering on canvas
        halfw       (- (/ (q/width)  2) offset)           ; for translation
        halfh       (- (/ (q/height) 2) offset)]          ; for translation
    (doseq [l (range 0 num-squares)]                      ; build horizontal rows
      (doseq [yr   (range 0 num-squares)                  ; vertical rows
              :let [xpos (+ (* margin l) (* size l))      ; pos of x+y of squares
                    ypos (+ (* margin yr) (* size yr))]]  ; ^
        (q/with-translation [halfw halfh]
          (q/rect xpos ypos (+ margin size) (+ margin size))
          (draw-square [xpos ypos] size margin)))))
  (prn (-> draw-lines methods keys))
  #_(q/save "img.jpg"))

(defn ^:export run-sketch []
  (q/defsketch code
    :host "code"
    :size [2800 2800]
    :setup setup
    :update update-state
    :draw draw-state
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
;; (run-sketch)
