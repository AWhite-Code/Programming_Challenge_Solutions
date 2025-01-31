export function dayRate(hourlyRate){
    return (rate*8)
}

export function daysInBudget(budget, hourlyRate){
    days = budget/dayRate(hourlyRate);
    return days.Math.floor();
}

export function priceWithMonthlyDiscount(hourlyRate, projectDurationDays, discount){
    let discountMult = 1 - discount;
  
    let remainingDays = Math.floor(projectDurationDays % 22)
    let totalMonths = Math.floor(projectDurationDays/22);
  
    let remainderCost = remainingDays * dayRate(hourlyRate);
    let MonthlyCost = (totalMonths * 22) * dayRate(hourlyRate);
    let discountedMonthlyCost = MonthlyCost*discountMult;
    return Math.ceil(remainderCost+discountedMonthlyCost);
}