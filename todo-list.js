let todos = JSON.parse(localStorage.getItem('todos')) || [{
  name: 'wash dishes',
  dueDate: '2012-12-12'
},
{
  name: 'make dinner',
  dueDate: '2012-12-12'
}
];


document.getElementById('btn').addEventListener('click', () => {
  addTodo()
})

renderTodos()
function renderTodos() {
  let info = ''

  todos.forEach((todoElem, index) => {
    const { name, dueDate } = todoElem
    let html = `
  <div>${name}</div> 
  <div>${dueDate}</div> 

  <button class="btn-delete">Delete</button>
  `;
    info += html
});
  document.querySelector('.js-paragraph').innerHTML = info;
    document.querySelectorAll('.btn-delete').forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todos.splice(index, 1)
        renderTodos()
      })
    })
}

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos))
}

function addTodo() {
  const text = document.getElementById('text');
  const dateInputElement = document.querySelector('.js-due-date-input')

  todos.push({
    name: text.value,
    dueDate: dateInputElement.value
  })
  console.log(todos)
  text.value = '';
  saveTodos()
  renderTodos()
}

