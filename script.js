
function filterProducts() {
    const searchInput = document.querySelector('.s-input').value.toLowerCase();
    
    const productBoxes = document.querySelectorAll('.shop-sec .box');

    productBoxes.forEach(box => {

        const title = box.querySelector('h2').innerText.toLowerCase();

        if (title.includes(searchInput)) {
            box.style.display = 'block'; 
        } else {
            box.style.display = 'none';  
        }
    });
}

function openSignInModal() {
    alert("Welcome to Heaven's Basket! 🧺 Click OK to proceed to the Sign In / Account Page.");
}