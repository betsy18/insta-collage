let begin = () => {
  // declarando las funciones
  debugger
  document.addEventListener('dragenter', enter);
  // document.addEventListener('dragstart', star);
  document.addEventListener('dragleave', leave);
  document.addEventListener('dragover', over);

  // let dragIcon = document.createElement('img');
  // dragIcon.src = 'logo.jpg';
  // dragIcon.width = 100;

  function star(event) {
    event.preventDefault();
    event.dataTransfer.effecAllowed = 'move';
    event.dataTransfer.setData('Data', event.target.id);
    // e.dataTransfer.setDragImage(dragIcon);
    // para poder darle opacidad a la imagen
    event.style.opacity = '0.4';
  }

  function end(event) {
    event.preventDefault();
    event.target.style.opacity = 1;
    event.dataTransfer.clearData('Data');
  }

  function enter(event) {
    event.preventDefault();
    event.target.style.border = '0.2em dotted black';
  }

  function leave(event) {
    event.preventDefault();
    event.target.style.border = '1em solid purple';
  }

  function over(event) {
    event.preventDefault();
    let elementMove = event.dataTransfer.getData('Data');
    let id = even.target.id;
  }

  function newPosition(event) {
    event.preventDefault();
    let elementMove = document.getElementById(event.dataTransfer.getData('Data'));
    elementMove.opacity = 1;
    let cloneElement = elementMove.cloneNode(true);
    cloneElement.style.newPosition = 'static';
    event.target.appendChild('figure-1', elementMove);
  }
};

window.addEventListener('load', begin);