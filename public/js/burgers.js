// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  
    // UPDATE
    const changeEaten = document.querySelectorAll('.changeEaten');
  
    // Set up the event listener for the create button
    if (changeEaten) {
      changeEaten.forEach((button) => {
        button.addEventListener('click', (e) => {
          
          // Grabs the id of the element that goes by the name, "id"
          const id = e.target.getAttribute('data-id');
          console.log(`I am the id ${id} `)

          fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            
                       
          }).then((response) => {
            
            if (response.ok) {
              //status 200 is response ok
              console.log(`ate the burger`);
              location.reload('/');
            } else {
              //status 500
              alert('something went wrong!');
            }
          });
        });
      });
    }
  
    // CREATE
    const createBurgerBtn = document.getElementById('create-form');
  
    if (createBurgerBtn) {
      createBurgerBtn.addEventListener('submit', (e) => {
        e.preventDefault();
  
        // Grabs the value of the textarea that goes by the name, "quote"
        const newBurger = {
          name: document.getElementById('burg').value.trim(),
          
        };
        console.log(newBurger)
        // Send POST request to create a new quote
        fetch('/api/burgers', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          
          // Make sure to serialize the JSON body
          body: JSON.stringify(newBurger),
          
        }).then(() => {
          // Empty the form
          document.getElementById('burg').value = '';
          
          // Reload the page so the user can see the new quote
          console.log('Created a new burger!');
          location.reload();
        });
      });
    }
  });
  