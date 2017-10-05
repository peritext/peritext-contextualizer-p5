export default {
  type: 'peritext-contextualizer',
  id: 'p5',
  name: 'p5 (processing js) player',
  coverage: {
    inlineStatic: false,
    blockStatic: true,
    inlineDynamic: false,
    blockDynamic: true,
  },
  model: {
    acceptedResourceTypes: [
    {
      // type: 'codefiles'
      test: (resource) => {
        if(resource.metadata.type === 'codefiles') {
          let code = resource.data && resource.data.code;
          if (!code || Object.keys(code).length !== 1) {
            return null;
          }
          try{
            let sketch;
            if (code) {
              const finalCode = Object.keys(code).reduce(
                // joining all the code files into one
                (finalCode, key) =>
                  finalCode + code[key] + '\n'
              , '');
              eval('sketch = ' + finalCode);
              return typeof sketch === 'function';
            }
            return false;
          } catch(e) {
            return false;
          }
        }
      }
    }
    ],
    block: {
      options: [
        {
          id: 'thumbnailUrl',
          title: {
            fr: 'Vignette (pour les contextualisations statiques)',
            en: 'Thumbnail (for static contextualizations)',
          },
          type: 'imageUrl'
        },
      ]
    }
  }
}