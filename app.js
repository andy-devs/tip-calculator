// Getting all components that we need

const checkButtons = document.querySelectorAll('.tip-check');
const viewButtons = document.querySelectorAll('.button');
const customInput = document.querySelector('.custom');

const bill = document.querySelector('#bill');
const numberOfPeople = document.querySelector('#number-of-people');
const tipAmount = document.querySelector('.tip-amount__nums');
const totalAmount = document.querySelector('.total__nums');
const resetButton = document.querySelector('.resetbtn');

const tip = document.querySelector('.tip-check');
let tipValue = 0;

// Checking for values in inputs and setting a result

bill.addEventListener('keyup', (e) => {
	update();
});

numberOfPeople.addEventListener('keyup', (e) => {
	update();
});

// Removing classes from tip percentages when clicking on custom input

customInput.addEventListener('click', (e) => {
	removeActiveClass(checkButtons);
	removeActiveClass(viewButtons);
});
customInput.addEventListener('keyup', (e) => {
	tipValue = parseFloat(e.target.value);
	update();
});

// Iterating over checkboxes and their labels to set an active class and get their value

for (let btn of checkButtons) {
	btn.addEventListener('click', (e) => {
		if (e.target.classList.contains('active')) {
			e.target.classList.toggle('active');
			tipValue = 0;
		} else {
			customInput.value = null;
			tipValue = parseFloat(e.target.value);
			removeActiveClass(checkButtons);
			addClass(e);
		}
		update();
	});
}

for (let view of viewButtons) {
	view.addEventListener('click', (e) => {
		if (e.target.classList.contains('active')) {
			e.target.classList.toggle('active');
		} else {
			removeActiveClass(viewButtons);
			addClass(e);
		}
	});
}

// Reset button

resetButton.addEventListener('click', (e) => {
	reset(checkButtons, viewButtons);
});

// Functions that help out with classes

function removeActiveClass(items) {
	for (let i of items) {
		i.classList.remove('active');
	}
}
function addClass(event) {
	event.target.classList.add('active');
}
function reset(items, secondItems) {
	removeActiveClass(items);
	removeActiveClass(secondItems);
	bill.value = null;
	numberOfPeople.value = null;
	customInput.value = null;
	tipAmount.innerHTML = '<p>$0.00</p>';
	totalAmount.innerHTML = '<p>$0.00</p>';
}
function update() {
	if (bill.value != 0 && numberOfPeople.value) {
		tipAmount.innerHTML = `<p>$${parseFloat(
			bill.value * parseFloat(tipValue / 100)
		)}</p>`;
		totalAmount.innerHTML = `<p>$${parseFloat(
			(bill.value * parseFloat(tipValue / 100)) / numberOfPeople.value
		)}</p>`;
	} else {
		tipAmount.innerHTML = '<p>$0.00</p>';
		totalAmount.innerHTML = '<p>$0.00</p>';
	}
}
