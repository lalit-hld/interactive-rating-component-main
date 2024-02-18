let selectedRating = 0;

let ratings = document.getElementsByClassName('p2');

let ratingsArray = Array.from(ratings);

ratingsArray.forEach(function(p) {
    p.addEventListener('click', ratingClickHandler);
})

function ratingClickHandler(event) {
    const clickedElement = event.target;

    ratingsArray.forEach(function(p) {
        p.classList.remove('active');
    })

    clickedElement.classList.add('active');
    selectedRating =  clickedElement.id;
    console.log("selected ", selectedRating);
}

let submitBtn = document.getElementById("submit");

submitBtn.addEventListener('click', submitClickHandler);

function submitClickHandler() {
    if (selectedRating == 0) return;

    window.location.href = `/interactive-rating-component-main/next.html?selected=${selectedRating}`;

    console.log('submitting-->', selectedRating)
}