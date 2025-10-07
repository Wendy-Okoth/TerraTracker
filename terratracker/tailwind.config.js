/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🌍 TerraTracker Earthy Palette
        primary: "#4B2E2E",    // deep earthy brown (main brand)
        secondary: "#6B4423",  // rich soil tone (accents / buttons)
        accent: "#D9B382",     // warm sand / highlight
        forest: "#2F5233",     // deep green for nature / pins
        sand: "#F7F3EC",       // light background / panels
        leaf: "#7BB26A",       // mid green for success/badges
        sky: "#6EA8C8",        // informational accents
        muted: "#6B6B6B",      // muted text
        surface: "#FFFFFF",    // surface (cards, sheets)
        "dark-surface": "#0F1720", // dark mode surface
        success: "#2F7A3E",
        danger: "#CC3333",
        info: "#2B6CB0",
      },
      fontFamily: {
        // add 'poppins' as a named family, use system fallbacks
        poppins: ['"Poppins"', "ui-sans-serif", "system-ui", "Segoe UI", "Helvetica", "Arial"],
      },
      borderRadius: {
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        card: '0 6px 18px rgba(11,15,20,0.06)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}


