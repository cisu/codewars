/*
Calculate BMI

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/

function bmi(weight, height) {
    const calBmi = weight / (height ** 2);
    
    
   if (calBmi <= 18.5){
     return "Underweight";
   }
    else if (calBmi<= 25.0 ){
      return  "Normal";
    }
     else if (calBmi<= 30.0 ){
      return  "Overweight";
    }
      else if (calBmi> 30  ){
      return  "Obese";
    }
  }

  bmi(80, 1.80);
  console.log(bmi(80, 1.80))