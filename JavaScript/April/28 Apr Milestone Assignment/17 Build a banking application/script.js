

function Customer(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  
  Customer.prototype.deposit = function(amount) {
    this.balance += amount;
  }
  
  Customer.prototype.withdraw = function(amount) {
    if (amount > this.balance) {
      console.log('Insufficient funds');
      return;
    }
    this.balance -= amount;
  }

const customer1 = new Customer('Bhabesh Bharali', 10000);
customer1.deposit(5000);
customer1.withdraw(2000);
console.log(customer1.balance); 