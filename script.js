const btn = document.querySelector(".sub");
const radioButtons = document.querySelectorAll('input[name="number"]');
const rate = document.querySelector(".rate");
const ratingState = document.querySelector("#rating-state");
const thankYouState = document.querySelector("#thank-you-state");
btn.addEventListener("click", () => {
   let rating;
   for (const radioButton of radioButtons) {
      if (radioButton.checked) {
         rating = radioButton.value;
         break;
      }
   }
   if (rating === undefined) {
      alert("Please select a rating");
   } else {
      rate.innerHTML = "You selected " + rating + " out 5";
   }

   ratingState.style.visibility = "hidden";
   thankYouState.style.visibility = "visible";
});
