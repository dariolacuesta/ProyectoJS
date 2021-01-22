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
    p2.textContent = price + "$";
    p2.className = "price";
    return p2;
}



}



