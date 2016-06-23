const fetchDot = require('../index');
const expect = require('chai').expect;

describe("fetchDot()", () => {
	const testObj = {
		name: 'Test Obj',
		place: 'Test Placement',
		deeper: {
			evenDeeper: 'Deep.',
			evenDeepest: {
				soDeep: {
					suchDeep: 'Hello.'
				}
			}
		},
		arr: [
			'Test',
			{
				deep: 'Test deep array.'
			},
			{
				nestedArray: [
					'test nested array',
					{
						anotherTest: 'Yet another test.'
					}
				]
			}
		],
		inceptedArr: [
			[
				[
					{
						test: 'Test successful!'
					}
				]
			]
		]
	};

	it('should grab a simple property value (such as a string)', () => {
		expect(fetchDot('place', testObj)).to.equal(testObj.place);
		expect(fetchDot('name', testObj)).to.equal(testObj.name);
	});

	it('should grab a more complex property value (such as a nested object)', () => {
		expect(fetchDot('deeper', testObj)).to.equal(testObj.deeper);
		expect(fetchDot('arr', testObj)).to.equal(testObj.arr);
	});

	it('should grab members of nested objects', () => {
		expect(fetchDot('deeper.evenDeeper', testObj)).to.equal(testObj.deeper.evenDeeper);
		expect(fetchDot('deeper.evenDeepest.soDeep.suchDeep', testObj)).to.equal(testObj.deeper.evenDeepest.soDeep.suchDeep);
	});

	it('should grab members of nested arrays', () => {
		expect(fetchDot('arr[0]', testObj)).to.equal(testObj.arr[0]);
		expect(fetchDot('arr[1].deep', testObj)).to.equal(testObj.arr[1].deep);
	});

	it('should grab members of deeply nested arrays', () => {
		expect(fetchDot('inceptedArr[0][0][0].test', testObj)).to.equal(testObj.inceptedArr[0][0][0].test);
	});

	it('should return undefined if the queried member does not exist', () => {
		expect(typeof fetchDot('does', testObj)).to.equal('undefined');
		expect(typeof fetchDot('does.not', testObj)).to.equal('undefined');
		expect(typeof fetchDot('does.not.exist', testObj)).to.equal('undefined');
	});

	it('should return undefined if the queried array item does not exist', () => {
		expect(typeof fetchDot('arr[5]', testObj)).to.equal('undefined');
	});

	it('should return the actual object if an empty string is passed', () => {
		expect(fetchDot('', testObj)).to.equal(testObj);
	});

	it('should return an actual array if an empty string is passed and the object is an array', () => {
		const testArr = [
			{
				name: 'test'
			}
		];

		expect(fetchDot('', testArr)).to.equal(testArr);
	});
});
