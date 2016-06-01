const grabByDotNotation = require('../index');
const { expect } = require('chai');

describe("grabByDotNotation()", () => {
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
		expect(grabByDotNotation('place', testObj), testObj.place);
		expect(grabByDotNotation('name', testObj), testObj.name);
	});

	it('should grab a more complex property value (such as a nested object)', () => {
		expect(grabByDotNotation('deeper', testObj), testObj.deeper);
		expect(grabByDotNotation('arr', testObj), testObj.arr);
	});

	it('should grab members of nested objects', () => {
		expect(grabByDotNotation('deeper.evenDeeper', testObj), testObj.deeper.evenDeeper);
		expect(grabByDotNotation('deeper.evenDeepest.soDeep.suchDeep', testObj), testObj.deeper.evenDeepest.soDeep.suchDeep);
	});

	it('should grab members of nested arrays', () => {
		expect(grabByDotNotation('arr[0]', testObj), testObj.arr[0]);
		expect(grabByDotNotation('arr[1].deep', testObj), testObj.arr[1].deep);
	});

	it('should grab members of deeply nested arrays', () => {
		expect(grabByDotNotation('inceptedArr[0][0][0].test', testObj), testObj.inceptedArr[0][0][0].test);
	});
});
