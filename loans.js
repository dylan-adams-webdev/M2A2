module.exports = [
	{
		id: 0,
		customerName: 'John Doe',
		phoneNumber: 1112223333,
		address: '123 4th St',
		loanAmount: '5000',
		interest: 0.05,
		loanTermYears: 4,
		loanType: 'personal',
		description: 'small personal loan',
		calculatedLoanAmount: function () {
			return (
				this.loanAmount *
				Math.pow(1 + this.interest / 1, 1 * this.loanTermYears)
			).toFixed(2);
		},
	},
	{
		id: 1,
		customerName: 'Jane Smith',
		phoneNumber: 2223334444,
		address: '234 5th St',
		loanAmount: 50_000,
		interest: 0.04,
		loanTermYears: 8,
		loanType: 'business',
		description: 'small business loan',
		calculatedLoanAmount: function () {
			return (
				this.loanAmount *
				Math.pow(1 + this.interest / 1, 1 * this.loanTermYears)
			).toFixed(2);
		},
	},
	{
		id: 2,
		customerName: 'Mike Grimaldi',
		phoneNumber: 3334445555,
		address: '345 6th St',
		loanAmount: 2000,
		interest: 0.02,
		loanTermYears: 2,
		loanType: 'personal',
		description: 'small personal loan',
		calculatedLoanAmount: function () {
			return (
				this.loanAmount *
				Math.pow(1 + this.interest / 1, 1 * this.loanTermYears)
			).toFixed(2);
		},
	},
	{
		id: 3,
		customerName: 'Carl Ferdinand',
		phoneNumber: 4445556666,
		address: '456 7th St',
		loanAmount: 43_344,
		interest: '0.032',
		loanTermYears: 5,
		loanType: 'auto',
		description: 'auto finance loan',
		calculatedLoanAmount: function () {
			return (this.loanAmount *
				Math.pow(1 + this.interest / 1, 1 * this.loanTermYears)
			).toFixed(2);
		},
	},
	{
		id: 4,
		customerName: 'Al Brickman',
		phoneNumber: 5556667777,
		address: '567 8th St',
		loanAmount: 25_000,
		interest: '0.06',
		loanTermYears: 3,
		loanType: 'auto',
		description: 'auto finance loan',
		calculatedLoanAmount: function () {
			return (
				this.loanAmount *
				Math.pow(1 + this.interest / 1, 1 * this.loanTermYears)
			).toFixed(2);
		},
	},
];
