module App.Model exposing (Flags, Model, Msg)


type alias Model =
    { flags : Flags
    }


type alias Flags =
    {}


type Msg
    = NoOp
