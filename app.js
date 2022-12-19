// Your users should be able to:

// - View the optimal layout for the app depending on their device's screen size
// - See hover states for all interactive elements on the page

// - Use the slider and toggle to see prices for different page view numbers (details provided below)

const mySlider = document.querySelector('.mySlider');
const pgViews = document.querySelector('.pgViews');
const cost = document.querySelector('.cost');
console.log(cost)

mySlider.addEventListener('mousemove', () => {
    updateSlider();
})

// console.log(mySlider.value);
// console.log(mySlider);

const costObject = {
    "10K": 8,
    "50K": 12,
    "100K": 16,
    "500K": 24,
    "1M": 36
}

// not the best solution bc of scalability but works for now
// got rid of static values so can update costObject instead, but still not best solution 
const updateSlider = () => {
    if (mySlider.value === "1") {
        pgViews.textContent = (Object.keys(costObject)[0]) + " ";
        cost.textContent = "$" + (Object.values(costObject)[0]);
    } else if (mySlider.value === "2") {
        pgViews.textContent = (Object.keys(costObject)[1]) + " ";
        cost.textContent = "$" + (Object.values(costObject)[1]);
    } else if (mySlider.value === "3") {
        pgViews.textContent = (Object.keys(costObject)[2]) + " ";
        cost.textContent = "$" + (Object.values(costObject)[2]);
    } else if (mySlider.value === "4") {
        pgViews.textContent = (Object.keys(costObject)[3]) + " ";
        cost.textContent = "$" + (Object.values(costObject)[3]);
    } else if (mySlider.value === "5") {
        pgViews.textContent = (Object.keys(costObject)[4]) + " ";
        cost.textContent = "$" + (Object.values(costObject)[4]);
    }
}

// If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.

const toggleChecked = document.querySelector("input");
const slider = document.querySelector(".round")
const discount = document.querySelector(".discount")

console.log(toggleChecked)
console.log(slider)

// not a perfect solution because if the page is on yearly billing and is refreshed, the discount is not there anymore cuz it's dependent on the click
slider.addEventListener('click', () => {
    toggleChecked.checked = !toggleChecked.checked;
    // When input is checked 
    if (toggleChecked.checked === true) {
        discount.classList.add('discountOn');
        discount.classList.remove('discount');
        // Need to probably add a function in here that applies 25% discount 
    // When input is not checked
    } else if (toggleChecked.checked === false) {
        discount.classList.add('discount')
        discount.classList.remove('discountOn');
    }
    console.log(toggleChecked.checked)
})


// console.log(Object.values(costObject)[0])
// console.log(Object.keys(costObject)[0])

// const newObj = Object.keys(costObject).reduce((accumulator, key) => {
//   return {...accumulator, [key]: ''};
// }, {});

// console.log(newObj)

for (let item of Object.keys(costObject)) {
    if (toggleChecked.checked === true) {
        myObject[item] += 2
    }
}