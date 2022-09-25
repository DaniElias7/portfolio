const icon = document.querySelector( '#go-up-button' );
const goUpIcon = document.querySelector( '#go-up-icon' );
const menuIcon = document.querySelector( '#menu' );

const menuHandle = () => {
    const ul = document.querySelector("nav>ul");
    let hideMenu = ul.classList.contains('show-menu');

    hideMenu ? ul.classList.remove('show-menu') : ul.classList.add('show-menu');
}
menuIcon.addEventListener('click', () => menuHandle() );

const anchors = document.querySelectorAll("nav>ul>li>a");
for (let a of anchors) {
    a.addEventListener('click', () => menuHandle() );
}

let footerYear = document.querySelector('#footer-year');
footerYear.innerHTML = new Date( ).getFullYear( );

// Setting go up button 
setInterval( ( ) => {
    goUpIcon.className = 'animation-icon'
}, 2000 )

setInterval( ( ) => {
    goUpIcon.classList.remove( 'animation-icon' );     
}, 3500 )