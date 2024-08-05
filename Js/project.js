function configurarModal(buttonOpen, modal, buttonClose) {

  buttonOpen.addEventListener("click", function () {
    modal.showModal();
    
  });

  buttonClose.addEventListener("click", function () {
    modal.close();
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.close();
    }
  });

}

for (let i = 1; i <= 15; i++) {
  const buttonOpen = document.getElementById(`project_img${i}`);
  const modal = document.getElementById(`modal${i}`);
  const buttonClose = document.getElementById(`close_button${i}`);

  configurarModal(buttonOpen, modal, buttonClose);
}