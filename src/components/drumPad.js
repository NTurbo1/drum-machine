export function DrumPad({drumPadKey, audio, powerOn, soundName, setClickedSoundName}) {

    function handleClick(e) {
        let drumPad = e.target

        if (drumPad.classList.contains('drum-pad-key')) {
            drumPad = drumPad.parentElement
        }

        drumPad.style.backgroundColor = 'orange'
        setTimeout(() => {
            drumPad.style.backgroundColor = 'rgb(115, 115, 115)'
        }, 100)
        
        audio.play()

        setClickedSoundName(soundName)
    }

    return (
        <div className="drum-pad" onClick={powerOn ? handleClick : null}>
            <span className="drum-pad-key">{drumPadKey}</span>
        </div>
    )
}