const submit = document.getElementById("button");
const rating = document.getElementById('card-container');
const thank = document.getElementById("thank-card-container");

submit.addEventListener('click', function() {
    rating.style.display = "none";
    thank.style.display = "flex";
})

