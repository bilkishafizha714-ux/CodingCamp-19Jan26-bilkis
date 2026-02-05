const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const dateInput = document.getElementById("date-input");
const todoList = document.getElementById("todo-list");
const filter = document.getElementById("filter");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (todoInput.value === "" || dateInput.value === "") {
    alert("Please fill all fields");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    ${todoInput.value} - ${dateInput.value}
    <span class="delete">X</span>
  `;

  todoList.appendChild(li);
  todoInput.value = "";
  dateInput.value = "";
});

todoList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

filter.addEventListener("change", function () {
  const items = document.querySelectorAll("li");
  const today = new Date().toISOString().split("T")[0];

  items.forEach(item => {
    if (filter.value === "all") {
      item.style.display = "flex";
    } else if (filter.value === "today") {
      item.style.display = item.textContent.includes(today)
        ? "flex"
        : "none";
    }
  });
});
