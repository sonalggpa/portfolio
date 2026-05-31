/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0f172a', /* slate-900 */
          800: '#1e293b', /* slate-800 */
          700: '#334155', /* slate-700 */
        },
        primary: {
          500: '#3b82f6', /* blue-500 */
          400: '#60a5fa', /* blue-400 */
        },
        accent: {
          500: '#10b981', /* emerald-500 for success/backend vibe */
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      }
    },
  },
  plugins: [],
}
