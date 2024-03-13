import "aframe";
import "ar.js";
import { Entity, Scene } from "aframe-react";
import "./App.css";

function App() {
  return (
    <Scene vr-mode-ui="enabled: false">
      <Entity primitive="a-camera" position="0 1.6 0" />
      <Entity primitive="a-box" color="red" position="0 0 -5" />
    </Scene>
  );
}

export default App;
