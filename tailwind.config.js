module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_proyectos/**/*.md',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
      extend: {},
      fontFamily: {
        'sans': ['"Work Sans"', "sans-serif"],
        // 'serif': ['ui-serif', 'Georgia', ...],
        // 'mono': ['"Space Mono"', "monospace"],
        // 'display': ['Oswald', ...],
        // 'body': ['"Open Sans"', ...],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}