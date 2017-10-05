import React from 'react';
let P5Wrapper;
const isBrowser=new Function("try {return this===window;}catch(e){ return false;}");
const inBrowser = isBrowser();
if (inBrowser) {
  P5Wrapper = require('react-p5-wrapper');
}

export default ({
  resource: {
    data: {
      code
    }
  },
  // contextualizer,
  // contextualization,
}) => {
    if (!code || Object.keys(code).length !== 1 || !inBrowser) {
      return null;
    }
    let sketch;
    const finalCode = Object.keys(code).reduce(
          // joining all the code files into one
          (finalCode, key) =>
            finalCode + code[key] + '\n'
        , '');
    try{
      eval('sketch = ' + finalCode);
      return (
        <figure
          className="peritext-contextualization peritext-contextualization-block peritext-contextualization-web peritext-contextualizer-p5"
        >
          <P5Wrapper sketch={sketch} />
        </figure>
      );
    } catch(e) {
      console.log('error', e);
      return (
        <figure
          className="peritext-contextualization peritext-contextualization-block peritext-contextualization-web peritext-contextualizer-p5"
        >
          ☠
        </figure>
      )
    }
}