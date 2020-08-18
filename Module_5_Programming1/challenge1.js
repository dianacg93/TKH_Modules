let weeklyIncome = parseInt(prompt("what's your income per week?"))
console.log('income: $', weeklyIncome)

let foodCost = parseInt(prompt("In a weekly basis, how much do you spend on food?"))
console.log('food cost: $', foodCost)

let housingCost = parseInt(prompt("In a weekly basis, how much do you pay for housing?"))
console.log('housing cost: $', housingCost)

let transportationCost = parseInt(prompt("In a weekly basis, how much do you spend on transportation?"))
console.log('transportation cost: $', transportationCost)

let otherCosts = parseInt(prompt("In a weekly basis, how much do you spend on other costs?"))
console.log("other costs: $", otherCosts)

let annualSavings = parseInt(prompt("On an annual basis, how much would you like to save per year?"))

console.log("annual savings: $", annualSavings)

let weeklySavingAmount = Math.round(annualSavings / 52);
console.log("weekly saving amount: $", weeklySavingAmount)

let weeklyExpensesCost = foodCost + housingCost + transportationCost + otherCosts
console.log("weekly expenses cost: $", weeklyExpensesCost)

let weeklyIncomeAfterExpenses = weeklyIncome - weeklyExpensesCost;
console.log("weekly income after expenses: $", weeklyIncomeAfterExpenses)

if(weeklyIncomeAfterExpenses < weeklySavingAmount){
  let difference = weeklySavingAmount - weeklyIncomeAfterExpenses
  console.log(`You need to save $${difference} more per week to meet your annual savings goal.`)
}else{
  console.log("You're in good track!")
}