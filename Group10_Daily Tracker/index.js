let total = 0;

function addExpense() {

    let name = document.getElementById("name").value;
    let amount = Number(document.getElementById("amount").value);

    if (name == "" || amount <= 0) {
        alert("Please enter valid information!");
        return;
    }

    let item = document.createElement("li");

    item.innerText = name + " - " + amount + " Tk";

    let button = document.createElement("button");
    button.innerText = "Delete";
    button.className = "delete";

    button.onclick = function() {
        item.remove();
        total = total - amount;
        document.getElementById("total").innerText = total;
    };

    item.appendChild(button);

    document.getElementById("list").appendChild(item);

    total = total + amount;
    document.getElementById("total").innerText = total;

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
}

function deleteAll() {

    document.getElementById("list").innerHTML = "";

    total = 0;

    document.getElementById("total").innerText = total;
}