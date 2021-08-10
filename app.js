let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
    function saveToDos() { 
        var items = 
         ul.getElementsByTagName("li"); 
        for (var i = 0; i < items.length; ++i) { 
                 savedToDos.push(
                 items[i].innerHTML); 
   }
             
   localStorage.setItem('savedValues', savedToDos); 
   }
    
})