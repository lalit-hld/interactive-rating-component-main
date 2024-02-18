const urlParams = new URLSearchParams(window.location.search);
const selectedParamValue = urlParams.get('selected');

const ratingSpan = document.getElementById('rating');

ratingSpan.innerHTML = selectedParamValue;
