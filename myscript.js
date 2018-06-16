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
	let longSavings = document.getElementById('long-savings').value;
	let gym = document.getElementById('gym').value;
	let other = document.getElementById('other').value;
	let bigExpense = document.getElementById('big-expense').value;

	expenseTotal = Number(home) + Number(car) + Number(utilities) + 
				   Number(loan) + Number(insurance) + Number(phone) +
				   Number(cable) + Number(internet) + Number(investments) +
				   Number(donations) + Number(longSavings) + Number(gym) + 
				   Number(other) + Number(bigExpense);
}

let payMonthly;
function calcMonthlyIncome(){
	let payFreq = document.querySelector('input[name = "payFreq"]:checked').value;
	let payValue = document.getElementById('income').value;
	if (payFreq === 'monthly'){
		payMonthly = payValue*1;
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
	monthlySpendingCash = Number(monthlySpendingCash.toFixed(2));
	// Add a new paragraph below the button
		const outputBudget = document.querySelector('#outputBudget');

		// If the budget has already been built, delete the old output
		let oldOutput = document.querySelector('.budgetParas');
		if (oldOutput !== null){
			outputBudget.removeChild(oldOutput);
		}

		let content = document.createElement('div');
		outputBudget.appendChild(content);
		content.classList.add('budgetParas');
		if (weeklySpendingCash > 0){
			let para = document.createElement('p'); // Create a p element
			let para2 = document.createElement('p'); // Create a p element
			let para3 = document.createElement('p'); // Create a p element
			para.textContent = 'Your Weekly Spending Cash: $' + weeklySpendingCash  ;
			para.style.fontWeight = '800'; // Change the color of the text
			para2.textContent = 'You are bringing in $' + payMonthly + ' each month. ' +
								'And each month, you\'re contributing $' + expenseTotal + 
								' to monthly bills, savings, and investments. That leaves ' +
								'you with $' + monthlySpendingCash + ' to spend on everything ' +
								'else each month ($' + weeklySpendingCash +
								' each week).'
			para3.textContent = 'All you have to do is spend less than $' + weeklySpendingCash +
								' each week on everything else.';
			content.appendChild(para);  // add the p element to the page as a child of content
			content.appendChild(para2);
			content.appendChild(para3);
		} else {
			let para = document.createElement('p'); // Create a p element
			para.textContent = 'You\'re contributing more to monthly bills, savings, and investments than you\'re making each month. ' + 
								'To free up some weekly spending money, consider cancelling a recurring expense, contribute less to savings, ' +
								'or find a way to decrease one or more of your monthly expenses.';
			content.appendChild(para);
		}

		if ($(window).width() < 600) {
   			window.scrollTo(0,document.body.scrollHeight);
		}
}

calcBtn.addEventListener('click', () => {
  makeBudget();
});





//// Dropdown philosophy on click //////
const dropdown = document.getElementById('dropdown');
const philosophy = document.getElementById('philosophy');
dropdown.onclick = function() {
	if (dropdown.textContent == 'About This Site ▼' || dropdown.textContent ==  'About This Site &#9660;'){
		dropdown.innerHTML = 'About This Site &#9650;';
		philosophy.style.display = 'block';
	} else{
		dropdown.innerHTML = 'About This Site &#9660;';
		philosophy.style.display = 'none';
	}
	};

