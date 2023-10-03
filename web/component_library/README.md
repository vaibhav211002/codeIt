This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First install the dependencies by running the following command in component_library directory

```bash
npm i
# or 
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Dark Mode Component

The Dark Mode component uses a context that wraps the entire application. Its basic functionality is to toggle the `dark` class on the document elements.

Elements with the `dark` class added in Tailwind CSS will be affected when the Dark Mode toggle button is clicked. This allows for a seamless transition between light and dark themes in your application.

### How to Use

1. Wrap your entire application with the Dark Mode context.
2. Add the `dark` class to any elements in your application that you want to be affected by Dark Mode.
3. Use the Dark Mode toggle button to switch between themes.

Enjoy coding in the dark!


