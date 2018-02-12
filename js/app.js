const begin = () => {
 // declarando las variables
  let boxChoose = document.getElementById('box-choose');
  let boxDestiny = document.getElementById('box-destiny');
  
  boxChoose.ondragstart = (event) => {
    event.dataTransfer.setData('content', event.target.id);
  };

  boxDestiny.ondragover = (event) => {
    console.log('ondragover');
    event.preventDefault();
  };

  boxDestiny.ondrop = (event) => {
    let element = document.getElementById(event.dataTransfer.getData('content'));
    let elementCopy = element.cloneNode(true); 
    elementCopy.id = element.id + 1 ; 
    event.target.appendChild(elementCopy); 
  };
};

window.addEventListener('load', begin);