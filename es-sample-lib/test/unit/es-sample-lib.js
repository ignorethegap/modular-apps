import esSampleLib from '../../src/es-sample-lib';

describe('esSampleLib', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(esSampleLib, 'greet');
      esSampleLib.greet();
    });

    it('should have been run once', () => {
      expect(esSampleLib.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(esSampleLib.greet).to.have.always.returned('hello');
    });
  });
});
