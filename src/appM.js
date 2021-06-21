const btnStart=document.querySelector("#timerStart");
const btnPause=document.querySelector("#timerPause");
const btnResume=document.querySelector("#timerResume");

//BOUTONS - méthode compliquée
const toogle=(btnDisappear, btnAppear)=>{
	btnDisappear.classList.remove("d-block");
	btnDisappear.classList.add("d-none");
	btnAppear.classList.remove("d-none");
	btnAppear.classList.add("d-block");
};


let playTime = document.querySelector("#timerTime");
let intervalID=0;

const start=()=>{
	if(btnStart.classList.contains("d-block")) {
		dS=0;
		secondes=0;
		dM=0;
		minutes=0;
		increment();
		toogle(btnStart, btnPause);
		intervalID= setInterval(increment, 1000);
	};
};

const pause=()=>{
	if(btnPause.classList.contains("d-block")) {
		toogle(btnPause, btnResume);
		clearInterval(intervalID);

	};
};
const resume=()=>{
	if(btnResume.classList.contains("d-block")) {
		toogle(btnResume, btnPause);
		intervalID= setInterval(increment, 1000);
	};
};

const gridIni=()=>{
	if(btnResume.classList.contains("d-block")) {
		toogle(btnPause, btnStart);
		intervalID= setInterval(increment, 1000);
	};
};

btnStart.addEventListener("click",start);
btnPause.addEventListener("click",pause);
btnResume.addEventListener("click",resume);



