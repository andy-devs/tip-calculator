// Getting all components that we need

const checkButtons = document.querySelectorAll(".tip-check");
const viewButtons = document.querySelectorAll(".button");
const customInput = document.querySelector(".custom");

const bill = document.querySelector("#bill");
const numberOfPeople = document.querySelector("#number-of-people");
const tipAmount = document.querySelector(".tip-amount__nums");
const totalAmount = document.querySelector(".total__nums");
const resetButton = document.querySelector(".resetbtn");
const restrictAlert = document.querySelector(".restrict-alert");

const tip = document.querySelector(".tip-check");
let tipValue = 0;
const maxBillLength = 6;
const maxPeopleLength = 2;
const maxTipLength = 2;

// Checking for values in inputs and setting a result

bill.addEventListener("keyup", (e) => {
	limit(bill, maxBillLength)
	update();
});

numberOfPeople.addEventListener("keyup", (e) => {
	limit(numberOfPeople, maxPeopleLength)
	update();
});

// Removing classes from tip percentages when clicking on custom input

customInput.addEventListener("click", (e) => {
	removeActiveClass(checkButtons);
	removeActiveClass(viewButtons);
});
customInput.addEventListener("keyup", (e) => {
	limit(customInput, maxTipLength)
	tipValue = parseFloat(e.target.value);
	update();
});

// Iterating over checkboxes and their labels to set an active class and get their value

for (let btn of checkButtons) {
	btn.addEventListener("click", (e) => {
		if (e.target.classList.contains("active")) {
			e.target.classList.toggle("active");
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
	view.addEventListener("click", (e) => {
		if (e.target.classList.contains("active")) {
			e.target.classList.toggle("active");
		} else {
			removeActiveClass(viewButtons);
			addClass(e);
		}
	});
}

// Reset button

resetButton.addEventListener("click", (e) => {
	reset(checkButtons, viewButtons);
});

// Checks and restrictions

numberOfPeople.addEventListener("keyup", (e) => {
	if (e.target.value == 0 || e.target.value == null) {
		e.target.classList.add("restrict");
		restrictAlert.classList.remove("display-none");
	} else {
		e.target.classList.remove("restrict");
		restrictAlert.classList.add("display-none");
	}
});

// Functions that help out with classes

function removeActiveClass(items) {
	for (let i of items) {
		i.classList.remove("active");
	}
}
function addClass(event) {
	event.target.classList.add("active");
}
function reset(items, secondItems) {
	removeActiveClass(items);
	removeActiveClass(secondItems);
	bill.value = null;
	numberOfPeople.value = null;
	numberOfPeople.classList.add("restrict");
	restrictAlert.classList.remove("display-none");
	customInput.value = null;
	tipValue = null;
	tipAmount.innerHTML = "<p>$0.00</p>";
	totalAmount.innerHTML = "<p>$0.00</p>";
}
function update() {
	if (bill.value != 0 && numberOfPeople.value) {
		tipAmount.innerHTML = `<p>$${parseFloat(
			Math.round(bill.value * parseFloat(tipValue / 100) * 100) / 100
		)}</p>`;
		totalAmount.innerHTML = `<p>$${parseFloat(
			Math.round(
				((bill.value * parseFloat(tipValue / 100)) /
					numberOfPeople.value) *
					100
			) / 100
		)}</p>`;
	} else {
		tipAmount.innerHTML = "<p>$0.00</p>";
		totalAmount.innerHTML = "<p>$0.00</p>";
	}
}
function limit(elem, maxLength) {
	if (elem.value.length > maxLength) {
		elem.value = elem.value.substr(0, maxLength);
	}
}
