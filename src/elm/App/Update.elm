module App.Update exposing (init, update)

import App.Model exposing (Flags, Model, Msg)


init : Maybe Flags -> ( Model, Cmd Msg )
init maybeFlags =
    case maybeFlags of
        Nothing ->
            ( { flags = {} }, Cmd.none )

        Just flags ->
            ( { flags = flags }, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        _ ->
            model ! []
