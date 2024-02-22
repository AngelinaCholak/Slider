const buttons = document.querySelectorAll('.container-icon button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
           
            const parent = button.parentElement.parentElement;
            
            const description = parent.querySelector(".column-description");
            
            if (description) {
                if (description.style.display === 'none' || description.style.display === '') {
                    
                    description.style.display = 'block';
                } else {
                
                    description.style.display = 'none';
                }
            }
        });
    });

    const descriptions = document.querySelectorAll(".column-description");
    descriptions.forEach(description => {
        description.style.display = 'none';
    });
