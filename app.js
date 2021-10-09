const checkButtons = document.querySelectorAll('.tip-check');
const viewButtons = document.querySelectorAll('.button');
const customButton = document.querySelector('.custom');

const bill = document.querySelector('#bill');
const numberOfPeople = document.querySelector('#number-of-people');
const tipAmount = document.querySelector('.tip-amount__nums');
const totalAmount = document.querySelector('.total__nums');

const tip = document.querySelector('.tip-check');
bill.addEventListener('keyup', (e) => {
	if (e.target.value !== NaN) {
		tipAmount.innerHTML = `<p>$${parseFloat(e.target.value)}</p>`;
		totalAmount.innerHTML = `<p>$${parseFloat(
			e.target.value * numberOfPeople.value
		)}</p>`;
	} else {
		tipAmount.innerHTML = `<p>$0.00</p>`;
		totalAmount.innerHTML = `<p>$0.00</p>`;
	}
});

numberOfPeople.addEventListener('keyup', (e) => {
	if (e.target.value !== NaN) {
		totalAmount.innerHTML = `<p>$${parseFloat(
			e.target.value * bill.value
		)}</p>`;
	} else {
		totalAmount.innerHTML = `<p>$0.00</p>`;
	}
});
customButton.addEventListener('click', (e) => {
	removeAllClasses(checkButtons);
	removeAllClasses(viewButtons);
});

for (let btn of checkButtons) {
	btn.addEventListener('click', (e) => {
		if (e.target.classList.contains('active')) {
			e.target.classList.toggle('active');
		} else {
			removeAllClasses(checkButtons);
			addClass(e);
		}
	});
}

function removeAllClasses(items) {
	for (let i of items) {
		i.classList.remove('active');
	}
}
function addClass(event) {
	event.target.classList.add('active');
}

for (let view of viewButtons) {
	view.addEventListener('click', (e) => {
		if (e.target.classList.contains('active')) {
			e.target.classList.toggle('active');
		} else {
			removeAllClasses(viewButtons);
			addClass(e);
		}
	});
}
