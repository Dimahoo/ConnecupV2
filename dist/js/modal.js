let modal = document.getElementById('consent-popup-model'),
    openModel = document.getElementById('modal-open'),
    closeModel = document.querySelector('.close-modal');

openModel.addEventListener('click', function() {
    modal.style.display = 'block';
})

function modalOpen() {
    modal.style.display = 'block';
}

closeModel.addEventListener('click', function() {
    modal.style.display = 'none';
})

window.addEventListener('click', function(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
})