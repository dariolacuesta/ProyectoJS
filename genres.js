function Policial()
{  
    sel = document.getElementsByClassName("genre")
    card = document.getElementsByClassName("card")
    nav = document.getElementById("policial")
    nav.style.background = "green";
    for (let i=0; i<sel.length; i++){
    
        if(sel[i].textContent != "Policial")
        {card[i].style.display = "none"}
       
    }   
}
function CFiccion()
{  
    sel = document.getElementsByClassName("genre")
    card = document.getElementsByClassName("card")
    nav = document.getElementById("cficcion")
    nav.style.background = "green";
    console.log(sel)
    for (let i=0; i<sel.length; i++){
        
        if(sel[i].textContent != "Ciencia Ficcion")
        {card[i].style.display = "none"}
    }   
}

function Fantastico()
{  
    sel = document.getElementsByClassName("genre")
    card = document.getElementsByClassName("card")
    nav = document.getElementById("fantastico")
    nav.style.background = "green";
    for (let i=0; i<sel.length; i++){
        if(sel[i].textContent != "Fantastico")
        {card[i].style.display = "none"}
    }   
}

function Historia()
{  
    sel = document.getElementsByClassName("genre")
    nav = document.getElementById("historia")
    card = document.getElementsByClassName("card")
    nav.style.background = "green";
    for (let i=0; i<sel.length; i++){
    
        if(sel[i].textContent != "Historia") 
        {card[i].style.display = "none"}
    }   
}

function Drama()
{    
    sel = document.getElementsByClassName("genre")
    card = document.getElementsByClassName("card")
    nav = document.getElementById("drama")
    nav.style.background = "green";
    
    for (let i=0; i<sel.length; i++){
       
        if(sel[i].textContent != "Drama")
        {card[i].style.display = "none"}
    }   
}

function cleanFilter(){
    drop = document.getElementsByClassName("dropdown-item")
    card = document.getElementsByClassName("card")
    for(let i=0; i<books.length;i++)
    {   
        card[i].style.display = "inline"
    }
    for(let i=0 ; i< drop.length;i++)
        {
            drop[i].style.background = "white"
          
        }
}   



