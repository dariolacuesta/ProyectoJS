

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

function filterByGender(e){
    div = document.getElementsByClassName("dropdown-item")
    sel = document.getElementsByClassName("genre")
    card = document.getElementsByClassName("card")
    drop = document.getElementById(e.id);
    
        for(let i=0; i<sel.length; i++)
        {    
             if(sel[i].textContent != e.id )
             {   
                 card[i].style.display = "none"; 
                 
             }
             else{
                 card[i].style.display= "inline"
                 
                 
             }
        }   
        for(let i=0 ; i<div.length;i++){
        {   if(div[i].id != e.id)
            {   
                div[i].style.background = "white"}
        }}
     
       
    }   
function greencolor(e){
  console.log(e)
  e.style.background ="lawngreen"
}
function whitecolor(e)
{e.style.background="white"}

