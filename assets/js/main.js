/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* IMAGES LISTENER  */
const overlay = document.getElementById('overlay');
document.querySelectorAll('.accessory__container .accessory__content .accessory__button').forEach((element) => {
    element.addEventListener('click', () => {
        const route = element.previousElementSibling.previousElementSibling.getAttribute('src');

        overlay.classList.add('overlay__active')
        document.querySelector('#overlay .overlay__container__img img').src = route;
    })
    
})

/* EVENT LISTENER CLOSE BUTTON*/
document.querySelector('#btn__close__modal').addEventListener('click', () => {
    overlay.classList.remove('overlay__active');
})

/* EVENT LISTENER OVERLAY*/
overlay.addEventListener('click', (event) => {
    if(event.target.id == 'overlay')
    overlay.classList.remove('overlay__active');
})

/*==================== GOOGLE MAPS ====================*/ 
function startMap(){
    let coord = {lat:4.4388021, lng:-75.207167};
    let map = new google.maps.Map(document.getElementById('map'),{
    zoom:18,
    center: coord
    });

    let marker = new google.maps.Marker({
        position:coord,
        map: map,
        icon: "data:image/png;base64,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",

    })

}



/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true,
});

sr.reveal(`.home__data, .home__img, 
           .decoration__data,
           .accessory__content,
           .footer__content`, {
    origin: 'top',
    interval: 200,
})

sr.reveal(`.share__img, .send__content`, {
    origin: 'left'
})

sr.reveal(`.share__data, .send__img`, {
    origin: 'right'
})
