const taskinput = document.getElementById("taskinput");
const btn = document.getElementById("btn");
const tasklist = document.getElementById("tasklist");

btn.addEventListener("click", function () {
    const taskText = taskinput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.innerText = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    tasklist.appendChild(li);
    taskinput.value = "";
});