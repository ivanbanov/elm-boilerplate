module App.View exposing (view)

import App.Model exposing (Model)
import Html exposing (..)


view : Model -> Html msg
view model =
    div
        []
        [ text "Hello World!" ]
