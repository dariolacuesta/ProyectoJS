//BUTTON HOME
$(document).ready(function(){
    $("#home").click(function(){
      location.reload();});});

//CONSTRUYENDO EL DOM
function catalogBooks(book){
    const div = document.createElement('div');
    const name = UpdaterDom.h2(book.name);
    const writer = UpdaterDom.h4(book.writer);
    const img = UpdaterDom.img(book.img);
    img.className = "books";
    const review = UpdaterDom.p(book.review);
    const genre = UpdaterDom.p3(book.genre);
    const price = UpdaterDom.p2(book.price);
    const button =UpdaterDom.button('Seleccionar','btn btn-success', book.id)
    // const button = UpdaterDom.button(book.)
    $(div).append(img);
    $(div).append(name);
    $(div).append(writer);
    $(div).append(review);
    $(div).append(price);
    $(div).append(button);
    $(div).append(genre);
    const genreClass = (book.genre).replace(/[\s.;,?%0-9]/,'').toLowerCase()
    div.className = `card col-sm-2 ${genreClass}`;    
    return div;
}
// WELCOME
const aName =$('#name');


$("#nameb").click(function(){
    if(sessionStorage.getItem('name')===null)
    {   
        sessionStorage.setItem('name',prompt("Ingrese su nombre"))
        
        $('#nameb').fadeOut(1000);
        $('#name').hide();
        setTimeout(() => { 
            aName.html(`Bienvenido ${sessionStorage.name}`)
            $(aName).fadeIn(1500);}, 1000);
    }
})
// SESSION
if(sessionStorage.getItem('name')!=null)
{   
    aName.html(`Bienvenido ${sessionStorage.name}`)
    $('#nameb').hide();
   
}
//CONSTRUIMOS EL DOM
const UpdaterDom = new UpdaterDOM();
$(window).ready( ()=>
{    
      
    const bookdata = $('#bookdata');
})
const topdata = $('#top');
const offersdata = $('#offers');
const newsdata = $('#news')

books.forEach((book)=>{
    const card = catalogBooks(book);
    bookdata.appendChild(card)
})
books.forEach((book)=>{
    const card = catalogBooks(book);
    if(book.top === true)
    {   
        topdata.append(card)
    }
    if(book.offers ===true)
    {
        offersdata.append(card)
    }
    if(book.news ===true )
    {
        newsdata.append(card)
    }
})

// GENEROS 
function cleanFilter(){
    drop = $(".dropdown-item")
    card = $(".card")
    
    for(let i=0; i<books.length;i++)
    {   
        //card[i].style.display = "inline"
        $(card).show();

    }
        
        $("#hidertop").show();
        $("#hideroffer").show();
        $("#hidernews").show();
        $(card).show();
        $(card).addClass(".card")
}   
function filterByGender(e){
    div = $(".dropdown-item")
    sel = $(".genre")
    card = $(".card")
    drop = $(e.id);
    
        for(let i=0; i<sel.length; i++)
        {     if((sel[i]).textContent != e.id )
             {   
                $(card[i]).hide();               
             }
             else{
               
                 $(card[i]).show();      
             }}   
        for(let i=0 ; i<div.length;i++){
        {   if(div[i].id != e.id)
            {   
             $(div).css("background-color","white")};
        }} 
        $("#hidertop").hide();
        $("#hideroffer").hide();
        $("#hidernews").hide();
}   
        


$('.dropdown-item').mouseover(function(){
    $(this).css("background-color","lawngreen");
}),
$(".dropdown-item").mouseout(function(){
    $(this).css("background-color","white")
})


//SCROLL DE MENU
function scrollfunc(id){
    $('html,body').animate({
        scrollTop: $("#" + id).offset().top
    },2000
    )
}
$('#topButton').click(function(){
    cleanFilter();
    scrollfunc("topb"); 
});
$('#newsButton').click(function(){
    cleanFilter();
    scrollfunc("newsb");
});
$('#offersButton').click(function(){
    cleanFilter();
    scrollfunc("offersb");
});



    


