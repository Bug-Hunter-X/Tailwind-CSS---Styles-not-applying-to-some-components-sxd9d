```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // <-- Problem might be here
  theme: {
    extend: {},
  },
  plugins: [],
};
```