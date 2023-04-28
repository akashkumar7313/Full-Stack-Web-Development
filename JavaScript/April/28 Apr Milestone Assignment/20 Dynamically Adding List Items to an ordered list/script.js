

		// Define the pre-existing array of list items
		const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5','item 6'];
        
		const list = document.getElementById('list');
		const button = document.getElementById('add-btn');

		let currentItem = 0;

		button.addEventListener('click', () => {
			// Check if there are any items left in the array
			if (currentItem >= items.length) {
				alert('All items have been added');
				return;
			}
            // this will create a list 
			const newItem = document.createElement('li');
            // and above list will contain items from the array;
			newItem.textContent = items[currentItem];

			// Increment the current item count
			currentItem++;

			// Add the new item to the end of the list as it will be a part of ordered list
			list.appendChild(newItem);
		});