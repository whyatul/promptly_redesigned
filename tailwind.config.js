/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        anthropic: {
          purple: "#5436DA",
          lightPurple: "#7A67EE",
          lilac: "#A594FD",
          gray: "#1D1A23",
          lightGray: "#F4F3F7"
        },
        brand: {
          purple: "#6D28D9",
          indigo: "#4F46E5",
          blue: "#3B82F6",
          teal: "#14B8A6",
          emerald: "#10B981",
          pink: "#EC4899",
          amber: "#F59E0B",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 0.25rem)",
        sm: "calc(var(--radius) - 0.5rem)",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        'anthropic': '0 10px 20px rgba(120, 103, 238, 0.1)',
        'anthropic-md': '0 15px 30px rgba(120, 103, 238, 0.15)',
        'glow': '0 0 20px rgba(79, 70, 229, 0.15)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 40px -5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05)',
        'button': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1)',
        'button-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dots': 'url("/dots-pattern.svg")',
        'noise': 'url("/noise.png")',
        'mesh-1': 'radial-gradient(at 40% 20%, hsla(253, 90%, 54%, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(278, 95%, 44%, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(225, 95%, 54%, 0.1) 0px, transparent 50%)',
        'mesh-2': 'radial-gradient(at 10% 90%, hsla(253, 90%, 54%, 0.1) 0px, transparent 50%), radial-gradient(at 90% 80%, hsla(178, 95%, 44%, 0.1) 0px, transparent 50%), radial-gradient(at 80% 10%, hsla(325, 95%, 64%, 0.1) 0px, transparent 50%)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(20px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-20px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.8 },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "subtle-float": {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-5px) rotate(0.5deg)" },
          "50%": { transform: "translateY(-8px) rotate(0deg)" },
          "75%": { transform: "translateY(-4px) rotate(-0.5deg)" },
          "100%": { transform: "translateY(0) rotate(0deg)" },
        },
        "subtle-pulse": {
          "0%": { opacity: 0.7, transform: "scale(1)" },
          "50%": { opacity: 0.9, transform: "scale(1.02)" },
          "100%": { opacity: 0.7, transform: "scale(1)" },
        },
        "subtle-fade-in": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "float-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-3px)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        "blur-in": {
          "0%": { filter: "blur(5px)", opacity: 0 },
          "100%": { filter: "blur(0)", opacity: 1 },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        'scroll-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // Scroll by half the total width (original + duplicate)
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "pulse-soft": "pulse-soft 2s infinite ease-in-out",
        "float": "float 4s cubic-bezier(0.45, 0, 0.55, 1) infinite",
        "subtle-float": "subtle-float 12s cubic-bezier(0.45, 0, 0.55, 1) infinite",
        "subtle-pulse": "subtle-pulse 8s cubic-bezier(0.45, 0, 0.55, 1) infinite",
        "subtle-fade-in": "subtle-fade-in 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
        "spin-slow": "spin-slow 20s linear infinite",
        "float-subtle": "float-subtle 3s ease-in-out infinite",
        "scale-in": "scale-in 0.4s ease-out forwards",
        "blur-in": "blur-in 0.4s ease-out forwards",
        "gradient-shift": "gradient-shift 8s cubic-bezier(0.45, 0, 0.55, 1) infinite",
        'scroll-x-infinite': 'scroll-x 60s linear infinite', // Adjust duration (60s) as needed
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'), // Ensure scrollbar-hide plugin is present
  ],
}
