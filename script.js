
// Assigning Variables

const buttons = document.querySelectorAll('.buttons');
const thankYou = document.getElementById('num-select');
const submit = document.querySelector('.s-button');
const finalResult = document.querySelector('.wrapper-2');
const pageOne = document.querySelector('.wrapper');


buttons.forEach(element => {
    element.addEventListener('click', () => {
        for(i=0; i < buttons.length; i++) {
            buttons[i].classList.remove('active');
        }
        element.classList.toggle('active');
        thankYou.innerText = `You selected ${element.innerText} out of ${buttons.length++}.`;
    })
});

submit.addEventListener('click', () => {
    pageOne.style.display = 'none';
    finalResult.style.display = 'flex';
})



// let wrapper = document.getElementsByClassName('wrapper');
// let wrapperTwo = document.getElementsByClassName('wrapper-2');
// let selectedRating = 0;
// let button = document.getElementsByClassName('s-button');
// let rateContainerOne = document.getElementsByClassName('rate-container1');
// let rateContainerTwo = document.getElementsByClassName('rate-container2');
// let rateContainerThree = document.getElementsByClassName('rate-container3');
// let rateContainerFour = document.getElementsByClassName('rate-container4');
// let rateContainerFive = document.getElementsByClassName('rate-container5');
// let ratingSelectionText = document.getElementById('num-select')



// rateContainerOne.addEventListener('click', () => {
//     selectedRating = 1;
//     showThis();
// })
// rateContainerTwo.addEventListener('click', () => {
//     selectedRating = 2;
//     showThis();
// })
// rateContainerThree.addEventListener('click', () => {
//     selectedRating = 3;
//     showThis();
// })
// rateContainerFour.addEventListener('click', () => {
//     selectedRating = 4;
//     showThis();
// })
// rateContainerFive.addEventListener('click', () => {
//     selectedRating = 5;
//     showThis();
// })




// function showThis() {
//     if(selectedRating !== 0) {
//         let submitValue = document.getElementById('rate-value');
// button.addEventListener('click', () => {
//     wrapper.style.display = none;
//     wrapperTwo.style.display = block;
    
// })
//     }
// }




