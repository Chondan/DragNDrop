var card = document.querySelectorAll('.card');
const empties = document.querySelectorAll('.empty');
const frstempty = document.querySelector('.empty');
const btn = document.querySelector('.btn');
var i = 0;
//Fill Listeners
btn.addEventListener('click',AddNote);
Reload();
function Reload(){
    card = document.querySelectorAll('.card');
    for(const crd of card){
        crd.addEventListener('dragstart',dragStart);
        crd.addEventListener('dragend',dragEnd); 
        crd.addEventListener('dragstart',getIndex);
    }
    
    
    ///Loop through emties and call drag events
    for(const empty of empties){
        empty.addEventListener('dragover',dragOver)
        empty.addEventListener('dragenter',dragEnter)
        empty.addEventListener('dragleave',dragLeave)
        empty.addEventListener('drop',dragDrop)
    }
}
function getIndex(){
    
    
    i = 0;
    for(const crd of card){
        if (crd === this){
            console.log(i);
            
            break;  
        }
        i += 1;         
    }
}
//Drag function
function dragStart(){
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'),0)
}

function dragEnd(){
    this.className = 'card';
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave(){
    this.className = 'empty';
}

function dragOver(e){
    e.preventDefault();
    check = '';  
}
var check = 0;
function dragDrop(){
    this.className = 'empty';
    //this.style.height = 'auto';
    //console.log(getIndex());
    if (this.childNodes.length == 0)
    {
        this.append(card[i]);
    }
}

function AddNote(){
    var NewCard = document.createElement('div');
    NewCard.className = 'card';
    NewCard.draggable = 'true';

    var Header = document.createElement('div');
    Header.className = 'header';

    var Content = document.createElement('div');
    Content.contentEditable = 'true';
    Content.className = 'fill';
    Content.innerHTML = 'Hello World';

    console.log(frstempty.childNodes.length);
    if (frstempty.childNodes.length == 2){
        NewCard.appendChild(Header);
        NewCard.appendChild(Content);
        frstempty.appendChild(NewCard);
        Reload();
    }
}


frstempty.style.background = '#85da85';
