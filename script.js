
const users = [];

function handleSubmit(event) {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;

    const user = {
        id: Date.now(),
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    users.push(user);

    console.log("Добавлен новый пользователь:", user);

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("age").value = "";

    rerender();
}

function rerender() {
    const container = document.getElementById("userContainer");
    container.innerHTML = "";

    for (let i = 0; i < users.length; i++) {
        const user = users[i];

        const card = document.createElement("div");
        card.className = "userCard";
        card.setAttribute("data-id", user.id);
        card.addEventListener("dblclick", function(event) {
            const userId = event.currentTarget.getAttribute("data-id");
            removeUser(userId);
            rerender();
        });

        const name = document.createElement("p");
        name.textContent = "Имя: " + user.firstName;

        const surname = document.createElement("p");
        surname.textContent = "Фамилия: " + user.lastName;

        const age = document.createElement("p");
        age.textContent = "Возраст: " + user.age;

        card.appendChild(name);
        card.appendChild(surname);
        card.appendChild(age);
        container.appendChild(card);
    }
}

function removeUser(userId) {
    const index = users.findIndex(user => user.id == userId);
    if (index !== -1) {
        users.splice(index, 1);
    }
}

rerender();