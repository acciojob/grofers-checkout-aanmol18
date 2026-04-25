const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const getSum = () => { //Add your code here 
const prices = document.querySelectorAll('.prices');
	let add = 0;
	prices.forEach(price =>{
		add = add + Number(price.textContent);
	});

	const tr = document.createElement("tr");
	const td = document.createElement("td");

	td.setAttribute("colspan", "2");
	td.textContent = "Total: " + add;

	tr.appendChild(td);
	document.querySelector("table").appendChild(tr);
}; 
getSumBtn.addEventListener("click", getSum);