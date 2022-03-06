// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(organismNum, DNAarray) {
  return {
    __specimenNum: organismNum,
    __dna: DNAarray,

    mutate() {
      //selecting a random bp
      let ogBpIndex = DNAarray[Math.floor(Math.random() * this.__dna.length)];
      let ogBp = this.__dna[ogBpIndex];

      let altBps = ['A', 'T', 'G', 'C'];
      altBps.splice(altBps.indexOf(ogBp), 1) //find and removes targeted(og) bp
      let newBP = altBps[Math.floor(Math.random() * 3)]; //selectes 
      
      console.log(`Changed ${ogBp} to ${newBP} at index ${ogBpIndex}`);
      return this.__dna.splice(ogBpIndex, 1, newBP);
      //return ogBP;
    },

    compareDNA(pAequor) {
      let count = 0;
      for (let i=0; i < this.__dna.length; i++) {
        if (this.__dna[i] === pAequor[i]) {
          count += 1;
        }
      }
      console.log(`Specimen ${this.__specimenNum} and Specimen ${this.pAequor} have ${(count/this.__dna.length) * 100}% DNA in common`);

    },

    willLikelySurvive() {
      const countGandC = this.__dna.filter(base => base === 'G' || base === 'C');
           
      if (countGandC.length/this.__dna.length >= 0.6) {
        return true;
      } else {
        return false;
      }
    }
  }
}

  // 30 instances
let sample = [];
let i = 0;
while (sample.length < 30) {
  let temp = pAequorFactory(i, mockUpStrand());
  if (temp.willLikelySurvive() == true) {
    sample.push(temp);
    i += 1
  } 
}




