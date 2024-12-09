
const form = document.getElementById('shopping-form');
const container = document.getElementById('shopping-container');
const clearListButton = document.getElementById('clear-list');

let shoppingList = [];


form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const itemName = document.getElementById('product').value;
    const itemPrice = document.getElementById('price').value;

    if (itemName !== '' && itemPrice !== '') {
        shoppingList.push({
            name: itemName,
            price: itemPrice,
            purchased: false,
        });

        form.reset(); 
        displayList(); 
    }
});


function displayList() {
    container.innerHTML = '';

  
    for (let i = 0; i < shoppingList.length; i++) {
        const item = shoppingList[i];

        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';

        const detailsDiv = document.createElement('div');
        detailsDiv.innerHTML = `<strong>${item.name}</strong> - Ksh ${item.price}`;
        if (item.purchased) {
            detailsDiv.style.textDecoration = 'line-through';
        }

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            deleteItem(i);
        });

        const toggleButton = document.createElement('button');
        toggleButton.textContent = item.purchased ? 'Undo' : 'Mark as Purchased';
        toggleButton.addEventListener('click', function () {
            togglePurchased(i);
        });

        itemDiv.appendChild(detailsDiv);
        itemDiv.appendChild(deleteButton);
        itemDiv.appendChild(toggleButton);

        container.appendChild(itemDiv);
    }

    if (shoppingList.length > 0) {
        clearListButton.style.display = 'block';
    } else {
        clearListButton.style.display = 'none';
    }
}


function deleteItem(index) {
    shoppingList.splice(index, 1); 
    displayList(); 
}


function togglePurchased(index) {
    shoppingList[index].purchased = !shoppingList[index].purchased; 
    displayList(); 
}


clearListButton.addEventListener('click', function () {
    shoppingList = []; 
    displayList();
});
