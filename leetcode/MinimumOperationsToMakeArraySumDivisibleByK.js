

console.log(calculate([3,9,7], 5));

function calculate(nums, k) {
    var sum = 0;
    for(var i = 0; i<nums.length; i++){
        sum += nums[i];
    }
    return sum%k;
};