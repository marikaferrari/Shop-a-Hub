# Shop-a-Hub

Welcome to Shop-a-Hub! This documentation will guide you through the setup and configuration of the project. Let's get started.

## Project Setup

To set up the project, follow these steps:

1. Clone the repository.
2. Run the following command to install the required packages:

```bash
npm i daisyui prisma @prisma/client next-auth @auth/prisma-adapter prettier eslint-config-prettier prettier-plugin-tailwindcss zod
```

3. Install the main extensions for your development environment:

   - Tailwind CSS IntelliSense
   - Prettier
   - ESLint
   - Prisma

## Configuration

### DaisyUI Configuration

1. Install DaisyUI as a Tailwind CSS plugin using the following links:
   - [Install DaisyUI](https://daisyui.com/docs/install/)
   - [DaisyUI Theme Generator](https://daisyui.com/theme-generator/)

2. Configure DaisyUI in your `tailwind.config.js` and `global.css` files:

```javascript
// tailwind.config.js
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        // Your theme configuration here
      },
    ],
  },
};

export default config;
```

```css
/* global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Prettier Configuration

1. Create a `prettier.config.js` file in the root folder:

```javascript
module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
};
```

2. Configure ESLint to avoid conflicts with Prettier in your `.eslintrc.json` file:

```json
{
  "extends": [
    "next/babel",
    "next/core-web-vitals",
    "prettier"
  ]
}
```

### Prisma Configuration

1. Initialize Prisma using the following command:

```bash
npx prisma init
```

2. Change the database provider in the `schema.prisma` file.

3. Look into “Prisma Studio” to manage/update your database.

### Babel/SWC Conflict Configuration

1. Set up the `next.config.js` file.

2. Create a `.babelsrc` file with the following code:

```json
{
  "presets": ["next/babel"],
  "plugins": []
}
```

3. Update the `.eslintrc.json` file:

```json
{
  "extends": [
    "next/babel",
    "next/core-web-vitals",
    "prettier"
  ]
}
```

## Database Setup with MongoDB Atlas

1. Get started with [Atlas](https://www.mongodb.com/docs/atlas/getting-started/).

2. Follow [MongoDB Data Modeling Basics](https://www.codecademy.com/article/mongo-db-data-modeling-basics).

3. Add dummy data to your MongoDB Atlas cluster.

4. Find your connection string, and insert your personal user password replacing `<password>`. Add the database name between the `/` and `?`.

## Pull data from the database using Prisma

Run the following command to pull data:

```bash
npx prisma db pull
```

Update the model by running:

```bash
npx prisma generate
```

## Styling

To style components, use Tailwind CSS along with DaisyUI for enhanced features. For example:

```jsx
// Styling a text input
<input className="input min-w-[300px]" type="text" />
```

## Server Actions and Mutations

Explore [Data Fetching: Server Actions and Mutations](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) for server-side asynchronous functions. Make sure to configure the `next.config.js` file for server actions.

## Create Reusable Button Component

Implement a reusable button component, such as the `AddToCartButton`. Check the documentation for details.

## Pages Structure

### Homepage

Fetch all products from the database using Prisma in your `pages/index.tsx` file.

### Product Card Component

Create a reusable `ProductCard` component to render individual product details.

### Convert Currency

Use the `lib/format.ts` file to implement a function for currency conversion.

### Add to Cart Button

Implement an `AddToCartButton` component for adding products to the shopping cart.

## Cookies

Refer to the documentation for minute 2:55:00 and learn how to manage cookies in your Next.js application.

## useTransition

Explore the use of `useTransition` to handle server actions and transitions in the application.

## Error Messages

### Invalid src props

Fix the Babel/SWC conflict by following the provided instructions. Remove unnecessary Babel configurations and restart your development environment.

Now, you should have a well-configured and functional Shop-a-Hub project ready for development! Happy coding!
