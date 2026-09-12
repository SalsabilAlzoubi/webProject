const container = document.getElementById('container');
const displayBox = document.getElementById('elements');

const header = document.createElement('h1');
header.textContent = 'Welcome to My Page';
header.style.textAlign = 'center';
header.style.color = 'blue';
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

function displayItems() {
    if (!displayBox) return;

    displayBox.innerHTML = '';

    const items = JSON.parse(localStorage.getItem('listItems')) || [];

    if (items.length === 0) {
        const p = document.createElement('p');
        p.textContent = 'No items to display.';
        displayBox.appendChild(p);
        return;
    }

    items.forEach((itemText, idx) => {
        const p = document.createElement('p');
        p.textContent = `${idx + 1}. ${itemText}`;
        displayBox.appendChild(p);
    });
}

displayItems();