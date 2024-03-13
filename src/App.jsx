import "aframe";
import "ar.js";
import { Entity, Scene } from "aframe-react";
import "./App.css";
import bulbasaur from "./assets/bulbasaur.glb";

function App() {
  return (
    <Scene vr-mode-ui="enabled: false">
      <a-assets>
        <a-asset-item id="bulbasaur" src={bulbasaur}></a-asset-item>
      </a-assets>
      {/* <Entity primitive="a-box" color="red" position="0 0 -5" /> */}
      <Entity gltf-model="#bulbasaur" position={{ x: 0, y: 0, z: -2 }} />
    </Scene>
  );
}

export default App;
