let btn = document.getElementById("menu-btn");
let navbar = document.getElementById("bara");
let btnfete = document.getElementById("sageata");
let listafete =document.getElementsByClassName("girl-sub-menu");


btn.addEventListener("click",function(){
if(navbar.style.visibility == "visible"){
    navbar.style.visibility = "hidden"
}
else{
    navbar.style.visibility = "visible"
}

} );

btnfete.addEventListener("click",function(){
    if(listafete.style.visibility== "visible"){
        listafete.style.visibility = "hidden"
    }
    else{
        listafete.style.visibility = "visible"
    }
    
   });

    