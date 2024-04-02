document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const navbarList = document.querySelector('.navbar-list');

    hamburgerBtn.addEventListener('click', function() {
        navbarList.classList.toggle('active');
    });

    const navbarLinks = navbarList.querySelectorAll('a');
    navbarLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navbarList.classList.remove('active');
        });
    });
});
