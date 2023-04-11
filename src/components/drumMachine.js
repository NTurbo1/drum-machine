import { DrumPad } from "./drumPad";

const heater_1 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3')
const heater_2 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3')
const heater_3 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3')
const heater_4 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3')
const clap = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3')
const openHH = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3')
const kickNHat = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3')
const kick = new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3')
const closedHH = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3')

const allAudios = [heater_1, heater_2, heater_3, heater_4, clap, openHH, kickNHat, 
    kick, closedHH]

export function DrumMachine({powerOn, setClickedSoundName, audioVolume}) {

    for(let a of allAudios) {
        a.volume = audioVolume / 100
    }

    return (
        <div id="drum-machine">
            <DrumPad drumPadKey='Q' audio={heater_1} powerOn = {powerOn} soundName="Heater 1"
                setClickedSoundName = {setClickedSoundName}
            />
            <DrumPad drumPadKey='W' audio={heater_2} powerOn = {powerOn} soundName="Heater 2"
                setClickedSoundName = {setClickedSoundName}
            />
            <DrumPad drumPadKey='E' audio={heater_3} powerOn = {powerOn} soundName="Heater 3"
                setClickedSoundName = {setClickedSoundName}
            />
            <DrumPad drumPadKey='A' audio={heater_4} powerOn = {powerOn} soundName="Heater 4"
                setClickedSoundName = {setClickedSoundName}
            />
            <DrumPad drumPadKey='S' audio={clap} powerOn = {powerOn} soundName="Clap"
                setClickedSoundName = {setClickedSoundName}
            />
            <DrumPad drumPadKey='D' audio={openHH} powerOn = {powerOn} soundName="Open HH"
                setClickedSoundName = {setClickedSoundName}
            />
            <DrumPad drumPadKey='Z' audio={kickNHat} powerOn = {powerOn} soundName="Kick n' Hat"
                setClickedSoundName = {setClickedSoundName}
            />
            <DrumPad drumPadKey='X' audio={kick} powerOn = {powerOn} soundName="Kick"
                setClickedSoundName = {setClickedSoundName}
            />
            <DrumPad drumPadKey='C' audio={closedHH} powerOn = {powerOn} soundName="Closed HH"
                setClickedSoundName = {setClickedSoundName}
            />
        </div>
    )

}