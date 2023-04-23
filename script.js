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