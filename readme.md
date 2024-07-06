## Why Next.JS: 
* If we check [React's official documentation](https://react.dev/learn/start-a-new-react-project), we will notice that the getting started does not use create-react-app
* Next.JS is a React framework that help us with real issues when using React in real products
* Without any frameworks for React we face the following problems:
    - Code has to be bundled using a bundler like webpack and transformed using a compiler like Babel.
    - You need to do production optimizations such as code splitting.
    - You might want to statically pre-render some pages for performance and SEO. You might also want to use server-side rendering or client-side rendering.
    - You might have to write some server-side code to connect your React app to your data store.

## [Main Next.JS benefits](https://nextjs.org/docs#main-features): 

- **Routing**:	A file-system based router built on top of Server Components that supports layouts, nested routing, loading states, error handling, and more.
- **Rendering**: Client-side and Server-side Rendering with Client and Server Components. Further optimized with Static and Dynamic Rendering on the server with Next.js. Streaming on Edge and Node.js runtimes.
- **Data Fetching**: Simplified data fetching with async/await in Server Components, and an extended fetch API for request memoization, data caching and revalidation.
Styling	Support for your preferred styling methods, including CSS Modules, Tailwind CSS, and CSS-in-JS
- **Optimizations**: Image, Fonts, and Script Optimizations to improve your application's Core Web Vitals and User Experience.
    - Disable javascript and check how this [create-react-app](https://create-react-template.vercel.app/) page will behave.
    - Disable javascript and check how this [next.js](https://next-learn-starter.vercel.app/) page will behave.
- **TypeScript**: Improved support for TypeScript, with better type checking and more efficient compilation, as well as custom TypeScript Plugin and type checker.