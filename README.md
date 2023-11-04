<!-- @format -->

markdown

## Breach express Website

Welcome to Breach built using Next.js, Tailwind CSS, React-Query and Axios.

## Live Demo

Check out the live demo of the website:

## Technologies Used

```bash
Next.js: Next.js is a powerful React framework that allows for server-side rendering and easy creation of fast and scalable web applications.

Tailwind CSS: Tailwind CSS is a utility-first CSS framework that helps in rapid UI development. It provides a set of utility classes that allow for easy styling and customization.

React Query: React Query has an impressive list of features (which helps to minimize resource consumption):
-caching;
-deduping multiple requests for the same data into a single request;
-performance optimizations like pagination and lazy loading data;
-memoizing query results;

Notiflix: An alert toast library for error handling and alert notifications.

Formik and yup: Form validation and error handling.

React-use-websocket: websocket connection.

Zustand: Small, fast, and scalable bearbones state management solution.

Axios: A simple library for API calls and integration.

PS: All of these technologies are lightweight.
```

## Getting Started

Follow the steps below to set up the project on your local machine:

1. Clone the repository:

```bash
git clone https://github.com/castelstack/breach.git

cd project
```

2. Install dependencies:

```bash
yarn install
```

1. Set environment variables:

Create a .env.local file in the root of the project and add the following:

```bash
NEXT_PUBLIC_WS_URL="your_ws_url"
```

1. Run the development server:

```bash
yarn dev
```

Open your browser and navigate to http://localhost:3000 to see the breach website.

Project Structure

```bash
|-- src/
|  |-- app/
|   |-- pages.tsx
|   |-- ...tsx
|   |-- assets/
       |-- images
       |-- svgs
       |-- ...tsx
    |-- components/
       |-- Button.tsx
       |-- Header.tsx
       |-- Footer.tsx
       |-- ...tsx
    |-- containers/
       |-- Hero.tsx
       |-- Posts.tsx
       |-- ...tsx
    |-- hooks/
       |-- ...tsx
    |-- services/
       |-- ...tsx
    |-- store/
       |-- ...tsx
|-- public/
|   |-- images/
|-- styles/
|   |-- globals.css
|-- types/
|   |-- index.ts
...
```

## Contributions

Contributions are welcome! If you find any bugs or have suggestions for improvement, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License.

Thank you for checking out Breach project! If you have any questions or feedback, contact me.

Happy coding! 🚀
