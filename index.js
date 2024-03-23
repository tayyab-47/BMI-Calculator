console.log("script working")

let form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
  e.preventDefault()
  let weight = (document.querySelector('#weight').value)
  let height = (document.querySelector('#height').value)
  let result = document.querySelector('.bmi-result')
  // console.log(weight, height);
  if((height <= 0 || isNaN(height)) || (weight <= 0 || isNaN(weight))){
    result.innerHTML = "Please enter a valid number"
  }else{
    let bmi = (weight / ((height*height)/10000)).toFixed(2)
    if(bmi < 18.5){
      result.innerHTML =  `BMI Score = ${bmi}, you are Underweight`
    }else if(bmi > 18.5 && bmi < 24.9){
      result.innerHTML =  `Your BMI : ${bmi}, , you are Healthyweight`
    }else if(bmi > 25.0 && bmi <29.9){
      result.innerHTML =  `Your BMI : ${bmi}, , you are Overweight`
    }else if(bmi > 30){
      result.innerHTML =  `Your BMI : ${bmi}, , you reached Obesity`
    }
  }
})
