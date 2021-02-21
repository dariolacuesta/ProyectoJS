class UpdaterDOM{
    constructor() {

    }
h2(name){
    const h2 = document.createElement('h2');
    h2.textContent = name;
    return h2;
}

h4(writer){
    const h4 = document.createElement('h4');
    h4.textContent = writer;
    return h4;
}


img(src){
    const img = document.createElement('img');
    img.src = src ;
    return img ; 
}

p(review){
    const p = document.createElement('p');
    p.textContent = review;
    return p;
}

p2(price){
    const p2 = document.createElement('p');
    p2.textContent = "$" + price;
    p2.className = "price";
    return p2;
}
p3(genre){
    const p3 = document.createElement('p');
    p3.textContent = genre;
    p3.className = "genre";
    return p3;
}
button(content, className, id,stock) {
    const button = document.createElement('button');
    button.textContent = content;
    button.id = id
    $(button).addClass(className)
    button.setAttribute('data-id', id);
    button.setAttribute('stock', stock)
    button.addEventListener('click',anyadirCarrito);
    return button;   
  }

  p4(stock,stockId){
    const p5 = document.createElement('p');
    const p4 = document.createElement('p');
    p4.className ='stock';
    p4.id = stockId;
    p4.textContent = stock;
    return p4;
}
}






