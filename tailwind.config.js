/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        xxs: "380px",
        xxxs: "320px",
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(max(250px, 25%), 1fr))'
      },
      width: {
        'left-sidebar': 'var(--left-sidebar-width)',
        'right-sidebar': 'var(--right-sidebar-width)',
      },
      height: {
        'content': 'var(--content-height)',
        'playing-bar': 'var(--playing-bar-height)',
      },
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--primary))',
          foreground: 'rgb(var(--primary-foreground))',
        },
        background: {
          DEFAULT: 'rgb(var(--background))',
          elevated: 'rgb(var(--background-elevated))',
          card: 'rgb(var(--background-card))',
        },
        accent: 'rgb(var(--accent))',
        muted: 'rgb(var(--muted))',
      },
    },
  },
  plugins: [],
}

