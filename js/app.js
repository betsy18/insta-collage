const begin = () => {
  // declarando las funciones
  // debugger;

  const start = (event) => {
    event.preventDefault();
    event.dataTransfer.effecAllowed = 'copy';
    event.dataTransfer.setData('Data', event.target.id);
    // para poder darle opacidad a la imagen
    // event.style.opacity = '0.4';
  };

  const drop = (event) => {
    event.preventDefault();
  };

  const over = (event) => {
    event.preventDefault();
    if (event.target.className === 'new') {
    // let figureTest = document.getElementById('#figure-test');
      let elementCopy = event.dataTransfer.getData('Data');
      // event.dataTransfer.getData('Data');
      // test.appendChild(document.getElementById('elementCopy'));
      event.target.appendChild(document.getElementById(elementCopy));
    }
  };

  ('img').addEventListener('dragstart', start);
  ('#figure-test').addEventListener('drop', drop);
  ('#figure-test').addEventListener('dragover', over);
};

window.addEventListener('load', begin);