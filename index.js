console.log("hello welcome to Apna library!");
//constructor
function Book(name,author,type){
this.name=name;
this.author=author;
this.type=type;



}
//display constructor




//Add submit listener

//Add submit listener to libraryForm
let libraryForm =document.getElementById('libraryForm');
libraryForm.addEventListener('submit',libraryFormSubmit);

function libraryFormSubmit(e){
    console.log("You have submitted library Form");
    let name= document.getElementById('bookName').Value;
    let author= document.getElementById('author').
    e.preventDefault();
}
