const menuBtn = document.querySelector('.menu-btn');

let click = false;

menuBtn.addEventListener('click', () => {
    const hamburger = document.querySelector('.menu-btn-burger');
    const menuBox = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu-element-link');

    const removeMenuWhenClicked = (hamburgerParameter, menuBoxParameter, mobileLinksParameter) => {
        hamburgerParameter.classList.remove('open');
        menuBoxParameter.classList.remove('active');
        mobileLinksParameter.forEach(link => link.classList.remove('active'));

        click = false;
    }

    if (!click) {
        hamburger.classList.add('open');
        menuBox.classList.add('active');
        mobileLinks.forEach(link => {
            link.classList.add('active');
            link.addEventListener('click', () => {
                removeMenuWhenClicked(hamburger, menuBox, mobileLinks);
            });
        });
        
        click = true;

    } else {
        removeMenuWhenClicked(hamburger, menuBox, mobileLinks);
        
        click = false;
    }
})

const backgroundHtml = (imageName) =>
`<div class="zoomed-pic-container">
    <img class="zoomed-pic" src="${imageName}" alt="duck">
</div>
<div class="zoomed-pic-hamburger-box">
    <span class="zoomed-pic-hamburger"></span>
</div>`;

const images = document.querySelectorAll('img');

window.addEventListener('DOMContentLoaded', () => {
    images.forEach(image => image.addEventListener('click', () => {
        const imagePath = image.getAttribute('src');

        initPhotoZoom(imagePath);
    }));
});

const initPhotoZoom = (imageNameParameter) =>  {
    const gallery = document.querySelector('.gallery');
    const backgroundHtmlNode = document.createElement('div');

    displayPhoto(gallery, imageNameParameter, backgroundHtmlNode);
}

const displayPhoto = (galleryParameter, imageNameParameter, backgroundHtmlNodeParameter) => {
    backgroundHtmlNodeParameter.innerHTML = backgroundHtml(imageNameParameter);
    backgroundHtmlNodeParameter.classList.add('behind-picture-screen');

    galleryParameter.appendChild(backgroundHtmlNodeParameter);

    hidePhoto(backgroundHtmlNodeParameter);
}

const hidePhoto = (backgroundHtmlNodeParameter) => {
    const behindPicturesScreen = document.querySelector('.behind-picture-screen');

    behindPicturesScreen.addEventListener('click', () => {
        backgroundHtmlNodeParameter.remove();
    });
}

// animations on scroll

// splashes animations
ScrollReveal( {
    reset: true,
    distance: '110px',
    duration: 2500
});

ScrollReveal().reveal('.gallery-splash-background3', {interval: 50, origin: 'top', delay: 50, distance: '150px'});
ScrollReveal().reveal('.gallery-splash-background1', {interval: 100, origin: 'right', delay: 100});
ScrollReveal().reveal('.gallery-splash-background2', {interval: 150, origin: 'left', delay: 150, distance: '150px'});

// contact animations
ScrollReveal().reveal('.contact-container-mobile', {interval: 50, origin: 'left', delay: 50, distance: "200px"});
ScrollReveal().reveal('.contact-container-facebook', {interval: 100, origin: 'left', delay: 100, distance: "200px"});
ScrollReveal().reveal('.contact-container-instagram', {interval: 150, origin: 'left', delay: 150, distance: "200px"});

// scrolling the website animation

const allLinks = document.querySelectorAll('a');

allLinks.forEach(selectedLink => selectedLink.addEventListener('click', () => {
    const activeLinkClassName = selectedLink.getAttribute('data-link');
    const activeLink = document.querySelector('.' + activeLinkClassName);

    activeLink.scrollIntoView({behavior: "smooth"});
}));
