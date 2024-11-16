const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('result');

    if(height === '' || height < 0 || isNaN(height)){
      result.innerHTML = 'Please give a valid Height'
    } 
    else if (weight === '' || weight < 0 || isNaN(weight)){
      result.innerHTML = 'Please give a valid Weight'
    } else { const bmi = (weight / ((height * height)/10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;

    

    if (bmi < 18.6){
    result.innerHTML = `${bmi} </br> You are Under Weight`
    }
    else if(bmi > 18.6 && bmi < 24.9){
        result.innerHTML = `${bmi} </br> You have Normal Weight`
    }
    else {
        result.innerHTML = ` ${bmi} </br> You are Over Weight`

    }
    
}
})