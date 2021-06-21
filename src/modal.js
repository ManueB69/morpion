const showModal= ()=> {
  
  const container = document.createElement("div");
  container.classList.add("modal");
  container.innerHTML = getModalHtml();
  document.body.appendChild(container);
  const modal = new bootstrap.Modal(container);
  modal.show();
}

const getModalHtml = () => {
  return `<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Partie terminée</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>C'est gagné !</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>`;
}



