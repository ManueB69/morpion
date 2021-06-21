const cells = document.querySelectorAll(".case");

let markList = [];
let emptyList =[];
let mark="";

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

    const index = parseInt(e.target.id.substr(4));
    if (markList[index]) {
        return;
    }

    if( play("circle") ) {
        finDePartie("Player");
    };

    if( cpuPlay() ) {
        finDePartie("CPU");
    }
};  
    
const finDePartie = (gagnant) => {
    stop();
    toggle(btnPause, btnStart);
    disableGride();
    incrementScore(gagnant);
};

const cpuPlay = () => {
    emptyList.splice(0);
    cells.forEach( (value, ind)=> {
        if( markList[ind] ) {
            return;
        }
        let lengEmptyList=emptyList.push(ind);
    });
    let random = emptyList[Math.floor(Math.random()*emptyList.length)]
    return ( play(cells[random],"cross") );
};

const play = (cellule, index, mark) => {
    cellule.target.classList.add(mark);
    markList[index] = mark;

    if (3 > markList.length || !hasWin(mark)) {
        return false;
    }
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

const initGride = () => {
    markList.splice(0);
    cells.forEach((cell) => {
        cell.classList.remove("circle", "cross");
    });
    enableGride();
}

const enableGride = () => {
    cells.forEach((cell) => {
        cell.addEventListener("click", markCircle)
    });
}

const disableGride = () => {
    cells.forEach(cell => {
        cell.removeEventListener("click", markCircle)
    });
}

btnStart.addEventListener("click", initGride);
btnPause.addEventListener("click", disableGride);
btnResume.addEventListener("click", enableGride);
