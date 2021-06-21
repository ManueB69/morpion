const cells = document.querySelectorAll(".case");

const markList = [];

const combinaisonList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const markCircle = (e) => {
    const mark = "circle";
    const index = parseInt(e.target.id.substr(4));
    if (markList[index]) {
        return;
    }
    e.target.classList.add(mark);
    markList[index] = mark;
    // TODO upgrade 3 to 5 when CPU is comming
    if (3 > markList.length || !hasWin(mark)) {
        return;
    }
    // TODO refresh  UI
    console.log("make the job");
}

const hasWin = (mark) => {
    for (const combinaison of combinaisonList) {
        if (mark === markList[combinaison[0]]
            && mark === markList[combinaison[1]]
            && mark === markList[combinaison[2]]) {
                return true;
        }
    }
    return false;
}

const enableGride = () => {
    cells.forEach(cell => cell.addEventListener("click", markCircle));
}

const disableGride = () => {
    cells.forEach(cell => cell.removeEventListener("click", markCircle));
}

btnStart.addEventListener("click", enableGride);
btnPause.addEventListener("click", disableGride);
btnResume.addEventListener("click", enableGride);
