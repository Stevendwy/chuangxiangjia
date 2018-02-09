	//音乐播放和停止
		var gameMusic = document.getElementById('gameMusic');
		var music_play = document.getElementById("plays");
		var music_paused = document.getElementById("paused");
			gameMusic.play();
 			gameMusic.loop = true;
 		music_play.onclick = function  () {
 			music_play.style.display = "none";
 			music_paused.style.display = "block";
 			gameMusic.pause();
 			document.cookie = "useDo=paused;max-age=3600";
 			localStorage.keys = 98;
 		};
 		music_paused.onclick = function  () {
 			music_play.style.display = "block";
 			music_paused.style.display = "none";
 			gameMusic.play();
   			deleteCookie("useDo");
   			localStorage.remove('keys');
 		};
 		if (isCookieExist("useDo")) {
			music_play.style.display = "none";
 			music_paused.style.display = "block";
 			gameMusic.pause();
		};
 		for(var temp in localStorage){
			if (localStorage["keys"]==98) {
			music_play.style.display = "none";
 			music_paused.style.display = "block";
 			gameMusic.pause();
 			localStorage.keys = 98;
			}
		}
	
