let calcBtn = document.querySelector('#calculate');

let expenseTotal;
function makeBudget() {
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

	let payFreq = document.querySelector('input[name = "payFreq"]:checked').value;
	alert('Your regular monthly expenses total to ' + expenseTotal);
	let payValue = document.getElementById('income').value;
	let payMonthly;
	if (payFreq === 'monthly'){
		payMonthly = payValue;
	} else if (payFreq==='weekly') {
		payMonthly = payValue*4.34524;
	} else if (payFreq==='biweekly'){
		payMonthly = payValue*4.34524/2;
	} else {
		payMonthly = payValue*2;
	}
	payMonthly = payMonthly.toFixed(2);
	alert('Your monthly income is ' + payMonthly );
}

calcBtn.addEventListener('click', () => {
  makeBudget();
});