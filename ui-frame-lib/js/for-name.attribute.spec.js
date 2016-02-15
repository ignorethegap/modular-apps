import forName from './for-name.attribute';
import helper from './test-helper';

describe('for-name', function() {

    it('should focus on input when label is clicked');

    it('should click on input when label is clicked');

    it('should be implemented', function() {
    	expect(forName).toBeDefined();
    	forName();
    });

    it('should have helper function', function() {
        expect(helper).toBeDefined();
    });
});
