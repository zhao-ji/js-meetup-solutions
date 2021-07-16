// https://leetcode.com/problems/palindrome-number/

var isPalindrome = function(x) {
    if (x < 0) return false;
    const order = [];
    let reverseOrder = [];
    
    let newX = x;
    while (newX > 0) {
        const rest = newX % 10;
        order.push(rest);
        reverseOrder = [rest, ...reverseOrder];
        newX = (newX - rest) / 10;
    }

    const result = order
        .map((item, index) => item === reverseOrder[index])
        .filter(i => !i)
        .length;
    return result === 0;
};

console.log(isPalindrome(121))

