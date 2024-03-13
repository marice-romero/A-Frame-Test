import "aframe";
import "ar.js";
import { Entity, Scene } from "aframe-react";
import "./App.css";

function App() {
  return (
    <Scene vr-mode-ui="enabled: false">
      <a-assets>
        <a-asset-item
          id="astronaut"
          src="https://cdn.glitch.com/ac5eecac-40b2-4897-8f67-28c497a19b47%2FAstronaut.glb"
        ></a-asset-item>
      </a-assets>
      {/* <Entity primitive="a-box" color="red" position="0 0 -5" /> */}
      <Entity gltf-model="#astronaut" position={{ x: 0, y: 0, z: -2 }} />
    </Scene>
  );
}

export default App;
