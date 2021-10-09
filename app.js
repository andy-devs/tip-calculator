const checkButtons = document.querySelectorAll(".tip-check");
const viewButtons = document.querySelectorAll(".button");
const customButton = document.querySelector(".custom");

const bill = document.querySelector("#bill");
const numberOfPeople = document.querySelector("#number-of-people");
const tipAmount = document.querySelector(".tip-amount__nums");
const totalAmout = document.querySelector(".total__nums");

bill.addEventListener("keydown", (e) => {
	console.log(e.target.value);
	tipAmount.innerHTML = `<p>${parseInt(e.target.value)}</p>`;
});

customButton.addEventListener("click", (e) => {
	removeAllClasses(checkButtons);
	removeAllClasses(viewButtons);
});

for (let btn of checkButtons) {
	btn.addEventListener("click", (e) => {
		if (e.target.classList.contains("active")) {
			e.target.classList.toggle("active");
		} else {
			removeAllClasses(checkButtons);
			addClass(e);
		}
	});
}

function removeAllClasses(items) {
	for (let i of items) {
		i.classList.remove("active");
	}
}
function addClass(event) {
	event.target.classList.add("active");
}

for (let view of viewButtons) {
	view.addEventListener("click", (e) => {
		if (e.target.classList.contains("active")) {
			e.target.classList.toggle("active");
		} else {
			removeAllClasses(viewButtons);
			addClass(e);
		}
	});
}
