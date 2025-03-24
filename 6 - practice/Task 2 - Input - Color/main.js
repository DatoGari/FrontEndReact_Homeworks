const htmlBody = document.body
const submitButtonClick = document.querySelector('button')

submitButtonClick.addEventListener('click', () => {
    event.preventDefault(); // Prevent form from refreshing the page
    const colorInput = document.querySelector('input').value.trim().toLowerCase();
    btnClick(colorInput);
});

function btnClick (colorInput) {
    const validColors = ['red', 'green', 'blue', 'black', 'white']
    
    if (validColors.includes(colorInput)){       
        htmlBody.style.backgroundColor = colorInput;
    }else{
        alert ("You can only enter one of the following: 'red', 'green', 'blue', 'black', or 'white'. ");
    }
}

