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
			para.textContent = 'Weekly Spending Cash: $' + weeklySpendingCash  ;
			para.style.fontWeight = '800'; // Change the color of the text
			para2.textContent = 'Regular Monthly Expenses: $' + expenseTotal  ;
			para3.textContent = 'Average Monthly Income: $' + payMonthly  ;
			content.appendChild(para);  // add the p element to the page as a child of content
			content.appendChild(para3);
			content.appendChild(para2);
		} else {
			let para = document.createElement('p'); // Create a p element
			para.textContent = 'You are spending more on your regular expenses than you are making each month. ' + 
								'To free up some weekly spending money, consider cancelling a recurring expense, ' +
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





//// Change text when hovering //////
const ourPhilosophy = document.querySelector('#our-philosophy');
$('#our-philosophy').hover(function() {
		ourPhilosophy.innerHTML = 'Setting a budget and sticking to it shouldn\'t be such a hassle. There is a simpler and more effective way than constraining yourself to a never ending list of expenese categories. In our eyes, there are just three kinds of money; your monthly bills, your savings, and your spending cash.  Based on your income and expenses, we\'ll tell you how much spending cash you have each week.  How you spend that money is entirely up to you!';
		ourPhilosophy.innerHTML = 'You bring in X dollars every month.  And every month, you spend the same Y dollars on your monthly bills and regular expenses.  That leaves you with Z dollars to do with what you choose (spend or save).  That\'s where we come in.  This free website is here to help you determine, quickly and easily, how much you should be spending and saving each and every week.  Stop worrying so much about your finances, and start enjoying the money you do have responsibly.';
		ourPhilosophy.style = ' ';
		ourPhilosophy.classList.add('the-philosophy');
	}, function() {
  		ourPhilosophy.innerHTML = '<u>Our Philosophy</u>';
  		ourPhilosophy.style = '';
  		ourPhilosophy.classList.remove('the-philosophy');
});



/////////// Make text appear and disappear /////////////
const duration = 1000;
const transition = 500;
const fadeSpeed = 1000;

// setTimeout(fade_in1, duration);
// setTimeout(fade_out1, duration*2);
// setTimeout(fade_in2, duration*2+transition);
// setTimeout(fade_out2, duration*3+transition);
// setTimeout(fade_in3, duration*3+transition*2);

function fade_in1() {
  $('#box-1').fadeIn(fadeSpeed);
}
function fade_out1() {
  $('#box-1').fadeOut(fadeSpeed);
}
function fade_in2() {
  $('#box-2').fadeIn(fadeSpeed);
}
function fade_out2() {
  $('#box-2').fadeOut(fadeSpeed);
}
function fade_in3() {
  $('#box-3').fadeIn(fadeSpeed);
}
function fade_out3() {
  $('#box-2').fadeOut('slow');
}