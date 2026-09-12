const container = document.getElementById('container');

const themeBtn = document.createElement('button');
themeBtn.textContent = '🌓 Change Theme';
themeBtn.className = 'btn btn-secondary mb-3';
container.appendChild(themeBtn);

if (localStorage.getItem('theme') === 'custom') {
    document.body.classList.add('custom-theme');
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('custom-theme');
    const isCustom = document.body.classList.contains('custom-theme');
    localStorage.setItem('theme', isCustom ? 'custom' : 'default');
});

const header = document.createElement('h1');
header.textContent = 'Welcome to My Page';
header.style.textAlign = 'center';
container.appendChild(header);

const pContainer = document.createElement('p');
pContainer.textContent = 'This is a new paragraph added to the container.';
container.appendChild(pContainer);

const divider = document.createElement('hr');
container.appendChild(divider);

const listContainer = document.createElement('div');
listContainer.className = 'container border p-3 my-3';
container.appendChild(listContainer);

const listHeader = document.createElement('h3');
listHeader.innerText = 'List Header';
listContainer.appendChild(listHeader);

const list = document.createElement('ul');
list.className = 'list-group my-3';
listContainer.appendChild(list);

const input = document.createElement('input');
input.placeholder = 'Enter text here';
input.className = 'form-control my-2';

const label = document.createElement('label');
label.textContent = 'Input Label:';

const addButton = document.createElement('button');
addButton.textContent = 'Add Item';
addButton.className = 'btn btn-primary';

listContainer.appendChild(label);
listContainer.appendChild(input);
listContainer.appendChild(addButton);

addButton.addEventListener('click', () => {
    const val = input.value.trim();
    if (!val) {
        alert('Please enter a value before adding.');
        return;
    }

    saveItems(val);
    input.value = '';
});

function saveItems(newItem) {
    const items = JSON.parse(localStorage.getItem('listItems')) || [];
    items.push(newItem);
    localStorage.setItem('listItems', JSON.stringify(items));
    displayItems();
}

function deleteItem(index) {
    const items = JSON.parse(localStorage.getItem('listItems')) || [];
    items.splice(index, 1);
    localStorage.setItem('listItems', JSON.stringify(items));
    displayItems();
}

function displayItems() {
    list.innerHTML = '';

    const items = JSON.parse(localStorage.getItem('listItems')) || [];

    if (items.length === 0) {
        const emptyLi = document.createElement('li');
        emptyLi.textContent = 'No items to display.';
        emptyLi.className = 'list-group-item text-muted';
        list.appendChild(emptyLi);
        return;
    }

    items.forEach((itemText, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        const span = document.createElement('span');
        span.textContent = `${index + 1}. ${itemText}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'btn btn-danger btn-sm';
        
        deleteBtn.addEventListener('click', () => {
            deleteItem(index);
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}

displayItems();