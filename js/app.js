const begin = () => {
  // declarando las funciones
  // debugger;

  const start = (event) => {
    event.preventDefault();
    event.dataTransfer.effecAllowed = 'copy';
    event.dataTransfer.setData('Data', event.target.id);
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
      event.target.setAttribute('src', event.target.src);
      console.log(event.target);
      event.target.appendChild(document.getElementById(elementCopy));
    }
  };

  ('img').addEventListener('dragstart', start);
  ('#figure-test').addEventListener('drop', drop);
  ('#figure-test').addEventListener('dragover', over);
};

window.addEventListener('load', begin);