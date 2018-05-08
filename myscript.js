let calcBtn = document.querySelector('#calculate');

let expenseTotal = 0;
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
	alert(expenseTotal);
}

calcBtn.addEventListener('click', () => {
  makeBudget();
});