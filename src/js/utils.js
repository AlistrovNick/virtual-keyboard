function sum(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];        
    }
    return 5 + 1 + sum;
}

export {sum};