let cells;

let markList;
let emptyList;
let mark;
let index;
let random;
let combinaisonList;

const constrMorpion = () => {
    constrTimer();
    constrScore();
    cells = $(".case");
    markList =[];
    emptyList =[];
    mark="";
    index=0;
    random=0;
    btnStart.on("click", initGride);
    btnPause.on("click", disableGride);
    btnResume.on("click", enableGride);
    combinaisonList = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
};

const markCircle = (e) => {
    const target=$(e.target);
    if(play(target,"circle") ){
        incrementPlayer();
        showModal("L'humain (toi quoi !) ");
        return;
    }; 
    mark="cross";
    // disableGride();
    // timeOutID=setTimeout(cpuplay, 2000);
    index=cpuPlay();
    if(undefined===index) {
        //TODO afficher un modal "Tout le monde a perdu !"
        showModal("Personne n'");
        finDePartie();
        return;
    };
    const cellCPU = $("#case"+index);
    if(play (cellCPU, "cross") ){
        incrementCPU();
        showModal("L'ordi ");
    };
};  

const play=(cell, mark)=> {
    index = parseInt(cell.attr("id").substr(4));
    if (markList[index]) {
        return false;
    }
    cell.addClass(mark);
    markList[index] = mark;
    if( hasWin(mark) ) {
        finDePartie();
        //  TODO : personnaliser le modal : showModal();
        return mark;
    };
    return false;
};

const finDePartie = () => {
    stop();
    toggle(btnPause, btnStart);
    disableGride();
};

const cpuPlay = () => {
    emptyList.splice(0);

    cells.each( (ind, value)=> {
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
    cells.each((ind, cellul) => {
        const cell=$(cellul);
        cell.removeClass("circle");
        cell.removeClass("cross");
    });
    enableGride();
}

const enableGride = () => {
    cells.each((ind, cellul) => {
        const cell=$(cellul);
        cell.on("click", markCircle);
    });
}

const disableGride = () => {
    cells.each( (ind, cellul) => {
        const cell=$(cellul);
        cell.off("click", markCircle);
    });
}


