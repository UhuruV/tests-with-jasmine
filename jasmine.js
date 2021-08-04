var earth = {
    isRound: true,
    numberFromSun: 3,
    density: 5.51
};

var human = {
    hasLegs: true,
    eyes: 2,
    head: 1
}

describe('Person', function () {
    it('has two legs',function () {
        expect(human.hasLegs).toEqual(true)
    });

    it('has two eyes', function () {
        expect(human.eyes).toEqual(2)
    });

    it('has one head', function () {
        expect(human.head).toEqual(1)
    });
})



describe("Earth", function() {
    it("is round", function(){
        expect(earth.isRound).toEqual(true)
    });

    it("is the third from the sun", function () {
        expect(earth.numberFromSun).toEqual(3)
    });

    it("is the densest of all planets", function() {
        expect(earth.density).toBeGreaterThan(5.5)
    });
})
