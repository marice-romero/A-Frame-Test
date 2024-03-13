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
      <Entity
        gltf-model="#bulbasaur"
        scale={{ x: 0.75, y: 0.75, z: 0.75 }}
        position={{ x: 0, y: 0, z: -5 }}
      />
    </Scene>
  );
}

export default App;
