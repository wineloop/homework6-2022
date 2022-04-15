var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	video.play()
	console.log("The current volume is " + video.volume * 100 + "%")
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Current speed is "+ video.playbackRate)
	video.playbackRate *= 0.95
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate) 
	video.playbackRate /= 0.95
	console.log("New speed is " + video.playbackRate) 
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location is " + video.currentTime);
	video.currentTime += 15.0
	
	if(video.currentTime >= 67.403333) {
		video.load()
		video.play()
		console.log("Going back to beginning");
		
	}
	console.log("New location is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false
		document.getElementById("mute").innerHTML = "mute"
	}
	else {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute"
	}
	console.log("The value of mute is " + video.muted)
});

document.querySelector("#slider").addEventListener("click", function() {
	document.querySelector("#volume").innerHTML = this.value
	video.volume = this.value / 100
	
});

document.querySelector("#vintage").addEventListener("click", function() {
	document.getElementById("player1").classList.add("oldSchool");
	console.log("Old School Mode on")
	
});

document.querySelector("#orig").addEventListener("click", function() {
	document.getElementById("player1").classList.remove("oldSchool")
	console.log("Original Mode on")
	
});