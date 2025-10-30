// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            keyframes: {
                twinkle: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.3' }
                }
            },
            animation: {
                twinkle: 'twinkle var(--duration) ease-in-out infinite'
            }
        }
    }
}