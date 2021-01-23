const getProgressionquestion = () => {
    
  //Math.floor(Math.random() * (max - min + 1) + min);
  
    const initialTerm = Math.floor(Math.random() * 20 + 1);
    const commonDifference = Math.floor(Math.random() * 5 + 1);
    const numberOfTerms = Math.floor(Math.random() * 6 + 5);
    
    const hiddenTermIndex = Math.floor(Math.random() * (numberOfTerms - 4) + 5);
    let arithmeticProgression = initialTerm;
   
   console.log(initialTerm, commonDifference, numberOfTerms, hiddenTermIndex);
   
    for (let i = 1; i < numberOfTerms; i += 1) {
        let newTerm = initialTerm + (i * commonDifference);
        
        if (i === hiddenTermIndex) {
            arithmeticProgression = `${arithmeticProgression} ..`;
        } else {
            arithmeticProgression = `${arithmeticProgression} ${newTerm}`;
        };
        
    };
  return arithmeticProgression;
  };
  
  getProgressionquestion();