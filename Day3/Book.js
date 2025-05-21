class Book{
    constructor(title, price){ ///you can have only one constructor
        this.title = title;
        this.cost = price; // price is parameter, but cost is a property
    }

    borrow(){
        console.log(`${this.title} is borrowed`);
    }

    static rent(){
        //this.borrow(); 
        console.log(this.title);
    }
}

class fictionBook extends Book{
    borrow(){
        console.log('override');
    }
}

const b1 = new Book("Learn HTML", 100);
console.log(b1.cost);
Book.rent();
const fb = new fictionBook('Caves of Steel', 101);
console.log(fb.title);
fb.borrow();