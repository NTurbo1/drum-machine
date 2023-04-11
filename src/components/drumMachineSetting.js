export function DrumMachineSetting({powerOn, setPower, clickedSoundName, audioVolume, 
    setAudioVolume}) {
    function powerSwitchOn(e) {
        const switchBtn = e.target
        switchBtn.classList.add('switched-on')
        setPower(true)
    }

    function powerSwitchOff(e) {
        const switchBtn = e.target
        switchBtn.classList.remove('switched-on')
        setPower(false)
    }

    function handleVolumeChange(e) {
        setAudioVolume(e.target.value)
    }

    return (
        <div id="drum-machine-setting-box">
            <div id="power-box">
                <span className="btn-name">Power</span>
                <div className='switch-btn'>
                    <div className='switch switched-on' onClick={powerOn ? powerSwitchOff : powerSwitchOn}></div>
                </div>
            </div>

            <div id="sound-name-box">
                <span id="sound-name">{clickedSoundName}</span>
            </div>

            <div id="volume-box">
                <span id="volume-header">Volume</span>
                <div id="volume-control-box">
                    <input type="range" id="volume-controller" value={audioVolume} onChange={handleVolumeChange}/>
                    <span id="volume-display">{audioVolume}</span>
                </div>
            </div>
        </div>
    )
}