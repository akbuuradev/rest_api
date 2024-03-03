const userListElement = document.getElementById("user-list");
const refreshButton = document.getElementById("refresh-btn");

function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      function Rondom(arr) {
        const data = [...arr];
        for (let i = data.length - 1; i > 0; i--) {
          const rondom = Math.floor(Math.random() * (i + 1));
          [data[i], data[rondom]] = [data[rondom], data[i]];
        }
        return data;
      }
      userListElement.innerHTML = "";
      Rondom(users).forEach((user) => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");
        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Телефон: ${user.phone}</p>
          `;
        userListElement.appendChild(userCard);
      });
    })
    .catch((error) => {
      userListElement.innerHTML = `<p>Произошла ошибка при загрузке данных: ${error}</p>`;
    });
}

refreshButton.addEventListener("click", fetchUsers);

fetchUsers();
