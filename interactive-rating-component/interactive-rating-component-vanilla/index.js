const ratingItems = document.querySelectorAll(".rating__bar-item");
const submitBtn = document.querySelector(".submit");
const ratingText = document.querySelector(".rating");

const thankyouWrapper = document.querySelector(".thankyou__wrapper");
const ratingWrapper = document.querySelector(".rating__wrapper");

let currentRating = 0;

const ratingItemClickHandler = (event) => {
  const itemNumber = event.target.textContent;
  currentRating = itemNumber;
  console.log(`You clicked: ${itemNumber}`);
  for (let index = 0; index < itemNumber; index++) {
    const element = arrRatingItems[index];
    element.classList.add("active");
  }
  for (let index = itemNumber; index < arrRatingItems.length; index++) {
    const element = arrRatingItems[index];
    element.classList.contains("active") && element.classList.remove("active");
  }
};

const arrRatingItems = Array.from(ratingItems);
arrRatingItems.forEach((item) => {
  item.addEventListener("click", ratingItemClickHandler);
});

submitBtn.addEventListener("click", (event) => {
  ratingText.textContent = `You selected ${currentRating} out of 5`;
  ratingWrapper.style.display = "none";
  thankyouWrapper.style.display = "block";
});
