let calcBtn = document.querySelector('#calculate');

let expenseTotal;
function calcExpenseTotal(){
		let home = document.getElementById('home').value;
	// an unspecified field gets the value ""
	let car = document.getElementById('car').value;
	let utilities = document.getElementById('utilities').value;
	let loan = document.getElementById('loan').value;
	let insurance = document.getElementById('insurance').value;
	let phone = document.getElementById('phone').value;
	let cable = document.getElementById('cable').value;
	let internet = document.getElementById('internet').value;
	let investments = document.getElementById('investments').value;
	let donations = document.getElementById('donations').value;
	let savings = document.getElementById('savings').value;
	let gym = document.getElementById('gym').value;
	let other = document.getElementById('other').value;
	expenseTotal = Number(home) + Number(car) + Number(utilities) + 
				   Number(loan) + Number(insurance) + Number(phone) +
				   Number(cable) + Number(internet) + Number(investments) +
				   Number(donations) + Number(savings) + Number(gym) + 
				   Number(other);
}

let payMonthly;
function calcMonthlyIncome(){
	let payFreq = document.querySelector('input[name = "payFreq"]:checked').value;
	let payValue = document.getElementById('income').value;
	if (payFreq === 'monthly'){
		payMonthly = payValue;
	} else if (payFreq==='weekly') {
		payMonthly = payValue*4.34524;
	} else if (payFreq==='biweekly'){
		payMonthly = payValue*4.34524/2;
	} else {
		payMonthly = payValue*2;
	}
	payMonthly = Number(payMonthly.toFixed(2));
}
let weeklySpendingCash;
let monthlySpendingCash;
function makeBudget() {
	calcExpenseTotal();
	calcMonthlyIncome();
	monthlySpendingCash = payMonthly-expenseTotal;
	weeklySpendingCash = monthlySpendingCash/4.34524;
	weeklySpendingCash = Number(weeklySpendingCash.toFixed(2));

	// Add a new paragraph below the button
		const outputBudget = document.querySelector('#outputBudget');

		// If the budget has already been built, delete the old output
		let oldOutput = document.querySelector('.budgetParas');
		if (oldOutput !== null){
			outputBudget.removeChild(oldOutput);
		}

		let content = document.createElement('div');
		outputBudget.appendChild(content);
		if (weeklySpendingCash > 0){
			content.classList.add('budgetParas');
			let para = document.createElement('p'); // Create a p element
			let para2 = document.createElement('p'); // Create a p element
			let para3 = document.createElement('p'); // Create a p element
			para.textContent = 'Excluding the monthly expenses you have entered, spend no more than $' + weeklySpendingCash + ' every week.' ;
			para.style.color = 'blue'; // Change the color of the text
			para2.textContent = 'Your regular monthly expenses total to $' + expenseTotal + '.' ;
			para3.textContent = 'Your monthly income is $' + payMonthly + '.' ;
			content.appendChild(para);  // add the p element to the page as a child of content
			content.appendChild(para2);
			content.appendChild(para3);
		} else {
			let para = document.createElement('p'); // Create a p element
			para.textContent = 'You are spending more on your regular expenses than you are making each month. ' + 
								'To free up some weekly spending money, consider cancelling a recurring expense, ' +
								'or find a way to decrease one or more of your monthly expenses.';
			content.appendChild(para);
		}
		
}

calcBtn.addEventListener('click', () => {
  makeBudget();
});


