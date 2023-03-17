function changeColor() {

    if (window.scrollY < 500) {
        document.body.className = 'w'
    } else if (window.scrollY < 1000) {
        document.body.className = 'c'
    } else if ( window.scrollY < 1500) {
        document.body.className = 'p'
    } else if ( window.scrollY < 2000) {
        document.body.className = 'y'
    }
}