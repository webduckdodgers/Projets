
createList.addEventListener('click', () => {
    create_list()
    addList.addEventListener('click', add_list)
});

task.addEventListener('click', select_tags_from_list);


function create_list() {
    form.style.display = "flex";
}


function add_list() {
    const list = document.createElement('li');
    list.id = "list";
    list.innerHTML = `
    <input type="checkbox">
    <input type="text" value="${text.value}" class="modify-text-field">
    <div>
        <button id="edit">Edit</button>
        <i id="remove" class="fa-solid fa-trash-can"></i>
    </div>
    `;
    task.appendChild(list);

    text.value = null;
    textarea.value = null;
    date.value = null;
    form.style.display = "none";
}

function select_tags_from_list(tag) {
    const list = tag.target.parentElement.parentElement;

    if (tag.target.type === "checkbox") {
        list.children[1].classList.toggle('task-accomplished');
    }

    if (tag.target.id === "edit") {
        list.children[1].classList.toggle('modify-text-field');

        if (tag.target.innerText === "Edit") {
            list.children[2].innerText = "Save";
            list.children[1].focus();
            
        } else {
            list.children[2].innerText = "Edit";
        }
    }

    if (tag.target.id === "remove") {
        list.remove();
    }
}

