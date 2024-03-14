import "aframe";
import "ar.js";
import { Entity, Scene } from "aframe-react";
import "./App.css";
import bulbasaur from "./assets/bulbasaur.glb";

function App() {
  AFRAME.registerComponent("markerhandler", {
    init: function () {
      const model = document.querySelector("#bulbasaur-model");
      const asset = document.querySelector("#bulbasaur");
      const src = asset.getAttribute("src");
      model.addEventListener("model-loaded", () => {
        if (!THREE.Cache.files || !THREE.Cache.files[src]) {
          location.reload();
        }
      });
    },
  });
  return (
    <Scene
      vr-mode-ui="enabled: false"
      renderer="logarithmicDepthBuffer: true;"
      markerhandler
    >
      <a-assets>
        <a-asset-item id="bulbasaur" src={bulbasaur}></a-asset-item>
      </a-assets>
      <Entity camera>
        <a-camera position="0 0.5 2" look-controls-enabled="false"></a-camera>
        <Entity
          id="bulbasaur-model"
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
