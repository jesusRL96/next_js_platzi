## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## npm installs
```bash
# EsLint, Prettier - files (.eslintrc.js, prettier.config.js)
npm i eslint-config-prettier eslint-plugin-jsx-a11y eslint-plugin-prettier prettier -D
# PostCSS, Tailwind
npm i tailwindcss postcss autoprefixer
# add tailwind config files
npx tailwindcss init -p
```

## package.json
```js
// Scripts
"lint:fix": "eslint src/ --fix"
```

## config files
```js
// prettrier.config.js
module.exports = {
  semi: true,
  singleQuote: true,
  printWidth: 200,
  tabWidth: 2,
  trailingComma: 'es5',
  bracketSpacing: true,
};
// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "next",
    "next/core-web-vitals",
  ],
  rules: {
    semi: ["error", "always"],
  },
};
// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*{html,js}'],
  content: [],
  theme: {
    colors: {
      ...colors,
    },
    extend: {},
  },
  plugins: [],
};
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
// jsconfig.json
{
    "compilerOptions": {
        "baseUrl": "src",
        "paths": {
            "@styles/*": [
                "styles/*"
            ],
        }
    }
}
```

```css
/*tailwind.css*/
@tailwind base;
@tailwind component;
@tailwind utilities;
```