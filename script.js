const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const prices = document.querySelectorAll(".prices");
    let total = 0;

    prices.forEach(price => {
        total += Number(price.textContent);
    });

    // remove old total row if exists
    const existing = document.getElementById("total-row");
    if (existing) existing.remove();

    // create new row
    const tr = document.createElement("tr");
    tr.id = "total-row";

    const td = document.createElement("td");
    td.setAttribute("colspan", "2");
    td.textContent = "Total: " + total;

    tr.appendChild(td);

    document.querySelector("table").appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);