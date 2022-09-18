const icon = document.querySelector( '#go-up-button' );
const goUpIcon = document.querySelector( '#go-up-icon' );

let footerYear = document.querySelector('#footer-year');
footerYear.innerHTML = new Date( ).getFullYear( );

// Setting go up button 
setInterval( ( ) => {
    goUpIcon.className = 'animation-icon'
}, 2000 )

setInterval( ( ) => {
    goUpIcon.classList.remove( 'animation-icon' );     
}, 3500 )