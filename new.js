let aLink = document.querySelectorAll('.link a');

+function() {
    aLink.forEach(Item => {
        (Item.href === window.location.href)
            ? Item.classList.add('active-link')
            : Item.classList.remove('active-link');
    });
}();

aLink.forEach(Item => {
    Item.addEventListener('click', e => {
        aLink.forEach(Item => {
            Item.classList.remove('active-link');
        });
        e.target.classList.add('active-link');
    });
});