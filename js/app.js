document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');
  
  
  const form = document.querySelector('#new-item-form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
  
    const newListItem = document.createElement('li')
    newListItem.textContent = `Name : ${event.target.name.value}, Type: ${event.target.type.value}`
  
    const list = document.querySelector('ul');
    list.appendChild(newListItem)
    
    form.reset()
  
  })
  
  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', () => {
      const pokemonList = document.querySelector('#pokemon-list');
      pokemonList.innerHTML = '';
  });

});
