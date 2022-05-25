
// querySelector bilan tanlab olish  // const elHeroHeading = document.querySelector(".hero__heading");
// queryselectorAll bilan tanlab olish // const elHeroDesc = document.querySelectorAll(".hero__desc");

// getElementById bilan tanlash  const elHeroHeading = document.getElementById("hero__heading");

// const elHeroheading = document.getElementsByClassName("hero__heading"); 

// // console.log(elHeroHeading);
// // console.log(elHeroDesc);

// const elList = document.querySelector(".list li:nth-child(3)");
// console.log(elList);
// // console.log(elHeroHeading);




const elForm = document.querySelector(".form");
const elFormInput = document.querySelector(".form__input");
const elFormSelect = document.querySelector(".form__select");
const elResult = document.querySelector(".form__result");

const elHeading = document.querySelector(".heading");
elHeading.textContent = "EFC";

elForm.addEventListener('submit', function(evt){
   evt.preventDefault();
   elHeading.textContent = "UFC";

   // console.log("Ishladi");

   const inputUserName = elFormInput.value;
   const selectValue = elFormSelect.value;


   elResult.textContent = `${inputUserName} VS ${selectValue}`
   console.log(inputUserName, selectValue);
})






