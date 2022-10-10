let shareBtn = document.querySelector('.share-icon');

shareBtn.addEventListener('click', () => {
    shareBtn.toggleAttribute('data-selected')
})