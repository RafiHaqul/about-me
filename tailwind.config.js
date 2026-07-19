/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // "graph paper" base — cool off-white, not the generic warm cream
        paper: '#F5F7F6',
        panel: '#FFFFFF',
        ink: '#14181B',
        muted: '#5B6572',
        line: '#DADFE3',
        // annotation-blue: the color CV tools draw bounding boxes in
        box: '#3452FF',
        'box-soft': '#EAEEFF',
        // amber "confidence score" accent, used sparingly
        signal: '#F4B740',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
