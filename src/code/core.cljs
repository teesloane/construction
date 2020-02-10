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
;;     (q/stroke-weight 1)
;;     (q/line x-l y-b 250 250)))

(defmethod draw-lines :sine
  [{:keys [sq->span size y-off x-l x-r y-b y-m y-t amp] :as lset}]
  (prn "input is" y-m)
  (doseq [ line sq->span
          :let [sine-input  (u/map-n->0-1 line x-l x-r)
                y-offset    (+ y-t (rand size))
                _           (prn "offset is" y-off)
                end-y-point (+ y-off (* amp (q/sin (+ (* sine-input 10)))))]]
    (q/stroke-weight 2)
    (q/line line y-b line end-y-point))) 

(defmethod draw-lines :full
  [{:keys [sq->span y-b y-m y-t] :as lset}]
  (doseq [ line sq->span]
    (q/stroke-weight 2)
    (q/line line y-b line y-t)))

(defmethod draw-lines :empty
  [lset]
  nil)

(defn rnd-draw-line-method []
  (rand-nth (-> draw-lines methods keys)))
 
;; -- Square business ---

(defn draw-square [[x y] size margin]
  "Draws a square with a sin-line inside of it"
  (let [smult    #(/ size %)        ; use size of square as measuring stick for other calcs.
        amp      (/ size (smult 8)) ; depth of the waves.
        sin-a    (smult (u/rand-b-w (/ size 4) size))
        outer-sq (/ (- (+ size margin) size) 2)
        offset   (smult 2.2)]       ; how far down the square. FIXME: make relative / random
    
      (q/with-translation [outer-sq outer-sq]
        (q/rect x y size size)
        (draw-lines {:type     (rnd-draw-line-method)
                     :amp      amp                        ; applied to sine waves.
                     :sq->span (range x (+ size x))
                     :size     size
                     :y-t      y                          ; top of quare
                     :x-l      x                          ; left
                     :x-r      (+ x size)                 ; far right
                     :y-off    (u/rand-b-w                ; picks a number between the square height
                                (+ y 10)                  ; using magic number 10 as a buffer... FIXME
                                (- (+ y size) 10))       
                     :y-b      (+ y size)}))))            ; base

(defn draw-state [state]
  ;; (q/no-loop)
  (q/background 240)
  (let [sq-div      12                                    ; width size is divided against sketch width
        margin      30                                    ; space between squares
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
  #_(when (q/key-pressed?) (prn "stuff happened") #_(q/save "img.jpg")))

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
