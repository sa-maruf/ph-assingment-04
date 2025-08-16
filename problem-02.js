let onlyCharacter =(str)=>{
    if (typeof str !== "string") {
        return "Invalid";
    } else {
        const result =str.replace(/ /g, '').toUpperCase();
        return result;
    }
}
console.log(onlyCharacter('ho gi   gt'));
