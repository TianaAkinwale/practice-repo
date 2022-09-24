/*1. Create an object called personAccount. It has firstname, lastname,
 incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,
 addIncome, addExpense and accountBalance methods. Incomes is a set of incomes 
 and its description and expenses is also a set of expenses and its description.*/

 class PersonAccount {
    constructor (firstname, lastname, incomes, expenses) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.incomes = incomes;
        this.expenses = expenses;
    }
    totalIncome() {
        let total = 0;
        total += this.incomes;
        return total;
    }
    totalExpense() {
        let total = 0;
        total += this.expenses
        return total;
    }
    accountInfo() {
        return this.firstname, this.lastname, this.incomes, this.expenses;
    }
    get getincomes() {
        return this.incomes
    }
    //set setincome(income) {
      //  this.incomes.push(income)
      //}
}

/*let incomes = this.incomes;
const Incomes = new Set();
for (const income of incomes) {
    Incomes.add(income);
}
const expenses = new Set();
for (const expense of this.expenses) {
    Incomes.add(expense);
}*/

const Tiana = new PersonAccount('Tiana', 'Akinwale', [44, 55, 10])
console.log(Tiana.getincomes)