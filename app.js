/*El proyecto se basa en una pagina de venta de libros online. la idea es hacer un catalogo dividido por generos,top de ventas y ofertas y lograr tener un ''carrito'' el cual ir cargando las
compras y mediante funciones ir modificando elementos del DOM que indiquen si hay stock/precio/etc*/

// BIENVENIDO//



// ID //
 function randomId(){
    id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return id;}


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
    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(writer);
    div.appendChild(review);
    div.appendChild(price);
    div.appendChild(genre)
    div.className = "card col-sm-2";    
    return div;
 
}

// WELCOME
const aName = document.getElementById('name');

function welcomeB()
{
    if(sessionStorage.getItem('name')===null)
    {
        sessionStorage.setItem('name',prompt("Ingrese su nombre"))
        aName.innerHTML = `Bienvenido ${sessionStorage.name}`
        btnHider = document.getElementById('nameb')
        btnHider.style.display= 'none';
    }
}

const UpdaterDom = new UpdaterDOM();

window.addEventListener('load',()=>
{const bookdata = document.getElementById('bookdata');})

books.forEach((book)=>{
    const card = catalogBooks(book);
    bookdata.appendChild(card) 
})

if(sessionStorage.getItem('name')!=null)
{   
    aName.innerHTML = `Bienvenido ${sessionStorage.name}`
    btn = document.getElementById('nameb')
    btn.style.display = 'none';
}
//document.getElementById('home').addEventListener("click",)

// Barra de busqueda



    




    


