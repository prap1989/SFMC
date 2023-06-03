const toDolist = [];
function addToDoList()
{
const inputElement = document.getElementById('Activity');
const name = inputElement.value;
toDolist.push(name);
console.log(toDolist);
inputElement.value = '';
}