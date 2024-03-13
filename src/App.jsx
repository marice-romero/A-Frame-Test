import "aframe";
import { Entity, Scene } from "aframe-react";
import "./App.css";

function App() {
  return (
    <Scene embedded arjs="sourceType: webcam;">
      <Entity
        geometry={{ primitive: "box" }}
        material={{ color: "red" }}
        position={{ x: 0, y: 0, z: -5 }}
        rotation={{ x: 0, y: 45, z: 0 }}
      />
    </Scene>
  );
}

export default App;
