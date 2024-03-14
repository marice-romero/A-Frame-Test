import "aframe";
import "ar.js";
import { Entity, Scene } from "aframe-react";
import "./App.css";
import bulbasaur from "./assets/bulbasaur.glb";

function App() {
  return (
    <Scene vr-mode-ui="enabled: false" renderer="logarithmicDepthBuffer: true;">
      <a-assets>
        <a-asset-item id="bulbasaur" src={bulbasaur}></a-asset-item>
      </a-assets>
      <Entity camera>
        <Entity
          gltf-model="#bulbasaur"
          scale={{ x: 0.75, y: 0.75, z: 0.75 }}
          position={{ x: 0, y: 0, z: -5 }}
        />
      </Entity>

      {/* <Entity
        gltf-model="#bulbasaur"
        scale={{ x: 0.75, y: 0.75, z: 0.75 }}
        position={{ x: 1, y: 1, z: -2 }}
      />
      <Entity
        gltf-model="#bulbasaur"
        scale={{ x: 0.75, y: 0.75, z: 0.75 }}
        position={{ x: -1, y: 1, z: -3 }}
      />
      <Entity
        gltf-model="#bulbasaur"
        scale={{ x: 0.75, y: 0.75, z: 0.75 }}
        position={{ x: 0, y: 3, z: -5 }}
      />
      <Entity
        gltf-model="#bulbasaur"
        scale={{ x: 0.75, y: 0.75, z: 0.75 }}
        position={{ x: 1, y: 3, z: -2 }}
      />
      <Entity
        gltf-model="#bulbasaur"
        scale={{ x: 0.75, y: 0.75, z: 0.75 }}
        position={{ x: -1, y: 3, z: -3 }}
      />

      <Entity
        gltf-model="#bulbasaur"
        scale={{ x: 0.75, y: 0.75, z: 0.75 }}
        position={{ x: 0, y: 0, z: -10 }}
      />
      <Entity
        gltf-model="#bulbasaur"
        scale={{ x: 0.75, y: 0.75, z: 0.75 }}
        position={{ x: 1, y: 1, z: -10 }}
      />
      <Entity
        gltf-model="#bulbasaur"
        scale={{ x: 0.75, y: 0.75, z: 0.75 }}
        position={{ x: -1, y: 1, z: -10 }}
      />
      <Entity
        gltf-model="#bulbasaur"
        scale={{ x: 0.75, y: 0.75, z: 0.75 }}
        position={{ x: 0, y: 3, z: -15 }}
      />
      <Entity
        gltf-model="#bulbasaur"
        scale={{ x: 0.75, y: 0.75, z: 0.75 }}
        position={{ x: 1, y: 3, z: -15 }}
      />
      <Entity
        gltf-model="#bulbasaur"
        scale={{ x: 0.75, y: 0.75, z: 0.75 }}
        position={{ x: -1, y: 3, z: -15 }}
      /> */}
    </Scene>
  );
}

export default App;
