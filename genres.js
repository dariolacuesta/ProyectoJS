

function cleanFilter(){
    drop = $(".dropdown-item")
    card = $(".card")
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
    div = $(".dropdown-item")
    sel = $(".genre")
    card = $(".card")
    drop = $(e.id);
    
        for(let i=0; i<sel.length; i++)
        {    
             if((sel[i]).textContent != e.id )
             {   
                $(card[i]).hide();               
             }
             else{
                 $(card[i]).show();
                 
                 
             }
        }   
        for(let i=0 ; i<div.length;i++){
        {   if(div[i].id != e.id)
            {   
                div[i].style.background = "white"}
        }}
     
       
    }   
function greencolor(e){
  e.style.background ="lawngreen"
}
function whitecolor(e)
{e.style.background="white"}


