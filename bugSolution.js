```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: [ 
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}' // <-- Added to include components directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```