// Test an Angular value
describe('Value testing', function() {
    beforeEach(module('app'));

    it('should return current version', inject(function(version) {
        expect(version).toEqual('0.3');
    }));
});