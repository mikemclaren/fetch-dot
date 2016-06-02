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
		expect(fetchDot('place', testObj), testObj.place);
		expect(fetchDot('name', testObj), testObj.name);
	});

	it('should grab a more complex property value (such as a nested object)', () => {
		expect(fetchDot('deeper', testObj), testObj.deeper);
		expect(fetchDot('arr', testObj), testObj.arr);
	});

	it('should grab members of nested objects', () => {
		expect(fetchDot('deeper.evenDeeper', testObj), testObj.deeper.evenDeeper);
		expect(fetchDot('deeper.evenDeepest.soDeep.suchDeep', testObj), testObj.deeper.evenDeepest.soDeep.suchDeep);
	});

	it('should grab members of nested arrays', () => {
		expect(fetchDot('arr[0]', testObj), testObj.arr[0]);
		expect(fetchDot('arr[1].deep', testObj), testObj.arr[1].deep);
	});

	it('should grab members of deeply nested arrays', () => {
		expect(fetchDot('inceptedArr[0][0][0].test', testObj), testObj.inceptedArr[0][0][0].test);
	});

	it('should return undefined if the queried member does not exist', () => {
		expect(typeof fetchDot('does', testObj), 'undefined');
		expect(typeof fetchDot('does.not', testObj), 'undefined');
		expect(typeof fetchDot('does.not.exist', testObj), 'undefined');
	});

	it('should return undefined if the queried array item does not exist', () => {
		expect(typeof fetchDot('arr[5]', testObj), 'undefined');
	});
});
