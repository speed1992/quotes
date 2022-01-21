import { currentData } from "../../utils/staticDataUtils";

export async function play(index) {
    var synth = window.speechSynthesis;
    console.log("synth.speaking", synth.speaking)
    if (synth.speaking) {
        console.log("paused")
        synth.cancel();
    }
    else {
        console.log("playing audio")
        for (let i = index; i < currentData.length; i++) {
            await getNextAudio(currentData[i])
        }
    }
    
    
    function getNextAudio(message) {
        let audio = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.speak(audio);
        return new Promise((resolve,reject) => { 
	    	audio.onend = resolve;
        });
  }
    
    
    
    
}

