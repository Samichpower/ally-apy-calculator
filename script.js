//Make a calculator for Ally's savings APY over a chosen time frame.
//Put in how much money to start with, chose the number of months, then it will output the compounded interest over that time frame.
//APY: 3.68% annually. 
//While loops for the two prompt, must only accept numbers as answer

//Ask the user for an initial amount of money to put in
//Ask the user for a time-frame in months
//Add 3.68% to the users money and make this the new users money number
//Repeat for however many months they input
//Output a tidy message displaying the start and the total profit over the time frame

//Keep the profit seperate
//


function calculateInterest() {
  let moneyInvested;
  do {
    moneyInvested = +prompt("MONEY IN SAVINGS");
  } while (moneyInvested == false);

  let months;
  do {
    months = +prompt("MONTHS");
  } while (months == false);


  let totalMoney = moneyInvested;
  let apy = 0.0368 / 12; //3.68% APY

  for (let i = 1; i <= months; i++) {
    totalMoney += totalMoney * apy;
  }
  
  totalMoney = totalMoney.toFixed(2);

  console.log(`SAVINGS AFTER ${months} MONTHS: $` + totalMoney);
  console.log('TOTAL INTEREST GAINED: $' + (totalMoney - moneyInvested).toFixed(2));
}

calculateInterest();