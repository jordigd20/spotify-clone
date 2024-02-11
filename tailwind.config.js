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
        'auto-fill': 'repeat(auto-fill, minmax(max(250px, 25%), 1fr))',
        'auto-fill-cards': 'repeat(auto-fill, minmax(max(180px, 10%), 1fr))'
      },
      width: {
        'left-sidebar': 'var(--left-sidebar-width)',
        'right-sidebar': 'var(--right-sidebar-width)',
        'playlist-image-fluid': 'var(--playlist-image-fluid)',
      },
      height: {
        'content': 'var(--content-height)',
        'playing-bar': 'var(--playing-bar-height)',
        'left-sidebar-scroll': 'var(--sidebar-scroll-height)',
        'playlist-image-fluid': 'var(--playlist-image-fluid)',
        'playlist-header-fluid': 'min(24vh, var(--playlist-header-fluid))',
        'playlist-header-fluid-lg': 'min(30vh, var(--playlist-header-fluid))',
      },
      colors: {
        primary: {
          DEFAULT: 'rgba(var(--primary), <alpha-value>)',
          foreground: 'rgba(var(--primary-foreground), <alpha-value>)',
        },
        background: {
          DEFAULT: 'rgba(var(--background), <alpha-value>)',
          elevated: 'rgba(var(--background-elevated), <alpha-value>)',
          card: 'rgba(var(--background-card), <alpha-value>)',
          tinted: 'rgba(var(--background-tinted))',
          'tinted-highlight': 'rgba(var(--background-tinted-highlight))',
        },
        accent: 'rgba(var(--accent), <alpha-value>)',
        muted: {
          DEFAULT: 'rgba(var(--muted), <alpha-value>)',
          transparent: 'rgba(var(--muted-transparent))',
        },
      },
    },
  },
  plugins: [],
}

