const loans = require('./loans');

const grandTotal = loans.reduce((acc, val, i) => {
	const loan = {
		...val,
		calculatedLoanAmount: val.calculatedLoanAmount(),
	};
	console.log(`Array element ${i}`, loan);
	return (acc += parseFloat(loan.calculatedLoanAmount));
}, 0);

console.log(`\nGrand Total: $${grandTotal}`);
