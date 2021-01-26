require('@babel/register')({
  presets: [
    'next/babel',
  ],
  extensions: ['.ts', '.tsx', '.js', '.jsx',
  ],
  env: {
    development: {
      sourceMaps: 'inline',
      retainLines: true,
    },
  },
});

require('./server');
