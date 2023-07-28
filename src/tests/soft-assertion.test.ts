import '../core/index';

describe('test for boolean assertion', () => {
    test('be()', () => {
      const bool = true;
  
      bool.must().soft.be(false);
      bool.must().be(true);
    });
});
