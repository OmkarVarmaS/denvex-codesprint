/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#03020c",
          darker: "#010105",
          card: "rgba(10, 8, 28, 0.55)",
          cardHover: "rgba(16, 13, 44, 0.7)",
          border: "rgba(147, 51, 234, 0.15)",
          borderHover: "rgba(147, 51, 234, 0.35)",
          purple: {
            light: "#c084fc",
            DEFAULT: "#a855f7",
            dark: "#7e22ce",
          },
          blue: {
            light: "#22d3ee",
            DEFAULT: "#06b6d4",
            dark: "#0891b2",
          }
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'neon-purple': '0 0 15px rgba(168, 85, 247, 0.3)',
        'neon-blue': '0 0 15px rgba(34, 211, 238, 0.3)',
        'neon-glow': '0 0 25px rgba(168, 85, 247, 0.2), 0 0 50px rgba(34, 211, 238, 0.15)',
        'card-glow': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
