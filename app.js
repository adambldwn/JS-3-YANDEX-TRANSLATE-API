eventListeners();

function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translateWord);
    document.getElementById("language").onchange = function(){

    }
}
const translate = new Translate(document.getElementById("word").value,document.getElementById("language").value);

function translateWord(e){
    
    translate.changeParameters(document.getElementById("word").value,document.getElementById("language").value);
    translate.translateWord(function(err,response){
        if(err){
            console.log(err)
        }else{
            console.log(response)
        }
    });
    e.preventDefault();
}