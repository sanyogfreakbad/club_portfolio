// aos animation
AOS.init();

// navbar animation
let header = document.querySelector('.header');
let carousel = document.querySelector('.carousel');
let breadCrumb = document.querySelector('.breadcrumb-area');

window.onscroll = () => {
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > header.offsetHeight) {
        header.classList.add('active');

        if (carousel !== null) {
            carousel.style.marginTop = header.offsetHeight + 'px';
        } else if (breadCrumb !== null) {
            breadCrumb.style.marginTop = header.offsetHeight + 'px';
        }
    } else {
        header.classList.remove('active');

        if (carousel !== null) {
            carousel.style.marginTop = 0 + 'px';
        } else if (breadCrumb !== null) {
            breadCrumb.style.marginTop = 0 + 'px';
        }
    }
}

// selecting filter menu and filter items
let filterMenu = document.querySelectorAll('.filter-menu li');
let filterContents = document.querySelectorAll('.filter-content');

// delete construction projects

// filter construction and interior projects


// service gallery
let galleryContent = document.querySelectorAll('.service-gallery-content');

for (let i = 0; i < galleryContent.length; i++) {
    // when onclick then go to project page
    galleryContent[i].onclick = () => {
        window.location = 'project.html';
    }
}