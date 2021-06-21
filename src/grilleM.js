const cells=document.querySelectorAll(".case");

const combinaisonList=[
    ["case0", "case1", "case2"],
    ["case3", "case4", "case5"],
    ["case6", "case7", "case8"],
    ["case0", "case3", "case6"],
    ["case1", "case4", "case7"],
    ["case2", "case5", "case8"],
    ["case0", "case4", "case8"],
    ["case2", "case4", "case6"],
];

const caseChoisie= new Array(9);

const checkWinner=(joueur)=> {
    for(let i=0;i<combinaisonList.length;i+=1) {

       if( caseChoisie[(combinaisonList[i][0]).substr(4,1)]==joueur
            && caseChoisie[(combinaisonList[i][1]).substr(4,1)]==joueur 
            && caseChoisie[(combinaisonList[i][2]).substr(4,1)]==joueur ) {
            winModal.show();
            return true;
       } else {
            return false;
         };
    };
};


const clearGrid=()=> {
	toogle(btnPause, btnStart);
    disableGrid();
    clearInterval(intervalID);
    cells.forEach((cell)=>{
        cell.classList.remove("circle", "cross");
    });
    caseChoisie.splice(0);
    // scoreplayer();
};

const markPlayer=(e) => {
    index=parseInt(e.target.id.substr(4,1));
    if(false==caseChoisie[index]) { 
        return;
    }
    e.target.classList.add("circle");
    caseChoisie[index]="player";
    //TODO change 3 to 5 when CPU is on
    if (3>caseChoisie.length) {
        return;
    };

    if (checkWinner("player")) {
        console.log("the winner is the player");
        clearGrid();
    };  
};

const enableGrid =()=>{
    cells.forEach((cell)=> {
        cell.addEventListener("click", markPlayer);
    });
};

const disableGrid =()=>{
    cells.forEach((cell)=> {
        cell.removeEventListener("click", markPlayer);
    });
};

btnStart.addEventListener("click", enableGrid);
btnPause.addEventListener("click", disableGrid);
btnResume.addEventListener("click", enableGrid);
