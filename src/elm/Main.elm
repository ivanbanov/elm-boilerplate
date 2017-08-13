module Main exposing (..)

import App.Model exposing (Flags, Model, Msg)
import App.Update exposing (init, update)
import App.View exposing (view)
import Html exposing (..)


main : Program (Maybe Flags) Model Msg
main =
    programWithFlags
        { init = init
        , view = view
        , update = update
        , subscriptions = \_ -> Sub.none
        }
