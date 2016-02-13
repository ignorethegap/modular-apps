import Address from './address';

describe('Address', function() {

	it('should provide fullName', function() {
		var a = new Address({ firstName: 'John', lastName: 'Doe' });
		expect(a.fullName).toEqual('John Doe');
	});
});