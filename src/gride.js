const cells = document.querySelectorAll(".case");

let markList = [];
let emptyList =[];
let mark="";
let index=0;
let random=0;

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

    if( play(e.target,"circle") ){

    };
    
  
    mark="cross";
    // disableGride();
    // timeOutID=setTimeout(cpuplay, 2000);
    index=cpuPlay();

    if(undefined===index) {
        //TODO afficher un modal "Tout le monde a perdu !"
        finDePartie();
        return;
    };
    const cellCPU = document.querySelector("#case"+index);
    cellCPU.classList.add(mark);
    markList[index] = mark;


    if( hasWin(mark) ) {
        finDePartie();
        incrementCPU();
        //  TODO : afficher le modal "L'ordi a gagné" = modal.show();
    }
};  

const play=(cell, mark)=> {
    index = parseInt(cell.id.substr(4));
    if (markList[index]) {
        return false;
    }

    cell.classList.add(mark);
    markList[index] = mark;
   

    if( hasWin(mark) ) {
        finDePartie();
        incrementPlayer();
        //  TODO : personnaliser le modal
        showModal();
        return false;
    };

    return true;
};

const finDePartie = () => {
    stop();
    toggle(btnPause, btnStart);
    disableGride();
};

const cpuPlay = () => {
    emptyList.splice(0);

    cells.forEach( (value, ind)=> {
        if( !markList[ind] ) {
            emptyList.push(ind);
        }
    });

    random = emptyList[Math.floor(Math.random()*(emptyList.length-1))];
    return random;
};

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
