// //modal1
// const winModal1=document.createElement("div");

// winModal1.classList.add("modal");
// winModal1.tabindex="-1";
// winModal1.innerText="1"

// const main=document.querySelector("main");
// main.appendChild(winModal1);

// //modal2
// const winModal2=document.createElement("div");

// winModal2.classList.add("modal-dialog");;
// winModal2.innerText="2"

// const modal1=document.querySelector(".modal");
// modal1.appendChild(winModal2);

// //modal3
// const winModal3=document.createElement("div");

// winModal3.classList.add("modal-content");;
// winModal3.innerText="3"

// const modal2=document.querySelector(".modal-dialog");
// modal2.appendChild(winModal3);

// //modal4
// const winModal4=document.createElement("div");

// winModal4.classList.add("modal-header");;
// winModal4.innerText="4"

// const modal3=document.querySelector(".modal-content");
// modal3.appendChild(winModal4);

// //modal5
// const winModal5=document.createElement("h5");

// winModal5.classList.add("modal-title");;
// winModal5.innerText="5 Titre de la fenêtre"

// const modal4=document.querySelector(".modal-header");
// modal4.appendChild(winModal5);

// //modal6
// const winModal6=document.createElement("h5");

// winModal6.classList.add("modal-title");;
// winModal6.innerText="5 Titre de la fenêtre"

// const modal4=document.querySelector(".modal-header");
// modal4.appendChild(winModal6);
Modal.innerHTML=`
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
       <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
`