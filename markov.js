/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    
    let chains = {}
    
    for (let i = 0; i < this.words.length; i++) {
      let word = this.words[i];
      let nextWord = this.words[i + 1]
      let val = nextWord === undefined ? null : nextWord;
      if (chains[word] === undefined) {
        chains[word] = [];
        chains[word].push(val);
      } else {
        chains[word].push(val);
      }
    }
    return chains;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    let word = this.randomWord(this.words);
    let text = word;

    for (let i = 0; i < numWords; i++) {
      
      word = this.randomWord(this.makeChains()[word]);
      if (word === null) {
        break;
      } 
      text += " " + word;
    }
    return text;
  }
  randomWord(words) {
    let randomWord = words[Math.floor(Math.random() * Math.floor(words.length))];
    return randomWord;
  }
}

module.exports = {
  MarkovMachine: MarkovMachine
}