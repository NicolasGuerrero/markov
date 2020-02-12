const markov = require('./markov');
const testString = 'It was the best of times it was the worst of times';
let testMarkov = new markov.MarkovMachine(testString);

//makeChains output: get all the keys, is every word in the testString contained in the keys array?
//are all of makeChains values arrays?
//does only ONE of makeChains properties have the value of null?
//is the first word in the makeTest output contained in testString?
//does makeText stop before numWords limit is reached?
//does makeText output NOT contain null?

//is testMarkov.words an array?
test('testMarkov.words is an array', function() {
    let words = testMarkov.words;
    expect(words).toEqual(expect.any(Array));
});

//is testMarkov.words an array of strings?
test('testMarkov.words is an array of strings', function() {
    let words = testMarkov.words;
    expect(words).toEqual(expect.any(Array));

    // describe('my beverage', () => {
    //     test('is delicious and not sour', () => {
    //       const myBeverage = {delicious: true, sour: false};
    //       expect(myBeverages()).toContainEqual(myBeverage);
    //     });
    //   });
});

//does makeChains output an object?
test('testMarkov.words is an array', function() {
    let chains = testMarkov.makeChains();
    expect(chains).toEqual(expect.any(Object));
});

//is makeText output a string?
test('makeText output is a string', function() {
    let output = testMarkov.makeText();
    expect(output).toEqual(expect.any(String));
});

//is the length at least one character long?
test('makeText output is at least one character long', function() {
    let output = testMarkov.makeText();
    expect(output.length).toBeGreaterThan(1);
});