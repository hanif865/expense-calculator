const calculateBtn = document.getElementById('calculateBtn');
      
calculateBtn.addEventListener('click', function(){
  const income = parseFloat(document.getElementById('income').value);


  //expage calclute
  const food = parseFloat(document.getElementById('food').value);
  const cloth = parseFloat(document.getElementById('cloth').value);
  const houseRent = parseFloat(document.getElementById('houseRent').value);
  const totalExpanse = food + cloth + houseRent;
          //savings calclutor
  const totalIncome = income - totalExpanse;
  const savings = parseFloat(document.getElementById('SavingsInput').value);
  const savingsAmount = (totalIncome * savings) / 100 ;
  // main Balance 
  const mainBalance= totalIncome - savingsAmount;
  if(totalExpanse < income && !isNaN(income) && !isNaN(food) && !isNaN(cloth) && !isNaN(houseRent) && !isNaN(savings)){
  document.getElementById('totalIncome').innerText="$" + income;
  document.getElementById('income').value = "";
  document.getElementById('totalExpense').innerText = "$" + totalExpanse;
  document.getElementById('food').value = "";
  document.getElementById('cloth').value = "";
  document.getElementById('houseRent').value = "";
  document.getElementById('savingsAmount').innerText = "$" + savingsAmount;
  document.getElementById('SavingsInput').value = "";
  document.getElementById('currentBalance').innerText = "$" + mainBalance;
  
  // Remove error message and red border
  document.getElementById('wrarning').style.display = "none";
  document.querySelectorAll('.input-field').forEach(input => {
    input.classList.remove('border-red-500');
  });
  }
  else {
    // Display error message and apply red border
    document.getElementById('wrarning').style.display = "block";
    document.querySelectorAll('.input-field').forEach(input => {
      input.classList.add('border-red-500');
    });
  }
})
