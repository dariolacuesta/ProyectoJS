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
    const button =UpdaterDom.button('Comprar','btn btn-success', book.id,book.stock)
    const stockTxt = '<p>Stock : </p>';
    const stock = UpdaterDom.p4(book.stock,book.stockId);
    if(book.stock == 0)
    {
        button.className = 'btn btn-danger'
        button.innerText = 'Sin Stock'
        button.disabled = 'true'
    }
    button.addEventListener('click',anyadirCarrito);
    
    $(div).append(img);
    $(div).append(name);
    $(div).append(writer);
    $(div).append(review);
    $(div).append(price);
    $(div).append(button);
    $(div).append(genre);
    $(div).append(stockTxt);
    $(div).append(stock)
    const genreClass = (book.genre).replace(/[\s.;,?%0-9]/,'').toLowerCase()
    div.className = `card col-md-2 col-sm-4 col-12 col-lg-2 ${genreClass}`;    
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
            if(sessionStorage.name === null){
                aName.html(`Bienvenido`)
            }
            else{
            aName.html(`Bienvenido ${sessionStorage.name}`)
            console.log(sessionStorage.name)
            $(aName).fadeIn(1500);}}, 1000);
    }
})
// SESSION
if(sessionStorage.getItem('name')!=null)
{   
    aName.html(`Bienvenido ${sessionStorage.name}`)
    $('#nameb').hide();

}

$(document).ready(function() {
    setTimeout(function () {
        $("#loader").css({ visibility: "hidden", opacity: "0" })
    }, 1000);
    });

//CONSTRUIMOS EL DOM
const UpdaterDom = new UpdaterDOM();
$(window).ready( ()=>
{     
const bookdata = $('#bookdata');
})
const topdata = $('#top');
const offersdata = $('#offers');
const newsdata = $('#news')



$.ajax({
    type:'GET',
    dataType: 'json',
    url:'entidades.json',
    success: function(data){
        localStorage.data = JSON.stringify(data)
    },
    error:function(data){
        console.log(data)
    }
})


$.when($.ajax('entidades.json')).done(function(data){
    books = data
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
})


books = JSON.parse(localStorage.getItem('data'))

// GENEROS 
function cleanFilter(){
    drop = $(".dropdown-item")
    card = $(".card")
    
    for(let i=0; i<books.length;i++)
    {   
        
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
    },1000
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

//Mi Carrito

let $items = document.querySelector("#items")
let cart = [];
let total = 0;
let $carrito = document.querySelector('#carrito');
let $total = document.querySelector('#total');
let $botonVaciar = document.querySelector('#boton-vaciar');
let $botonComprar = document.querySelector("#boton-comprar")
$('#cart').html(` Mi carrito ${total}`);


    function anyadirCarrito(){

        cart.push(this.getAttribute('data-id'))
        buyButton = this
        calcularTotal();
        renderizarCarrito();
        $('#cart').html(` Mi carrito ${cart.length}`);
        
        renderStock(this.getAttribute('data-id'),buyButton);
    }   

    function renderizarCarrito(){

        $carrito.textContent = "";
        let carritoSinDuplicados = [...new Set(cart)];

        carritoSinDuplicados.forEach(function(item,indice){
            let myItem = books.filter(function(itemBaseDatos){
                return itemBaseDatos['id'] == item;
            })
            let numeroUnidadesItem = cart.reduce(function(total,itemId){
                return itemId === item ? total +=1 : total;
            },0)
        
            let myNode = document.createElement('li');
            myNode.classList.add('list-group-item','text-right','mx-4');
            myNode.textContent = `${numeroUnidadesItem} x ${myItem[0]['name']} - $${myItem[0]['price']}`
            let myButton = document.createElement('button');
            myButton.classList.add('btn','btn-danger','mx-5');
            myButton.textContent = 'x';
            myButton.style.marginLeft = '1rem';
            myButton.setAttribute('item',item);
            myButton.addEventListener('click',borrarItemCarrito);
            myNode.appendChild(myButton);
            $carrito.appendChild(myNode)
        });
    }

    function borrarItemCarrito(){
    
        let id = this.getAttribute('item');
        idStock = ('S'+id)
        stock = document.getElementById(idStock)
        cart = cart.filter(function(cartId){
            return cartId !== id;
        });
        b = $(".buy")
        
        for (let i = 0; i < books.length; i++) {
            const initialStock = (books[i].stock) 
            let stockId =(books[i].stockId)  
            if(idStock === stockId){
                stock.innerText = initialStock
            } 
        }
        for (let i = 0; i < b.length; i++) {
            const element = b[i];
        if (element.id === id){
            element.className = 'btn btn-success';
            element.innerText = 'Comprar';
            element.removeAttribute('disabled')
        }
            
        }  
        renderizarCarrito();
        calcularTotal();
        $('#cart').html(` Mi carrito ${cart.length}`);
    }

    function calcularTotal(){
        total = 0;
        for(let item of cart){
            let myItem = books.filter(function(books){
                return books['id']== item;
            });
            total = total + myItem[0]['price'];
        }
        $total.textContent = total.toFixed(2);
    }

    function vaciarCarrito(){
        cart = []
        renderizarCarrito();
        calcularTotal();
        $('#cart').html(` Mi carrito ${cart.length}`);
        restaurarStock();
    }

    function finalizarCompra(){
        cart = []
        renderizarCarrito();
        calcularTotal();
        alert('Se enviaran los datos de su compra a su mail')
        $('#cart').html(` Mi carrito ${cart.length}`);

    }

    $botonComprar.addEventListener('click',finalizarCompra);
    $botonVaciar.addEventListener('click',vaciarCarrito);

    
    const pushbar = new Pushbar({
        blur:true,
        overlay:true,
        });


function restaurarStock (){

    for (let i = 0; i < books.length; i++) {
        const initialStock = (books[i].stock)   
        const stockId = (books[i].stockId)
        pstock = document.getElementById(stockId)
        pstock.innerText = initialStock
        b = document.getElementsByClassName('buy')
    for(let item of b)
        {
        item.className = 'btn btn-success';
        item.innerText = 'Comprar';
        item.removeAttribute('disabled')
        }}
    }          
function renderStock(d,buttonRenderer){
        b = "S" + d 
        s= document.getElementById(b)   
        b = parseInt(s.innerHTML)
        b = b - 1;
        if(b != 0)
                {
                s.innerText = b;}
        else{   
                s.innerText = '0'
                buttonRenderer.className = 'btn btn-danger buy'
                buttonRenderer.innerText = 'Sin Stock'
                buttonRenderer.disabled = 'true'
        }
}
