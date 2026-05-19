function removeColor() {
    const select = document.getElementById('colorSelect');
    const selectedIndex = select.selectedIndex;
    
    if (selectedIndex !== -1) {
        select.remove(selectedIndex);
    }
}

const button = document.querySelector('input[type="button"]');
button.addEventListener('click', removeColor);