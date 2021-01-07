/*El proyecto se basa en una pagina de venta de libros online. la idea es hacer un catalogo dividido por generos,top de ventas y ofertas y lograr tener un ''carrito'' el cual ir cargando las
compras y mediante funciones ir modificando elementos del DOM que indiquen si hay stock/precio/etc*/

class Libros{

     
     
    constructor(title,writer,genre,price,stock)
    {
        this.id = randomId();
        this.title = title;
        this.writer = writer;
        this.genre = genre;
        this.price = price;
        this.stock = stock;

    }

    priceWithIva()
    {
        let finalPrice = this.price * 1.21;  
        return finalPrice + "$"; 
    } 
}

 function randomId(){
    id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return id;}

generos= ["Policial","Ciencia Ficcion","Infantil/Juvenil","Terror","Tradicionales"] 


let book  = new Libros("1984","George Orwell",generos[1],300,12)
let book2 = new Libros("Estudio en Escarlata","Edgar Allan Poe",generos[0],400,40)
let book3 = new Libros("Harry Potter y la Orden del Fenix","J.K Rowling",generos[2],600,33)

console.log(book);
console.log(book2);
console.log(book3);
