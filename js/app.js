class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.querySelector(".budget-form");
    this.budgetInput = document.querySelector(".budget-form__input-text");
    this.budgetAmount = document.querySelector(".budget-amount");
    this.expenseAmount = document.querySelector(".expense-amount");
    this.balance = document.querySelector(".balance");
    this.balanceAmount = document.querySelector(".balance-amount");
    this.expenseForm = document.querySelector(".expense-form");
    this.expenseInput = document.querySelector(".expense-input");
    this.amountInput = document.querySelector(".amount-input");
    this.expenseList = document.querySelector(".expense-list");
    this.itemList = [];
    this.itemID = 0;
  }

  submitBudgetForm() {
    const value = this.budgetInput.value;

    if (value == '' || value < 0) {
      this.alertError('Value cannot be empty or negative!')
    } else {
      this.budgetAmount.textContent = value;
      this.showBalance();
      this.budgetInput.value = '';
    }
  }

  submitExpenseForm() {
    const expenseTitle = this.expenseInput.value;
    const amountValue = this.amountInput.value;

    if (expenseTitle === '') {
      this.alertError('Enter title of expense!');
    } else if (amountValue === '' || amountValue < 0) {
      this.alertError('Value cannot be empty or negative!');
    } else {   
      let amount = parseInt(amountValue);
      this.expenseInput.value = '';
      this.amountInput.value = '';

      let expense = {
        id: this.itemID,
        amount: amount,
        title: expenseTitle
      }
      this.itemID++;
      this.itemList.push(expense);
      this.addExpense(expense);
      this.showBalance();
    }
  }

  showBalance() {
    const expense = this.totalExpense();
    const total = parseInt(this.budgetAmount.textContent) - expense;
    this.balanceAmount.textContent = total;

    if (total < 0) {
      this.balanceAmount.classList.add('red');
    } else if (total >= 0) {
      this.balanceAmount.classList.remove('red');
    }
  }

  totalExpense() {
    let total = 0;

    if (this.itemList.length > 0) {
      total = this.itemList.reduce((res, cur) => res += cur.amount, 0);
    }
    this.expenseAmount.textContent = total;
    return total;
  }

  addExpense(itemList) {
    const li = document.createElement('li');

    li.innerHTML = `
      <h3>${itemList.title}</h3>
      <h3>${itemList.amount}</h3>
    `;
    li.classList.add('expense-list__item');

    this.expenseList.appendChild(li);
  }

  alertError(msg) {
    this.budgetFeedback.classList.add('show-item');
    this.budgetFeedback.innerHTML = `<p>${msg}</p>`;
    setTimeout(() => {
      this.budgetFeedback.classList.remove('show-item');
    }, 2500);
  }
}

function eventListener() {
  const budgetForm = document.querySelector('.budget-form');
  const expenseForm = document.querySelector('.expense-form');
  const expenseList = document.querySelector('.expense-list');

  const ui = new UI();

  budgetForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    ui.submitBudgetForm();
  });

  expenseForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    ui.submitExpenseForm();
  });

  expenseList.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });
}

document.addEventListener('DOMContentLoaded', function () {
  eventListener();
})
