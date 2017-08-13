import Elm from './elm/Main';

const appNode = document.getElementById('app');
const App = Elm.Main.embed(appNode, {});
