let scorePlayer;
let scoreCPU;

const constrScore = () => {
    scorePlayer = 0;
    scoreCPU=0;
}

const incrementPlayer = () => {
    scorePlayer += 1;
    $("#scorePlayer").text(scorePlayer);
};

const incrementCPU = () => {
    scoreCPU += 1;
    $("#scoreCPU").text(scoreCPU);
};



