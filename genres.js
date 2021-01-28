

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

    sel = document.getElementsByClassName("genre")
    card = document.getElementsByClassName("card")
        e.style.background = "green";
        console.log(e.id)   
        for(let i=0; i<sel.length; i++)
        {    
             if(sel[i].textContent != e.id)
             {  
                 card[i].style.display = "none";
             }
             else{
                 card[i].style.display= "inline";
             }
        }
    }   



