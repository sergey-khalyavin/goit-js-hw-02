const checkForSpam = function(message) {
  const spam = message.toLowerCase();
  const result = spam.includes('spam') || spam.includes('sale');
  return result;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
