let btnStart;
let btnPause;
let btnResume;
let playTime;
let date;
let intervalId;



const constrTimer = () => {
    btnStart = $("#timerStart");
    btnPause = $("#timerPause");
    btnResume = $("#timerResume");
    playTime = $("#timerTime");
    date = new Date(0);
    btnStart.on("click", start);
    btnPause.on("click", pause);
    btnResume.on("click", resume);
}

const toggle = (disapear, appear) => {
    disapear.addClass("d-none");
    disapear.removeClass("d-block");
    appear.addClass("d-block");
    appear.removeClass("d-none");
};

const increment = () => {
    playTime.text(date.toISOString().substr(14, 5));
    date.setSeconds(date.getSeconds() + 1);
}

const start = () => {
    date.setTime(0);
    increment();
    toggle(btnStart, btnPause);
    intervalId = setInterval(increment, 1000);
};

const pause = () => {
    toggle(btnPause, btnResume);
    stop();
};

const resume = () => {
    toggle(btnResume, btnPause);
    intervalId = setInterval(increment, 1000);
};

const stop = () => {
    clearInterval(intervalId);
};


