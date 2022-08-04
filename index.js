const icon = document.querySelector( '#go-up-button' );
const goUpIcon = document.querySelector( '#go-up-icon' );

let footerYear = document.querySelector('#footer-year');
footerYear.innerHTML = new Date( ).getFullYear( );

// Setting go up button 
window.addEventListener( 'scroll', ( ) => {
    const nav = document.querySelector('nav');
    if ( pageYOffset > 600 ) {
 	nav.style.borderBottom = '.1px solid red';
        icon.style.display = 'block';
    }
    else {
        nav.style.borderBottom = 'none';
        icon.style.display = 'none'; 
    }
} )

setInterval( ( ) => {
    goUpIcon.className = 'animation-icon'
}, 2000 )

setInterval( ( ) => {
    goUpIcon.classList.remove( 'animation-icon' );     
}, 3500 )