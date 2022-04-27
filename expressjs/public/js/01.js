const todoForm = document.querySelector(".todo-form");
const input = todoForm.children[0];
const todoItems = document.querySelector(".todo-items");
const todoLiItems = document.querySelectorAll(".todo-items");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem(input.value, input.value);
  input.value = "";
  localStorageData();
});

todoItems.addEventListener("click", (e) => {
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  } else {
    const spanText = e.target.parentNode.previousElementSibling.textContent;
    localStorage.removeItem(spanText);
    localStorageData();
  }
});

const localStorageData = function () {
  todoItems.innerHTML = ''
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      const newLiItem = document.createElement("li");
      const newLiInnerHtml = `<span>${localStorage.getItem(key)}</span>
                                    <div>
                                        <button class="todo-list-btn done">Done</button>
                                        <button class="todo-list-btn remove">Remove</button>
                                    </div>`;
      newLiItem.innerHTML = newLiInnerHtml;
      todoItems.append(newLiItem);
    }
  }
};

localStorageData();
