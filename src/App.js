import { useState } from "react";
import { DrumMachine } from "./components/drumMachine";
import { DrumMachineSetting } from "./components/drumMachineSetting";

import './styles/App-style.css';

function App() {
  const [powerOn, setPower] = useState(true)
  const [clickedSoundName, setClickedSoundName] = useState('')
  const [audioVolume, setAudioVolume] = useState(50)

  return (
    <div id="main-board">
      <div id="drum-box">
        <DrumMachine powerOn = {powerOn} setClickedSoundName = {setClickedSoundName}
            audioVolume = {audioVolume}
        />
        <DrumMachineSetting powerOn = {powerOn} setPower = {setPower} clickedSoundName = {clickedSoundName}
            audioVolume = {audioVolume} setAudioVolume = {setAudioVolume}
        />
      </div>
    </div>
  );
}

export default App; 
