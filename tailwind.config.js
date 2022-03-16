const baseConfig = {
    darkMode: 'class',
    theme: {
        boxShadow: {
            sm: '0 1px 2px 0 rgba(0, 3, 15, 0.05)',
            DEFAULT:
                '0 1px 3px 0 rgba(0, 3, 15, 0.1), 0 1px 2px 0 rgba(0,3,15, 0.06)',
            md: '0 4px 6px -1px rgba(0, 3, 15, 0.1), 0 2px 4px -1px rgba(0,3,15, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 3, 15, 0.1), 0 4px 6px -2px rgba(0,3,15, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 3, 15, 0.1), 0 10px 10px -5px rgba(0,3,15, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 3, 15, 0.25)',
            '3xl': '0 35px 60px -15px rgba(0, 3, 15, 0.3)',
            inner: 'inset 0 2px 4px 0 rgba(0, 3, 15, 0.06)',
            none: 'none',
        },
        borderRadius: {
            large: '2rem'
        },
        extend: {
            fontSize: {
                'base-lg': '1.065rem',
                'sm-base': '0.935rem',
            },
            screens: {
                '2xl': { min: '1536px', max: '1936px' },
                '3xl': { min: '1936px', max: '2436px' },
                '4xl': { min: '2436px', max: '3236px' },
                '5xl': { min: '3236px' },
            },
            colors: {
                gray: {
                    25: '#F5FAFF',
                    50: '#fafcff',
                    100: '#F0F7FF',
                    150: '#E8F2FE',
                    200: '#E0ECFD',
                    250: '#CEE0F8',
                    300: '#A8C3E8',
                    350: '#95B2DD',
                    400: '#82A0CE',
                    450: '#6F8EBD',
                    500: '#5E7BAA',
                    550: '#4D6896',
                    600: '#3E5680',
                    650: '#31456A',
                    700: '#263755',
                    750: '#1C2A42',
                    800: '#0E1623',
                    850: '#090F17',
                    900: '#05090E',
                    950: '#030407',
                    1000: '#010202',
                    1100: '#141526',
                    1200: '#121317',
                    1300: '#09090c'
                },
                saasselected: '#3547ac',
                saasbg: '#f4f7ff',
                saasbgdark: '#060d2a',
                saasdisabled: '#b5b7c8',
                saasselectedBT: '#3547ac',
                saasbgmid: '#1b223d',
                saaswhite: '#ffffff',
                saastextdark: '#151517',
                skyblue: '#F5FAFF',
                blue: {
                    purple: '#5501E1',
                    'purple-2': '#0047ff',
                },
            },
            fontFamily: {
                sans: '"Work Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                mono: '"SF Mono", SFMono-Regular, ui-monospace, "DejaVu Sans Mono", Menlo, Consolas, monospace',
                lab: "'Lab Grotesque', system-ui",
                extra: ['Oswald'],
                searchbar: ['Cinzel']
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('tailwind-scrollbar'),
    ],
}

const config = {
    presets: [baseConfig],
    content: ['./index.html', './src/**/*.{vue,js,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                main: `url(@/assets/img/main-background.svg)`,
            },
            zIndex: {
                '-1': '-1',
            },
            flexGrow: {
                5: '5',
            },
            maxHeight: {
                'screen-menu': 'calc(100vh - 3.5rem)',
                modal: 'calc(100vh - 160px)',
            },
            transitionProperty: {
                position: 'right, left, top, bottom, margin, padding',
                textColor: 'color',
            },
            keyframes: {
                fadeOut: {
                    from: { opacity: '1' },
                    to: { opacity: '0' },
                },
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
            },
            animation: {
                fadeOut: 'fadeOut 250ms ease-in-out',
                fadeIn: 'fadeIn 250ms ease-in-out',
            },
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: false,
    },
}

export default config
