let totalFine = (fare) => {
    if (typeof fare !== 'number' || fare <= 0) {
        return "Invalid";
    } else {
        const surcharge = fare * 0.20;
        const serviceCharge = 30;
        const total = fare + surcharge + serviceCharge;
        return total ;
    }
}
console.log(totalFine(2045));
