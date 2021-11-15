const btnAddTask = document.querySelector(".add-task");
const newTask = document.querySelector("#new-task");
const ulTask = document.querySelector(".ul-task");
const taskChecked = document.getElementsByClassName("check-box");
let i = 0;

const stripedTask = () => {
     [...taskChecked].map(n => {
         n.checked ? n.parentNode.classList.add("striped-box") : n.parentNode.classList.remove("striped-box")
     });
}

const clearChecked = () => {
     [...taskChecked].map(n => {
          n.checked ? n.parentNode.remove() : '';
     });
}

const removeTask = (idTask) => {
     const liTask = document.getElementById(idTask);
     liTask.parentNode.removeChild(liTask);
}

const clearTodo = () => {
     [...document.getElementsByClassName("li-task")].map(n => n.remove());
}

const addTask = () =>{
          const addNewLiTask = document.createElement("li");
          addNewLiTask.setAttribute("class", "li-task");
          addNewLiTask.innerHTML = `
               <input type="checkbox" class="check-box" onclick="stripedTask()">
               ${newTask.value}
               <button onclick="removeTask(${i})">X</button>
          `;
          addNewLiTask.setAttribute("id", `${i++}`);
          
          newTask.value.length > 0 ? ulTask.appendChild(addNewLiTask) : '';
          newTask.value = '';
}

btnAddTask.addEventListener("click", addTask);
