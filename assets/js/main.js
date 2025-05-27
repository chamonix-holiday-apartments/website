// import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Initialize all carousels
document.addEventListener('DOMContentLoaded', function() {
    var carousels = document.querySelectorAll('.carousel')
    carousels.forEach(function(carousel) {
        new bootstrap.Carousel(carousel)
    })
})