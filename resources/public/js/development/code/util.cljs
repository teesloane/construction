(ns code.util
  (:require [quil.core :as q]))


(defn map-n->0-1 [n in-min in-max]
  (q/map-range n in-min in-max 0 1))

(defn rand-b-w [a b]
  (q/map-range (rand 1) 0 1 a b))
