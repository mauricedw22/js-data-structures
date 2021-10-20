class Baller {
    constructor(name, hoes, city, income){
        this.name = name;
        this.hoes = hoes;
        this.city = city;
        this.income = income;
    }

    getIncome() {
        console.log(`${this.income}`);
    }

    slapAyeBitch() {
        this.income += 100;
        console.log('Your income increased by 100!');
        this.getIncome();
        // return `${this.income} increased by 100!`;
    }

    pimpGreeting() {
        console.log(`Keep your pimp hand strong, ${this.name}`);
    }
}

let maurice = new Baller('Maurice the Deepness', 24, 'DC', 500000);
// console.log(maurice);

maurice.slapAyeBitch();