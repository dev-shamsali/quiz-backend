// 150 Questions: 75 Easy | 60 Moderate | 15 Hard
// Categories: React.js, Next.js, Node.js, Express.js, MongoDB, Authentication & Security, Problem Solving, Debugging

const questions = [

  // ============================================================
  // EASY QUESTIONS (75)
  // ============================================================

  // --- React.js Easy (10) ---
  {
    question: "What hook do you use to manage local state in a React functional component?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correctAnswer: "useState",
    explanation: "useState is the primary hook for managing local component state. It returns a state variable and a setter function.",
    difficulty: "easy", category: "React.js", technology: "React", type: "mcq",
    tags: ["hooks", "state"], estimatedTime: 30,
    realWorldUseCase: "Managing form input values, toggle states, or counters in components."
  },
  {
    question: "What does the useEffect hook do when its dependency array is empty []?",
    options: ["Runs on every render", "Runs only once after the initial render", "Never runs", "Runs before render"],
    correctAnswer: "Runs only once after the initial render",
    explanation: "An empty dependency array tells React to run the effect only once after the first render, similar to componentDidMount.",
    difficulty: "easy", category: "React.js", technology: "React", type: "mcq",
    tags: ["hooks", "useEffect"], estimatedTime: 30,
    realWorldUseCase: "Fetching initial data from an API when a component mounts."
  },
  {
    question: "What is JSX in React?",
    options: ["A CSS preprocessor", "A syntax extension that looks like HTML in JavaScript", "A state management library", "A testing framework"],
    correctAnswer: "A syntax extension that looks like HTML in JavaScript",
    explanation: "JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code in your JS files. Babel transforms it to React.createElement() calls.",
    difficulty: "easy", category: "React.js", technology: "React", type: "mcq",
    tags: ["jsx", "basics"], estimatedTime: 25,
    realWorldUseCase: "Writing component templates that are readable and maintainable."
  },
  {
    question: "Which React hook is used to perform side effects like API calls?",
    options: ["useState", "useContext", "useEffect", "useMemo"],
    correctAnswer: "useEffect",
    explanation: "useEffect handles side effects such as data fetching, subscriptions, and DOM manipulation.",
    difficulty: "easy", category: "React.js", technology: "React", type: "mcq",
    tags: ["hooks", "side-effects"], estimatedTime: 25,
    realWorldUseCase: "Fetching user data when a component mounts or when a userId prop changes."
  },
  {
    question: "What does the key prop do in a React list?",
    options: ["Styles list items", "Helps React identify which items have changed, added, or removed", "Sets the list order", "Defines list item click handlers"],
    correctAnswer: "Helps React identify which items have changed, added, or removed",
    explanation: "The key prop is a unique identifier that React uses during reconciliation to efficiently update the DOM.",
    difficulty: "easy", category: "React.js", technology: "React", type: "mcq",
    tags: ["lists", "reconciliation"], estimatedTime: 30,
    realWorldUseCase: "Rendering dynamic lists from database data."
  },
  {
    question: "How do you pass data from a parent component to a child component in React?",
    options: ["Via state", "Via props", "Via context only", "Via refs"],
    correctAnswer: "Via props",
    explanation: "Props (properties) are the primary way to pass data from parent to child components in React.",
    difficulty: "easy", category: "React.js", technology: "React", type: "mcq",
    tags: ["props", "components"], estimatedTime: 20,
    realWorldUseCase: "Passing user data or configuration to reusable UI components."
  },
  {
    question: "What is the correct way to conditionally render a component in React?",
    options: ["Using if-else in JSX directly", "Using ternary operators or && in JSX", "Using switch statements only", "Using CSS display property only"],
    correctAnswer: "Using ternary operators or && in JSX",
    explanation: "JSX supports ternary operators (condition ? A : B) and short-circuit evaluation (condition && <Component />) for conditional rendering.",
    difficulty: "easy", category: "React.js", technology: "React", type: "mcq",
    tags: ["conditional-rendering", "jsx"], estimatedTime: 30,
    realWorldUseCase: "Showing loading spinners, error messages, or different UI based on auth state."
  },
  {
    question: "What is a React component's 'state'?",
    options: ["External configuration", "Data that can change over time and triggers re-renders when updated", "A CSS class", "A server-side variable"],
    correctAnswer: "Data that can change over time and triggers re-renders when updated",
    explanation: "State is component-specific data that React tracks. When state changes, React re-renders the component to reflect the new data.",
    difficulty: "easy", category: "React.js", technology: "React", type: "mcq",
    tags: ["state", "basics"], estimatedTime: 25,
    realWorldUseCase: "Tracking a user's typed input or a toggle button's on/off status."
  },
  {
    question: "Which method is used to update state in a React class component?",
    options: ["this.state = newValue", "this.setState()", "useState()", "this.updateState()"],
    correctAnswer: "this.setState()",
    explanation: "In class components, setState() is the correct way to update state. Direct assignment (this.state = ...) bypasses React's update mechanism.",
    difficulty: "easy", category: "React.js", technology: "React", type: "mcq",
    tags: ["class-components", "state"], estimatedTime: 25,
    realWorldUseCase: "Legacy class-based React applications."
  },
  {
    question: "What does React.Fragment do?",
    options: ["Creates a new DOM element", "Lets you group multiple elements without adding extra DOM nodes", "Splits the component into chunks", "Creates a portal"],
    correctAnswer: "Lets you group multiple elements without adding extra DOM nodes",
    explanation: "React.Fragment (or shorthand <>) wraps multiple children without creating an extra DOM element, keeping the DOM clean.",
    difficulty: "easy", category: "React.js", technology: "React", type: "mcq",
    tags: ["fragment", "dom"], estimatedTime: 25,
    realWorldUseCase: "Returning multiple table rows or list items from a component."
  },

  // --- Next.js Easy (10) ---
  {
    question: "What is the difference between getStaticProps and getServerSideProps in Next.js?",
    options: ["There is no difference", "getStaticProps runs at build time, getServerSideProps runs on every request", "getServerSideProps runs at build time, getStaticProps runs on every request", "Both run on every request"],
    correctAnswer: "getStaticProps runs at build time, getServerSideProps runs on every request",
    explanation: "getStaticProps pre-renders pages at build time (SSG), while getServerSideProps fetches data on every incoming request (SSR).",
    difficulty: "easy", category: "Next.js", technology: "Next.js", type: "mcq",
    tags: ["SSG", "SSR", "data-fetching"], estimatedTime: 40,
    realWorldUseCase: "Blog posts use SSG; user dashboards use SSR for real-time data."
  },
  {
    question: "How does file-based routing work in Next.js?",
    options: ["Routes are defined in a single routes.js file", "Files in the pages/ or app/ directory automatically become routes", "Routes are configured in next.config.js", "You must use React Router"],
    correctAnswer: "Files in the pages/ or app/ directory automatically become routes",
    explanation: "Next.js uses the file system for routing. A file at pages/about.js becomes accessible at /about automatically.",
    difficulty: "easy", category: "Next.js", technology: "Next.js", type: "mcq",
    tags: ["routing", "file-system"], estimatedTime: 30,
    realWorldUseCase: "Quickly creating new pages without manual route configuration."
  },
  {
    question: "What is the purpose of the _app.js file in Next.js?",
    options: ["It defines API routes", "It wraps all pages and is used for global layout, providers, and CSS", "It configures the build process", "It handles authentication only"],
    correctAnswer: "It wraps all pages and is used for global layout, providers, and CSS",
    explanation: "_app.js is the custom App component that wraps every page. It's used to add global styles, layouts, and Redux/Context providers.",
    difficulty: "easy", category: "Next.js", technology: "Next.js", type: "mcq",
    tags: ["_app", "layout"], estimatedTime: 30,
    realWorldUseCase: "Wrapping the app with a Redux Provider or global Navbar component."
  },
  {
    question: "How do you create a dynamic route in Next.js?",
    options: ["By using a route() function", "By using square brackets in the filename like [id].js", "By adding a dynamic key in next.config.js", "By using React Router's Route component"],
    correctAnswer: "By using square brackets in the filename like [id].js",
    explanation: "In Next.js, wrapping a file name in square brackets creates a dynamic route. pages/posts/[id].js matches /posts/1, /posts/2, etc.",
    difficulty: "easy", category: "Next.js", technology: "Next.js", type: "mcq",
    tags: ["dynamic-routes"], estimatedTime: 30,
    realWorldUseCase: "Creating individual product pages or user profile pages."
  },
  {
    question: "What does Next.js Image component provide over a regular HTML img tag?",
    options: ["Nothing different", "Automatic optimization, lazy loading, and responsive sizing", "Only lazy loading", "Only WebP conversion"],
    correctAnswer: "Automatic optimization, lazy loading, and responsive sizing",
    explanation: "The Next.js Image component automatically optimizes images: lazy loading, resizing, WebP conversion, and preventing layout shift (CLS).",
    difficulty: "easy", category: "Next.js", technology: "Next.js", type: "mcq",
    tags: ["image-optimization", "performance"], estimatedTime: 30,
    realWorldUseCase: "Displaying product images or hero banners with optimal performance."
  },
  {
    question: "How do you access URL query parameters in a Next.js page component?",
    options: ["window.location.search", "req.query (server-side) or useRouter().query (client-side)", "getQueryParams()", "props.params"],
    correctAnswer: "req.query (server-side) or useRouter().query (client-side)",
    explanation: "On the client, useRouter() from 'next/router' gives access to query params. On the server (in getServerSideProps), req.query is available.",
    difficulty: "easy", category: "Next.js", technology: "Next.js", type: "mcq",
    tags: ["routing", "query-params"], estimatedTime: 35,
    realWorldUseCase: "Implementing search pages or pagination with URL query strings."
  },
  {
    question: "Where do you place API routes in a Next.js project (pages directory)?",
    options: ["In /api folder at the root", "In pages/api/ directory", "In /server folder", "In /routes folder"],
    correctAnswer: "In pages/api/ directory",
    explanation: "Next.js API routes are placed in pages/api/. Any file there becomes an API endpoint. pages/api/users.js becomes /api/users.",
    difficulty: "easy", category: "Next.js", technology: "Next.js", type: "mcq",
    tags: ["api-routes"], estimatedTime: 25,
    realWorldUseCase: "Building a lightweight backend alongside your Next.js frontend."
  },
  {
    question: "What is ISR (Incremental Static Regeneration) in Next.js?",
    options: ["A way to update static pages after build without rebuilding the entire site", "A CSS optimization technique", "Server-side rendering for every request", "A caching strategy for API calls"],
    correctAnswer: "A way to update static pages after build without rebuilding the entire site",
    explanation: "ISR lets you update static pages in the background after a specified revalidation time, combining the benefits of SSG and SSR.",
    difficulty: "easy", category: "Next.js", technology: "Next.js", type: "mcq",
    tags: ["ISR", "SSG"], estimatedTime: 40,
    realWorldUseCase: "E-commerce product pages that need to update prices periodically."
  },
  {
    question: "What is the purpose of next/link in Next.js?",
    options: ["To style anchor tags", "To enable client-side navigation between pages without full page reload", "To fetch remote data", "To handle authentication redirects"],
    correctAnswer: "To enable client-side navigation between pages without full page reload",
    explanation: "next/link provides client-side transitions between routes, enabling faster navigation by prefetching pages and avoiding full reloads.",
    difficulty: "easy", category: "Next.js", technology: "Next.js", type: "mcq",
    tags: ["navigation", "Link"], estimatedTime: 25,
    realWorldUseCase: "Navigation menus and internal links throughout the application."
  },
  {
    question: "In Next.js 13+ App Router, what is the default rendering behavior of components?",
    options: ["All components are client components by default", "All components are server components by default", "Components are determined by the file extension", "All components require explicit rendering declaration"],
    correctAnswer: "All components are server components by default",
    explanation: "In the Next.js App Router, components are Server Components by default. You must add 'use client' directive to opt into client-side rendering.",
    difficulty: "easy", category: "Next.js", technology: "Next.js", type: "mcq",
    tags: ["app-router", "server-components"], estimatedTime: 35,
    realWorldUseCase: "Fetching database data directly in page components without API routes."
  },

  // --- Node.js Easy (10) ---
  {
    question: "What is the Node.js event loop?",
    options: ["A loop that processes UI events", "A mechanism that allows Node.js to perform non-blocking I/O operations despite being single-threaded", "A loop for iterating arrays", "A database query loop"],
    correctAnswer: "A mechanism that allows Node.js to perform non-blocking I/O operations despite being single-threaded",
    explanation: "The event loop allows Node.js to handle multiple operations concurrently by offloading I/O to the OS and processing callbacks when ready.",
    difficulty: "easy", category: "Node.js", technology: "Node.js", type: "mcq",
    tags: ["event-loop", "async"], estimatedTime: 40,
    realWorldUseCase: "Handling thousands of concurrent HTTP requests in a web server."
  },
  {
    question: "What does require() do in Node.js?",
    options: ["Installs a package", "Imports a module or file into the current file", "Creates a new module", "Exports functions from a file"],
    correctAnswer: "Imports a module or file into the current file",
    explanation: "require() is Node.js's module system for importing built-in modules, npm packages, or local files. It's synchronous and returns the module's exports.",
    difficulty: "easy", category: "Node.js", technology: "Node.js", type: "mcq",
    tags: ["modules", "require"], estimatedTime: 25,
    realWorldUseCase: "Importing Express, database clients, or utility functions."
  },
  {
    question: "What is module.exports in Node.js?",
    options: ["A way to install packages", "The object that is returned when another file requires the module", "A built-in database", "An async function wrapper"],
    correctAnswer: "The object that is returned when another file requires the module",
    explanation: "module.exports defines what a module exposes to files that require it. You assign functions, objects, or classes to it.",
    difficulty: "easy", category: "Node.js", technology: "Node.js", type: "mcq",
    tags: ["modules", "exports"], estimatedTime: 25,
    realWorldUseCase: "Exporting controller functions from controller files."
  },
  {
    question: "What is process.env in Node.js?",
    options: ["A way to run child processes", "An object containing environment variables", "A package manager command", "A Node.js version manager"],
    correctAnswer: "An object containing environment variables",
    explanation: "process.env provides access to environment variables set in the OS or .env files (via dotenv). Used to store sensitive config like API keys.",
    difficulty: "easy", category: "Node.js", technology: "Node.js", type: "mcq",
    tags: ["environment", "config"], estimatedTime: 25,
    realWorldUseCase: "Accessing database connection strings and API keys without hardcoding them."
  },
  {
    question: "What is npm in Node.js ecosystem?",
    options: ["Node Process Manager", "Node Package Manager â€” used to install and manage dependencies", "A testing framework", "A deployment tool"],
    correctAnswer: "Node Package Manager â€” used to install and manage dependencies",
    explanation: "npm is the default package manager for Node.js. It manages project dependencies listed in package.json.",
    difficulty: "easy", category: "Node.js", technology: "Node.js", type: "mcq",
    tags: ["npm", "packages"], estimatedTime: 20,
    realWorldUseCase: "Installing Express, Mongoose, and other libraries for your project."
  },
  {
    question: "What does the fs module in Node.js do?",
    options: ["Manages frontend styles", "Provides file system operations like reading and writing files", "Handles HTTP requests", "Manages database connections"],
    correctAnswer: "Provides file system operations like reading and writing files",
    explanation: "The built-in 'fs' module provides APIs for interacting with the file system: reading, writing, updating, and deleting files.",
    difficulty: "easy", category: "Node.js", technology: "Node.js", type: "mcq",
    tags: ["fs", "file-system"], estimatedTime: 25,
    realWorldUseCase: "Reading configuration files or writing logs to disk."
  },
  {
    question: "What is the purpose of package.json in a Node.js project?",
    options: ["It stores JSON data for the database", "It defines project metadata, dependencies, and scripts", "It configures the web server", "It stores environment variables"],
    correctAnswer: "It defines project metadata, dependencies, and scripts",
    explanation: "package.json is the manifest file for Node.js projects. It lists dependencies, devDependencies, scripts, and project metadata.",
    difficulty: "easy", category: "Node.js", technology: "Node.js", type: "mcq",
    tags: ["npm", "configuration"], estimatedTime: 20,
    realWorldUseCase: "Running 'npm start' to start the server or 'npm test' to run tests."
  },
  {
    question: "What is async/await in Node.js?",
    options: ["A way to write synchronous code only", "Syntactic sugar over Promises that makes async code look synchronous", "A built-in database driver", "A type of HTTP request"],
    correctAnswer: "Syntactic sugar over Promises that makes async code look synchronous",
    explanation: "async/await makes Promise-based code cleaner and more readable. An async function always returns a Promise; await pauses execution until the Promise resolves.",
    difficulty: "easy", category: "Node.js", technology: "Node.js", type: "mcq",
    tags: ["async-await", "promises"], estimatedTime: 35,
    realWorldUseCase: "Writing database queries without callback hell."
  },
  {
    question: "What is a callback function in Node.js?",
    options: ["A function that returns a promise", "A function passed as an argument to another function, called after an operation completes", "A function that only runs on the server", "A React lifecycle method"],
    correctAnswer: "A function passed as an argument to another function, called after an operation completes",
    explanation: "Callbacks are the foundation of Node.js's async model. They're functions executed after an asynchronous operation finishes.",
    difficulty: "easy", category: "Node.js", technology: "Node.js", type: "mcq",
    tags: ["callbacks", "async"], estimatedTime: 30,
    realWorldUseCase: "Reading a file and processing its contents after reading completes."
  },
  {
    question: "Which HTTP method is typically used to retrieve data from a server?",
    options: ["POST", "GET", "DELETE", "PATCH"],
    correctAnswer: "GET",
    explanation: "GET requests retrieve data from the server without modifying it. They are idempotent â€” multiple identical requests have the same effect.",
    difficulty: "easy", category: "Node.js", technology: "Node.js", type: "mcq",
    tags: ["HTTP", "REST"], estimatedTime: 20,
    realWorldUseCase: "Fetching a list of users or a single product from an API."
  },

  // --- Express.js Easy (10) ---
  {
    question: "What is middleware in Express.js?",
    options: ["A database connection layer", "Functions that execute during the request-response cycle and have access to req and res", "A frontend rendering engine", "A caching system"],
    correctAnswer: "Functions that execute during the request-response cycle and have access to req and res",
    explanation: "Middleware functions receive req, res, and next. They can modify the request, send responses, or pass control to the next middleware using next().",
    difficulty: "easy", category: "Express.js", technology: "Express.js", type: "mcq",
    tags: ["middleware"], estimatedTime: 35,
    realWorldUseCase: "Authentication checks, request logging, and input validation."
  },
  {
    question: "How do you define a GET route in Express.js?",
    options: ["app.get('/path', handler)", "app.route('/path', 'GET', handler)", "app.request('/path', handler)", "router.defineGet('/path', handler)"],
    correctAnswer: "app.get('/path', handler)",
    explanation: "Express uses app.get(), app.post(), app.put(), app.delete() etc. to define route handlers for specific HTTP methods.",
    difficulty: "easy", category: "Express.js", technology: "Express.js", type: "mcq",
    tags: ["routes", "GET"], estimatedTime: 25,
    realWorldUseCase: "Defining an endpoint that returns a list of students."
  },
  {
    question: "What does app.use() do in Express.js?",
    options: ["Defines only GET routes", "Mounts middleware or a router for all HTTP methods on a specified path", "Starts the server", "Connects to the database"],
    correctAnswer: "Mounts middleware or a router for all HTTP methods on a specified path",
    explanation: "app.use() mounts middleware functions globally or for a specific path. It handles all HTTP methods, unlike app.get() or app.post().",
    difficulty: "easy", category: "Express.js", technology: "Express.js", type: "mcq",
    tags: ["middleware", "app.use"], estimatedTime: 30,
    realWorldUseCase: "Adding body parser, CORS, or Helmet security middleware globally."
  },
  {
    question: "How do you access route parameters (e.g., /users/:id) in Express?",
    options: ["req.body.id", "req.params.id", "req.query.id", "req.headers.id"],
    correctAnswer: "req.params.id",
    explanation: "req.params contains named route parameters. For a route /users/:id, accessing /users/123 gives req.params.id === '123'.",
    difficulty: "easy", category: "Express.js", technology: "Express.js", type: "mcq",
    tags: ["params", "routing"], estimatedTime: 25,
    realWorldUseCase: "Getting a specific user by ID from the database."
  },
  {
    question: "What is the purpose of res.json() in Express?",
    options: ["Reads JSON from request body", "Sends a JSON response to the client and sets Content-Type to application/json", "Converts text to JSON", "Validates JSON schema"],
    correctAnswer: "Sends a JSON response to the client and sets Content-Type to application/json",
    explanation: "res.json() serializes the provided object/array to JSON and sends it as the HTTP response with the correct Content-Type header.",
    difficulty: "easy", category: "Express.js", technology: "Express.js", type: "mcq",
    tags: ["response", "json"], estimatedTime: 25,
    realWorldUseCase: "Returning API data to the frontend in JSON format."
  },
  {
    question: "What does the next() function do in Express middleware?",
    options: ["Sends the response", "Passes control to the next middleware function in the stack", "Restarts the server", "Logs the request"],
    correctAnswer: "Passes control to the next middleware function in the stack",
    explanation: "Calling next() in a middleware function passes control to the next middleware. next(error) passes control to error-handling middleware.",
    difficulty: "easy", category: "Express.js", technology: "Express.js", type: "mcq",
    tags: ["middleware", "next"], estimatedTime: 25,
    realWorldUseCase: "Passing authenticated requests to route handlers after JWT verification."
  },
  {
    question: "How do you access query string parameters (?name=John) in Express?",
    options: ["req.params.name", "req.body.name", "req.query.name", "req.headers.name"],
    correctAnswer: "req.query.name",
    explanation: "req.query contains the parsed query string parameters from the URL. For ?name=John&age=25, req.query.name is 'John'.",
    difficulty: "easy", category: "Express.js", technology: "Express.js", type: "mcq",
    tags: ["query-params"], estimatedTime: 25,
    realWorldUseCase: "Implementing search, filtering, and pagination in list endpoints."
  },
  {
    question: "What does express.Router() do?",
    options: ["Starts a new Express server", "Creates a mini-app with its own route handlers and middleware", "Connects to MongoDB", "Handles errors globally"],
    correctAnswer: "Creates a mini-app with its own route handlers and middleware",
    explanation: "express.Router() creates a modular, mountable route handler. It's used to organize routes by feature (authRoutes, userRoutes, etc.).",
    difficulty: "easy", category: "Express.js", technology: "Express.js", type: "mcq",
    tags: ["router", "modular"], estimatedTime: 30,
    realWorldUseCase: "Separating auth routes, quiz routes, and admin routes into different files."
  },
  {
    question: "Which Express middleware is needed to parse JSON request bodies?",
    options: ["express.text()", "express.urlencoded()", "express.json()", "express.raw()"],
    correctAnswer: "express.json()",
    explanation: "express.json() (built into Express 4.16+) parses incoming requests with JSON payloads, making the body available as req.body.",
    difficulty: "easy", category: "Express.js", technology: "Express.js", type: "mcq",
    tags: ["body-parser", "json"], estimatedTime: 25,
    realWorldUseCase: "Parsing the JSON body of POST requests from the frontend."
  },
  {
    question: "What HTTP status code indicates a successful resource creation?",
    options: ["200", "201", "204", "301"],
    correctAnswer: "201",
    explanation: "201 Created indicates that the request was successful and a new resource was created. 200 OK is for successful GET requests.",
    difficulty: "easy", category: "Express.js", technology: "Express.js", type: "mcq",
    tags: ["HTTP", "status-codes"], estimatedTime: 20,
    realWorldUseCase: "Responding to POST /users after creating a new user in the database."
  },

  // --- MongoDB Easy (10) ---
  {
    question: "What is MongoDB?",
    options: ["A relational SQL database", "A NoSQL document-oriented database that stores data in JSON-like documents", "A caching system like Redis", "A message queue"],
    correctAnswer: "A NoSQL document-oriented database that stores data in JSON-like documents",
    explanation: "MongoDB is a NoSQL database that stores data as BSON (Binary JSON) documents in collections, instead of rows in tables.",
    difficulty: "easy", category: "MongoDB", technology: "MongoDB", type: "mcq",
    tags: ["basics", "NoSQL"], estimatedTime: 25,
    realWorldUseCase: "Storing flexible, schema-less data like user profiles or product catalogs."
  },
  {
    question: "What is a collection in MongoDB?",
    options: ["A row in a table", "A group of MongoDB documents, equivalent to a table in SQL", "A database index", "A JSON file"],
    correctAnswer: "A group of MongoDB documents, equivalent to a table in SQL",
    explanation: "Collections group related documents, similar to tables in relational databases. Unlike SQL tables, collections don't enforce a strict schema.",
    difficulty: "easy", category: "MongoDB", technology: "MongoDB", type: "mcq",
    tags: ["collections", "basics"], estimatedTime: 25,
    realWorldUseCase: "Separate collections for Users, Questions, and QuizAttempts."
  },
  {
    question: "What is Mongoose in the context of Node.js + MongoDB?",
    options: ["A MongoDB GUI tool", "An ODM (Object Data Modeling) library that provides schema validation and query building", "A MongoDB hosting service", "A REST API generator"],
    correctAnswer: "An ODM (Object Data Modeling) library that provides schema validation and query building",
    explanation: "Mongoose adds schema definition, validation, and a rich query API on top of MongoDB's native driver, making it easier to work with MongoDB in Node.js.",
    difficulty: "easy", category: "MongoDB", technology: "MongoDB", type: "mcq",
    tags: ["mongoose", "ODM"], estimatedTime: 30,
    realWorldUseCase: "Defining User and Question schemas with validation rules."
  },
  {
    question: "How do you find a document by its ID in Mongoose?",
    options: ["Model.get(id)", "Model.findById(id)", "Model.search({ id })", "Model.filter(id)"],
    correctAnswer: "Model.findById(id)",
    explanation: "Model.findById(id) is Mongoose's shorthand for Model.findOne({ _id: id }). It returns the document with the matching ObjectId.",
    difficulty: "easy", category: "MongoDB", technology: "MongoDB", type: "mcq",
    tags: ["queries", "findById"], estimatedTime: 25,
    realWorldUseCase: "Fetching a specific user's profile by their ID from the database."
  },
  {
    question: "What does the .save() method do in Mongoose?",
    options: ["Saves a file to disk", "Validates and persists a Mongoose document to MongoDB", "Exports data to JSON", "Caches data in memory"],
    correctAnswer: "Validates and persists a Mongoose document to MongoDB",
    explanation: ".save() runs validation, applies middleware (pre/post hooks), then creates or updates the document in MongoDB.",
    difficulty: "easy", category: "MongoDB", technology: "MongoDB", type: "mcq",
    tags: ["save", "CRUD"], estimatedTime: 25,
    realWorldUseCase: "Saving a newly registered user or updating quiz attempt results."
  },
  {
    question: "What is the purpose of indexes in MongoDB?",
    options: ["To create backups", "To speed up query performance by allowing efficient data lookup", "To compress documents", "To enforce foreign keys"],
    correctAnswer: "To speed up query performance by allowing efficient data lookup",
    explanation: "Indexes store a small portion of data in an easy-to-traverse form. Without indexes, MongoDB must scan every document (collection scan).",
    difficulty: "easy", category: "MongoDB", technology: "MongoDB", type: "mcq",
    tags: ["indexes", "performance"], estimatedTime: 30,
    realWorldUseCase: "Indexing the email field in Users collection for fast login lookups."
  },
  {
    question: "What does Model.find({}) return in Mongoose?",
    options: ["The first document", "All documents in the collection", "Documents matching a query", "The document count"],
    correctAnswer: "All documents in the collection",
    explanation: "Model.find({}) with an empty query object matches all documents in the collection and returns them as an array.",
    difficulty: "easy", category: "MongoDB", technology: "MongoDB", type: "mcq",
    tags: ["queries", "find"], estimatedTime: 20,
    realWorldUseCase: "Fetching all questions for admin management panel."
  },
  {
    question: "What is _id in MongoDB documents?",
    options: ["A user-defined identifier", "A unique auto-generated ObjectId assigned to every document", "The document's array index", "A foreign key reference"],
    correctAnswer: "A unique auto-generated ObjectId assigned to every document",
    explanation: "Every MongoDB document has an _id field containing a unique ObjectId (12-byte BSON value) that serves as the primary key.",
    difficulty: "easy", category: "MongoDB", technology: "MongoDB", type: "mcq",
    tags: ["_id", "ObjectId"], estimatedTime: 25,
    realWorldUseCase: "Referencing users in quiz attempts using their _id."
  },
  {
    question: "How do you update a document in Mongoose?",
    options: ["Model.change()", "Model.findByIdAndUpdate(id, update, options)", "Model.edit(id, update)", "Model.modify()"],
    correctAnswer: "Model.findByIdAndUpdate(id, update, options)",
    explanation: "findByIdAndUpdate() finds a document by ID and updates it atomically. Pass { new: true } to return the updated document.",
    difficulty: "easy", category: "MongoDB", technology: "MongoDB", type: "mcq",
    tags: ["update", "CRUD"], estimatedTime: 30,
    realWorldUseCase: "Updating a student's average score after completing a quiz."
  },
  {
    question: "What does the $set operator do in MongoDB?",
    options: ["Creates a new collection", "Updates the value of a specific field without affecting other fields", "Removes a field", "Adds to an array field"],
    correctAnswer: "Updates the value of a specific field without affecting other fields",
    explanation: "$set updates specific fields in a document while leaving other fields unchanged. Without $set, an update replaces the entire document.",
    difficulty: "easy", category: "MongoDB", technology: "MongoDB", type: "mcq",
    tags: ["$set", "update-operators"], estimatedTime: 30,
    realWorldUseCase: "Updating only a user's lastLogin timestamp without affecting other fields."
  },

  // --- Authentication & Security Easy (10) ---
  {
    question: "What is JWT (JSON Web Token)?",
    options: ["A database storage format", "A compact, self-contained token for securely transmitting user information between parties", "A type of HTTP cookie", "A password hashing algorithm"],
    correctAnswer: "A compact, self-contained token for securely transmitting user information between parties",
    explanation: "JWT is a standard for creating tokens that contain claims (user data). They consist of a header, payload, and signature, encoded as Base64.",
    difficulty: "easy", category: "Authentication & Security", technology: "JWT", type: "mcq",
    tags: ["JWT", "authentication"], estimatedTime: 35,
    realWorldUseCase: "Sending auth tokens to the client after login for subsequent API requests."
  },
  {
    question: "What does bcrypt do?",
    options: ["Encrypts network traffic", "Hashes passwords with a salt to make them secure", "Generates JWT tokens", "Validates email addresses"],
    correctAnswer: "Hashes passwords with a salt to make them secure",
    explanation: "bcrypt is a password hashing function that adds a random salt and applies the hash multiple times (based on cost factor) to slow down brute-force attacks.",
    difficulty: "easy", category: "Authentication & Security", technology: "bcrypt", type: "mcq",
    tags: ["bcrypt", "password"], estimatedTime: 30,
    realWorldUseCase: "Storing user passwords securely in the database on registration."
  },
  {
    question: "What is the difference between authentication and authorization?",
    options: ["They are the same thing", "Authentication verifies who you are; authorization determines what you can do", "Authorization verifies who you are; authentication determines what you can do", "Authentication is for users; authorization is for admins only"],
    correctAnswer: "Authentication verifies who you are; authorization determines what you can do",
    explanation: "Authentication answers 'Who are you?' (login with credentials). Authorization answers 'What are you allowed to do?' (role-based access control).",
    difficulty: "easy", category: "Authentication & Security", technology: "Security", type: "mcq",
    tags: ["authn", "authz"], estimatedTime: 30,
    realWorldUseCase: "A logged-in student (authenticated) cannot access admin routes (unauthorized)."
  },
  {
    question: "What is HTTPS and why is it important?",
    options: ["An HTML version", "HTTP over TLS/SSL that encrypts data in transit between client and server", "A faster version of HTTP", "A REST API standard"],
    correctAnswer: "HTTP over TLS/SSL that encrypts data in transit between client and server",
    explanation: "HTTPS encrypts the communication between browser and server, preventing man-in-the-middle attacks and data interception.",
    difficulty: "easy", category: "Authentication & Security", technology: "Security", type: "mcq",
    tags: ["HTTPS", "TLS"], estimatedTime: 25,
    realWorldUseCase: "Protecting login credentials and JWT tokens in transit."
  },
  {
    question: "What does 'httpOnly' cookie flag do?",
    options: ["Makes the cookie only work over HTTP", "Prevents JavaScript from accessing the cookie, protecting against XSS attacks", "Makes the cookie expire after the session", "Enables cross-site cookie sharing"],
    correctAnswer: "Prevents JavaScript from accessing the cookie, protecting against XSS attacks",
    explanation: "httpOnly cookies cannot be accessed via document.cookie in JavaScript, making them immune to XSS attacks that try to steal tokens.",
    difficulty: "easy", category: "Authentication & Security", technology: "Security", type: "mcq",
    tags: ["cookies", "XSS", "httpOnly"], estimatedTime: 35,
    realWorldUseCase: "Storing refresh tokens securely in httpOnly cookies."
  },
  {
    question: "What is an access token vs refresh token?",
    options: ["They are identical", "Access tokens are short-lived for API calls; refresh tokens are long-lived for obtaining new access tokens", "Refresh tokens are for API calls; access tokens are for obtaining new tokens", "Only one type is needed"],
    correctAnswer: "Access tokens are short-lived for API calls; refresh tokens are long-lived for obtaining new access tokens",
    explanation: "Access tokens expire quickly (minutes) for security. When they expire, the client uses a long-lived refresh token to get a new access token without re-login.",
    difficulty: "easy", category: "Authentication & Security", technology: "JWT", type: "mcq",
    tags: ["access-token", "refresh-token"], estimatedTime: 40,
    realWorldUseCase: "Keeping users logged in for 7 days while keeping API access tokens secure."
  },
  {
    question: "What is XSS (Cross-Site Scripting)?",
    options: ["A CSS preprocessor", "An attack where malicious scripts are injected into trusted web pages", "A type of SQL injection", "A network protocol"],
    correctAnswer: "An attack where malicious scripts are injected into trusted web pages",
    explanation: "XSS attacks inject malicious JavaScript into a web page, which then executes in users' browsers, potentially stealing cookies or credentials.",
    difficulty: "easy", category: "Authentication & Security", technology: "Security", type: "mcq",
    tags: ["XSS", "security"], estimatedTime: 30,
    realWorldUseCase: "Protecting user input fields in forms from script injection."
  },
  {
    question: "What is the purpose of CORS?",
    options: ["To speed up database queries", "To control which domains can access your API from a browser", "To encrypt API responses", "To validate JSON format"],
    correctAnswer: "To control which domains can access your API from a browser",
    explanation: "CORS (Cross-Origin Resource Sharing) allows servers to specify which origins can access their resources via HTTP headers, preventing unauthorized cross-origin requests.",
    difficulty: "easy", category: "Authentication & Security", technology: "Security", type: "mcq",
    tags: ["CORS", "security"], estimatedTime: 30,
    realWorldUseCase: "Allowing your Next.js frontend on localhost:3000 to call your Express API on port 5000."
  },
  {
    question: "What HTTP status code indicates unauthorized access?",
    options: ["400", "403", "401", "404"],
    correctAnswer: "401",
    explanation: "401 Unauthorized means the request lacks valid authentication credentials. 403 Forbidden means the user is authenticated but lacks permission.",
    difficulty: "easy", category: "Authentication & Security", technology: "HTTP", type: "mcq",
    tags: ["HTTP", "status-codes", "auth"], estimatedTime: 20,
    realWorldUseCase: "Returning 401 when a JWT token is missing or expired."
  },
  {
    question: "What is rate limiting?",
    options: ["Limiting the size of API responses", "Restricting how many requests a client can make in a time window", "Throttling database query speed", "Caching API responses"],
    correctAnswer: "Restricting how many requests a client can make in a time window",
    explanation: "Rate limiting prevents abuse by capping requests per IP or user within a time window, protecting against brute-force and DDoS attacks.",
    difficulty: "easy", category: "Authentication & Security", technology: "Security", type: "mcq",
    tags: ["rate-limiting", "security"], estimatedTime: 25,
    realWorldUseCase: "Limiting login attempts to 10 per 15 minutes to prevent brute-force attacks."
  },

  // --- Problem Solving Easy (5) ---
  {
    question: "You need to render a list of 1000 items in React. What is the best approach to prevent performance issues?",
    options: ["Render all 1000 items at once", "Use virtualization (e.g., react-window) to render only visible items", "Use a for loop instead of map", "Wrap all items in React.memo"],
    correctAnswer: "Use virtualization (e.g., react-window) to render only visible items",
    explanation: "Virtualization only renders DOM nodes for visible items, dramatically reducing memory usage and improving performance for large lists.",
    difficulty: "easy", category: "Problem Solving", technology: "React", type: "problem-solving",
    tags: ["performance", "virtualization"], estimatedTime: 45,
    realWorldUseCase: "Rendering large datasets like quiz question banks or student lists."
  },
  {
    question: "A user reports they're still logged in even after clicking logout. What is the most likely cause?",
    options: ["The database is down", "The JWT token is not being cleared on the client side after logout", "The server is not responding", "The browser cache is full"],
    correctAnswer: "The JWT token is not being cleared on the client side after logout",
    explanation: "If the frontend doesn't remove the JWT from localStorage or cookies on logout, subsequent requests will still send the token and appear authenticated.",
    difficulty: "easy", category: "Problem Solving", technology: "JWT", type: "problem-solving",
    tags: ["logout", "JWT", "auth"], estimatedTime: 40,
    realWorldUseCase: "Implementing complete logout that clears tokens from both client and server."
  },
  {
    question: "Your Express API returns CORS errors when called from your Next.js frontend. What should you do?",
    options: ["Disable the browser's CORS policy", "Add cors() middleware to your Express server with the correct origin", "Switch to a different HTTP client", "Reload the browser"],
    correctAnswer: "Add cors() middleware to your Express server with the correct origin",
    explanation: "CORS errors happen server-side. Adding the cors npm package and configuring it with the allowed origin(s) resolves this.",
    difficulty: "easy", category: "Problem Solving", technology: "Express.js", type: "problem-solving",
    tags: ["CORS", "debugging"], estimatedTime: 35,
    realWorldUseCase: "Connecting a separate Next.js frontend to an Express backend during development."
  },
  {
    question: "You want to prevent re-running an API call every time a React component renders. What hook should you use?",
    options: ["useState", "useCallback", "useEffect with a dependency array", "useMemo"],
    correctAnswer: "useEffect with a dependency array",
    explanation: "Placing the API call inside useEffect with proper dependencies ensures it only runs when those dependencies change, not on every render.",
    difficulty: "easy", category: "Problem Solving", technology: "React", type: "problem-solving",
    tags: ["useEffect", "optimization"], estimatedTime: 35,
    realWorldUseCase: "Fetching quiz data only once when the quiz page loads."
  },
  {
    question: "Your MongoDB query is taking too long on a field that you filter frequently. What is the quickest fix?",
    options: ["Increase server RAM", "Add an index on that field", "Reduce document size", "Switch to a SQL database"],
    correctAnswer: "Add an index on that field",
    explanation: "Adding an index on frequently queried fields converts O(n) collection scans to O(log n) index scans, dramatically improving query performance.",
    difficulty: "easy", category: "Problem Solving", technology: "MongoDB", type: "problem-solving",
    tags: ["indexes", "performance"], estimatedTime: 30,
    realWorldUseCase: "Adding an index on the 'email' field to speed up user login queries."
  },

  // --- Debugging Easy (10) ---
  {
    question: "What is wrong with this code?\n\nconst [count, setCount] = useState(0);\nuseEffect(() => {\n  setCount(count + 1);\n});",
    options: ["useState is not imported", "The useEffect has no dependency array, causing an infinite re-render loop", "setCount is used incorrectly", "count is not initialized"],
    correctAnswer: "The useEffect has no dependency array, causing an infinite re-render loop",
    explanation: "Without a dependency array, useEffect runs after every render. Setting state inside triggers another render, creating an infinite loop.",
    difficulty: "easy", category: "Debugging", technology: "React", type: "debugging",
    codeSnippet: "const [count, setCount] = useState(0);\nuseEffect(() => {\n  setCount(count + 1);\n});",
    tags: ["useEffect", "infinite-loop"], estimatedTime: 45,
    realWorldUseCase: "Common beginner mistake when using useEffect for data fetching."
  },
  {
    question: "What is wrong with this Express route?\n\napp.get('/user', (req, res) => {\n  const user = db.getUser();\n  res.json(user);\n});",
    options: ["The route path is wrong", "db.getUser() is likely async but there is no await, so user may be undefined", "res.json is not a function", "The HTTP method should be POST"],
    correctAnswer: "db.getUser() is likely async but there is no await, so user may be undefined",
    explanation: "If getUser() returns a Promise without await, the variable holds a Promise object, not the resolved user data.",
    difficulty: "easy", category: "Debugging", technology: "Express.js", type: "debugging",
    codeSnippet: "app.get('/user', (req, res) => {\n  const user = db.getUser();\n  res.json(user);\n});",
    tags: ["async", "await", "debugging"], estimatedTime: 40,
    realWorldUseCase: "Forgetting async/await in database query handlers."
  },
  {
    question: "A React component's state update is not reflected immediately after calling setState. Why?",
    options: ["setState is broken", "State updates in React are asynchronous and batched", "You need to reload the page", "setState only works in class components"],
    correctAnswer: "State updates in React are asynchronous and batched",
    explanation: "React batches state updates and applies them asynchronously. Reading state immediately after setState returns the old value.",
    difficulty: "easy", category: "Debugging", technology: "React", type: "debugging",
    tags: ["state", "async", "batching"], estimatedTime: 35,
    realWorldUseCase: "Logging state value right after updating it in an event handler."
  },
  {
    question: "What is wrong with this MongoDB query?\n\nconst user = User.findOne({ email: email });",
    options: ["The query syntax is wrong", "findOne returns a Promise but there is no await or .then()", "email is not a valid field", "User model is not defined"],
    correctAnswer: "findOne returns a Promise but there is no await or .then()",
    explanation: "All Mongoose queries return Promises. Without await or .then(), user holds a Mongoose Query object, not the actual document.",
    difficulty: "easy", category: "Debugging", technology: "MongoDB", type: "debugging",
    codeSnippet: "const user = User.findOne({ email: email });",
    tags: ["mongoose", "async", "promise"], estimatedTime: 35,
    realWorldUseCase: "Forgetting await in async controller functions."
  },
  {
    question: "A Next.js page shows stale data after navigating back to it. What is the most likely cause?",
    options: ["Next.js has a bug", "The page uses getStaticProps without revalidation, serving cached data", "The database is offline", "React state is corrupted"],
    correctAnswer: "The page uses getStaticProps without revalidate, serving cached data",
    explanation: "getStaticProps without a revalidate option serves the same static content built at deployment. Add revalidate: N for ISR to refresh periodically.",
    difficulty: "easy", category: "Debugging", technology: "Next.js", type: "debugging",
    tags: ["SSG", "ISR", "caching"], estimatedTime: 40,
    realWorldUseCase: "A product page not showing updated prices because of stale SSG data."
  },
  {
    question: "What happens when you forget to call next() in an Express middleware?",
    options: ["The request is automatically handled", "The request hangs and the client receives no response (timeout)", "An error is thrown", "The middleware runs twice"],
    correctAnswer: "The request hangs and the client receives no response (timeout)",
    explanation: "Without next(), control never passes to the next middleware or route handler, leaving the client's request pending until it times out.",
    difficulty: "easy", category: "Debugging", technology: "Express.js", type: "debugging",
    tags: ["middleware", "next", "debugging"], estimatedTime: 35,
    realWorldUseCase: "Auth middleware that forgets to call next() after successful verification."
  },
  {
    question: "What is wrong with this code?\n\nconst handleClick = () => {\n  setItems(items.push(newItem));\n}",
    options: ["setItems is used incorrectly", "Array.push() mutates the original array and returns the new length, not the array", "newItem is not defined", "handleClick should be async"],
    correctAnswer: "Array.push() mutates the original array and returns the new length, not the array",
    explanation: "Array.push() mutates the original array (React state mutation) and returns the length. Use setItems([...items, newItem]) instead.",
    difficulty: "easy", category: "Debugging", technology: "React", type: "debugging",
    codeSnippet: "const handleClick = () => {\n  setItems(items.push(newItem));\n}",
    tags: ["state", "immutability", "arrays"], estimatedTime: 40,
    realWorldUseCase: "Adding items to a shopping cart or quiz answer list."
  },
  {
    question: "Your JWT authentication middleware rejects all requests with 'invalid token', but tokens are fresh. What should you check first?",
    options: ["The user's password", "Whether the JWT_SECRET used to sign and verify tokens is the same", "The database connection", "The request URL"],
    correctAnswer: "Whether the JWT_SECRET used to sign and verify tokens is the same",
    explanation: "If tokens are signed with one secret and verified with a different one (common env variable mismatch), all tokens will appear invalid.",
    difficulty: "easy", category: "Debugging", technology: "JWT", type: "debugging",
    tags: ["JWT", "secret", "debugging"], estimatedTime: 40,
    realWorldUseCase: "Mismatched JWT secrets between different environments."
  },
  {
    question: "What is wrong with connecting to MongoDB like this?\n\nmongoose.connect('mongodb://localhost:27017/mydb');\nconst user = await User.findOne({});",
    options: ["The MongoDB URI is incorrect", "User.findOne is called before the connection is established", "mongoose.connect is deprecated", "findOne requires parameters"],
    correctAnswer: "User.findOne is called before the connection is established",
    explanation: "mongoose.connect() is asynchronous. Without awaiting it, database operations that follow may execute before the connection is ready.",
    difficulty: "easy", category: "Debugging", technology: "MongoDB", type: "debugging",
    codeSnippet: "mongoose.connect('mongodb://localhost:27017/mydb');\nconst user = await User.findOne({});",
    tags: ["mongoose", "connection", "async"], estimatedTime: 40,
    realWorldUseCase: "Running database queries in a script before the connection is ready."
  },
  {
    question: "A React component shows 'Cannot read properties of undefined (reading map)'. What is the most likely cause?",
    options: ["map is not a valid array method", "The data being mapped is undefined because the async data fetch hasn't completed yet", "React doesn't support map", "The component is missing a key prop"],
    correctAnswer: "The data being mapped is undefined because the async data fetch hasn't completed yet",
    explanation: "When data comes from an API call, it starts as undefined. You must initialize state as an empty array and handle the loading state.",
    difficulty: "easy", category: "Debugging", technology: "React", type: "debugging",
    tags: ["async", "undefined", "loading-state"], estimatedTime: 35,
    realWorldUseCase: "Rendering a list of API items before the data has loaded."
  },

  // ============================================================
  // MODERATE QUESTIONS (60)
  // ============================================================

  // --- React.js Moderate (8) ---
  {
    question: "You have a parent component that re-renders frequently. A child component receives a callback as a prop and is wrapped in React.memo. However, the child still re-renders. Why?",
    options: ["React.memo doesn't work with callbacks", "A new function reference is created on every parent render, so memo sees it as a changed prop", "The child component has a bug", "React.memo requires class components"],
    correctAnswer: "A new function reference is created on every parent render, so memo sees it as a changed prop",
    explanation: "Functions in JavaScript are created anew on each render. Even if the logic is identical, the reference changes. Use useCallback to memoize callbacks passed to memoized children.",
    difficulty: "moderate", category: "React.js", technology: "React", type: "problem-solving",
    tags: ["memo", "useCallback", "performance", "re-renders"], estimatedTime: 60,
    realWorldUseCase: "Optimizing a quiz component that receives handlers from a parent container."
  },
  {
    question: "What is the difference between useMemo and useCallback?",
    options: ["They are identical hooks", "useMemo memoizes a computed value; useCallback memoizes a function reference", "useCallback memoizes values; useMemo memoizes functions", "useMemo is for async operations"],
    correctAnswer: "useMemo memoizes a computed value; useCallback memoizes a function reference",
    explanation: "useMemo(() => expensiveCalc(data), [data]) caches the result. useCallback(() => handler, [deps]) caches the function itself. Both re-compute when dependencies change.",
    difficulty: "moderate", category: "React.js", technology: "React", type: "mcq",
    tags: ["useMemo", "useCallback", "optimization"], estimatedTime: 50,
    realWorldUseCase: "Memoizing expensive score calculations and stable event handlers."
  },
  {
    question: "How does React Context API differ from prop drilling, and when should you avoid Context?",
    options: ["Context is always better than props", "Context provides global state without prop drilling; avoid it for frequently changing state as it re-renders all consumers", "Context only works with class components", "Context replaces Redux entirely in all cases"],
    correctAnswer: "Context provides global state without prop drilling; avoid it for frequently changing state as it re-renders all consumers",
    explanation: "Context solves prop drilling for global data (theme, auth). However, every consumer re-renders when context changes, making it inefficient for high-frequency updates.",
    difficulty: "moderate", category: "React.js", technology: "React", type: "scenario",
    tags: ["context", "performance", "state-management"], estimatedTime: 60,
    realWorldUseCase: "Using Context for theme/auth but Redux for frequently updating quiz state."
  },
  {
    question: "What is the useReducer hook and when would you prefer it over useState?",
    options: ["useReducer is deprecated", "useReducer manages complex state logic with actions; prefer it when state transitions depend on previous state or multiple sub-values", "useState can always replace useReducer", "useReducer requires Redux"],
    correctAnswer: "useReducer manages complex state logic with actions; prefer it when state transitions depend on previous state or multiple sub-values",
    explanation: "useReducer is better for complex state objects with multiple fields or when next state depends on current state in non-trivial ways (like form state with validation).",
    difficulty: "moderate", category: "React.js", technology: "React", type: "mcq",
    tags: ["useReducer", "state-management"], estimatedTime: 55,
    realWorldUseCase: "Managing a multi-step quiz form with answers, timer, and validation."
  },
  {
    question: "A user reports that after submitting a form, the component flashes an old error message before showing the success message. How do you fix this?",
    options: ["Use setTimeout", "Reset the error state when submitting and update states correctly in sequence", "Use useLayoutEffect", "Add loading to the form"],
    correctAnswer: "Reset the error state when submitting and update states correctly in sequence",
    explanation: "Clear error state at the start of submission. React batches state updates in 18+, but explicitly resetting error on submit prevents stale UI flashes.",
    difficulty: "moderate", category: "React.js", technology: "React", type: "scenario",
    tags: ["forms", "state", "UX"], estimatedTime: 55,
    realWorldUseCase: "Login form showing stale 'invalid credentials' while a new login request is pending."
  },
  {
    question: "What is a custom hook in React and what problem does it solve?",
    options: ["A hook from a third-party library", "A reusable function starting with 'use' that extracts stateful logic from components", "A hook that modifies DOM directly", "A React Router hook"],
    correctAnswer: "A reusable function starting with 'use' that extracts stateful logic from components",
    explanation: "Custom hooks extract component logic into reusable functions. They can call other hooks and encapsulate state, effects, and business logic.",
    difficulty: "moderate", category: "React.js", technology: "React", type: "mcq",
    tags: ["custom-hooks", "reusability"], estimatedTime: 50,
    realWorldUseCase: "A useQuiz hook that manages quiz state, timer, and submission logic."
  },
  {
    question: "What is React's reconciliation algorithm and how does it decide what to re-render?",
    options: ["It re-renders everything on every update", "It uses a virtual DOM diff algorithm comparing previous and new component trees, updating only changed nodes", "It uses CSS to detect changes", "It queries the DOM directly"],
    correctAnswer: "It uses a virtual DOM diff algorithm comparing previous and new component trees, updating only changed nodes",
    explanation: "React keeps a virtual DOM in memory. When state changes, it diffs the new virtual DOM with the previous one and applies only the minimum necessary real DOM changes.",
    difficulty: "moderate", category: "React.js", technology: "React", type: "mcq",
    tags: ["reconciliation", "virtual-dom", "performance"], estimatedTime: 55,
    realWorldUseCase: "Understanding why components in different branches of the tree don't trigger each other's re-renders."
  },
  {
    question: "You have a debounced search input that calls an API. The component unmounts before the API call completes. What problem could occur and how do you fix it?",
    options: ["Nothing happens", "setState may be called on an unmounted component, causing memory leaks; use a cleanup function in useEffect or AbortController", "The API call is automatically cancelled", "The error is silently ignored"],
    correctAnswer: "setState may be called on an unmounted component, causing memory leaks; use a cleanup function in useEffect or AbortController",
    explanation: "If the component unmounts mid-fetch, setting state on it causes the 'Can't perform a React state update on an unmounted component' warning. Use AbortController to cancel requests or track mount status.",
    difficulty: "moderate", category: "React.js", technology: "React", type: "problem-solving",
    tags: ["cleanup", "AbortController", "memory-leaks"], estimatedTime: 65,
    realWorldUseCase: "Search features on quiz dashboards where users navigate away quickly."
  },

  // --- Next.js Moderate (8) ---
  {
    question: "In Next.js App Router, when should you use a Server Component vs a Client Component?",
    options: ["Always use Client Components for everything", "Use Server Components for data fetching and non-interactive content; Client Components for interactivity and browser APIs", "Use Client Components for data fetching", "It doesn't matter which you use"],
    correctAnswer: "Use Server Components for data fetching and non-interactive content; Client Components for interactivity and browser APIs",
    explanation: "Server Components run only on the server â€” great for DB access, reducing bundle size, and no client JS needed. Client Components handle onClick, useState, browser APIs, etc.",
    difficulty: "moderate", category: "Next.js", technology: "Next.js", type: "scenario",
    tags: ["app-router", "server-components", "client-components"], estimatedTime: 60,
    realWorldUseCase: "Quiz page: server component fetches questions, client component handles timer and answer selection."
  },
  {
    question: "How do you implement protected routes in Next.js using middleware?",
    options: ["Using getServerSideProps on every page", "Creating a middleware.js file in the root that runs before requests and redirects unauthenticated users", "Using React Router guards", "Adding auth checks to every component"],
    correctAnswer: "Creating a middleware.js file in the root that runs before requests and redirects unauthenticated users",
    explanation: "Next.js middleware (middleware.js) runs before rendering. It can check cookies/tokens and redirect to login for protected routes, before any component code runs.",
    difficulty: "moderate", category: "Next.js", technology: "Next.js", type: "scenario",
    tags: ["middleware", "auth", "protected-routes"], estimatedTime: 60,
    realWorldUseCase: "Redirecting unauthenticated users from /dashboard to /login."
  },
  {
    question: "What is the difference between next/navigation's useRouter and next/router's useRouter?",
    options: ["They are identical", "next/navigation is for App Router (Next.js 13+); next/router is for Pages Router", "next/router is for App Router", "next/navigation only works on server"],
    correctAnswer: "next/navigation is for App Router (Next.js 13+); next/router is for Pages Router",
    explanation: "With the new App Router in Next.js 13+, routing hooks are in 'next/navigation' (useRouter, usePathname, useSearchParams). The old Pages Router uses 'next/router'.",
    difficulty: "moderate", category: "Next.js", technology: "Next.js", type: "mcq",
    tags: ["routing", "app-router", "hooks"], estimatedTime: 50,
    realWorldUseCase: "Programmatic navigation after quiz submission."
  },
  {
    question: "Your Next.js page needs user-specific data on every request (like personalized dashboard). Which data fetching method should you use?",
    options: ["getStaticProps", "getStaticPaths", "getServerSideProps", "Client-side fetching only"],
    correctAnswer: "getServerSideProps",
    explanation: "getServerSideProps runs on every request and has access to req/res, making it suitable for user-specific server-rendered content. However, it's slower than SSG.",
    difficulty: "moderate", category: "Next.js", technology: "Next.js", type: "scenario",
    tags: ["SSR", "getServerSideProps"], estimatedTime: 55,
    realWorldUseCase: "A student dashboard showing their personal quiz history and scores."
  },
  {
    question: "How do you handle environment variables securely in Next.js?",
    options: ["Put all variables in next.config.js", "Prefix server-only variables with nothing and client-accessible variables with NEXT_PUBLIC_", "All environment variables are accessible on the client", "Environment variables must be hardcoded"],
    correctAnswer: "Prefix server-only variables with nothing and client-accessible variables with NEXT_PUBLIC_",
    explanation: "Variables without NEXT_PUBLIC_ prefix are only available server-side. Variables prefixed with NEXT_PUBLIC_ are bundled into the client JavaScript.",
    difficulty: "moderate", category: "Next.js", technology: "Next.js", type: "mcq",
    tags: ["env-vars", "security"], estimatedTime: 45,
    realWorldUseCase: "Keeping database URLs server-only while exposing public API endpoints."
  },
  {
    question: "What is the purpose of the loading.js file in Next.js App Router?",
    options: ["It handles 404 errors", "It provides instant loading UI while a page or layout is loading, shown via React Suspense", "It preloads all JavaScript bundles", "It configures the loading spinner globally"],
    correctAnswer: "It provides instant loading UI while a page or layout is loading, shown via React Suspense",
    explanation: "loading.js is automatically wrapped in a Suspense boundary. While the page fetches data or loads, the loading UI is immediately shown.",
    difficulty: "moderate", category: "Next.js", technology: "Next.js", type: "mcq",
    tags: ["loading", "suspense", "app-router"], estimatedTime: 45,
    realWorldUseCase: "Showing a skeleton loader while quiz questions are being fetched."
  },
  {
    question: "How do you implement catch-all routes in Next.js?",
    options: ["Using [...slug].js in the pages directory", "Using * in the route name", "In next.config.js redirect rules", "Using a wildcard middleware"],
    correctAnswer: "Using [...slug].js in the pages directory",
    explanation: "[...slug].js matches multiple path segments. /docs/react/hooks would match with slug = ['react', 'hooks']. [[...slug]].js also matches the base route.",
    difficulty: "moderate", category: "Next.js", technology: "Next.js", type: "mcq",
    tags: ["dynamic-routes", "catch-all"], estimatedTime: 45,
    realWorldUseCase: "Documentation pages with nested paths like /docs/react/hooks/useState."
  },
  {
    question: "A Next.js API route needs to handle both GET and POST requests. How do you implement this?",
    options: ["Create two separate files", "Check req.method in the handler and route accordingly", "Use a switch on req.type", "Next.js doesn't support multiple methods on one route"],
    correctAnswer: "Check req.method in the handler and route accordingly",
    explanation: "A single Next.js API route file handles all HTTP methods. You check req.method ('GET', 'POST', etc.) and execute different logic for each.",
    difficulty: "moderate", category: "Next.js", technology: "Next.js", type: "mcq",
    tags: ["api-routes", "HTTP-methods"], estimatedTime: 45,
    realWorldUseCase: "A /api/questions route that GETs questions for students and POSTs new questions for admins."
  },

  // --- Node.js Moderate (8) ---
  {
    question: "What is the difference between process.nextTick() and setImmediate() in Node.js?",
    options: ["They are identical", "process.nextTick() runs before I/O callbacks; setImmediate() runs after I/O callbacks in the event loop", "setImmediate() runs before I/O callbacks", "Both run synchronously"],
    correctAnswer: "process.nextTick() runs before I/O callbacks; setImmediate() runs after I/O callbacks in the event loop",
    explanation: "process.nextTick() callbacks run at the end of the current operation before the event loop continues. setImmediate() runs in the check phase, after I/O.",
    difficulty: "moderate", category: "Node.js", technology: "Node.js", type: "mcq",
    tags: ["event-loop", "nextTick", "setImmediate"], estimatedTime: 65,
    realWorldUseCase: "Ensuring a callback fires before any I/O events in Node.js internals."
  },
  {
    question: "How do you handle uncaught promise rejections in Node.js?",
    options: ["They are handled automatically", "Using process.on('unhandledRejection', handler) and always having .catch() on promises", "Using try-catch around all async code", "Promise rejections don't cause issues in Node.js"],
    correctAnswer: "Using process.on('unhandledRejection', handler) and always having .catch() on promises",
    explanation: "Uncaught rejections can crash Node.js in newer versions. Always attach .catch() and set up a global unhandledRejection handler for safety.",
    difficulty: "moderate", category: "Node.js", technology: "Node.js", type: "mcq",
    tags: ["error-handling", "promises"], estimatedTime: 55,
    realWorldUseCase: "Preventing server crashes from unhandled database connection errors."
  },
  {
    question: "What are Node.js streams and when should you use them?",
    options: ["Streams are for video content only", "Streams handle large data in chunks instead of loading it all into memory at once â€” ideal for large file processing or real-time data", "Streams are deprecated in Node.js", "Streams only work with network requests"],
    correctAnswer: "Streams handle large data in chunks instead of loading it all into memory at once â€” ideal for large file processing or real-time data",
    explanation: "Node.js streams (Readable, Writable, Transform) process data piece by piece, avoiding memory overflow when handling large files or continuous data.",
    difficulty: "moderate", category: "Node.js", technology: "Node.js", type: "mcq",
    tags: ["streams", "performance", "memory"], estimatedTime: 60,
    realWorldUseCase: "Streaming large CSV exports of student quiz data."
  },
  {
    question: "What is clustering in Node.js and why is it used?",
    options: ["It's a database partitioning strategy", "It creates multiple worker processes to utilize multi-core CPUs, since Node.js is single-threaded", "It's for load balancing between servers", "It combines multiple Node.js versions"],
    correctAnswer: "It creates multiple worker processes to utilize multi-core CPUs, since Node.js is single-threaded",
    explanation: "Node.js runs on a single thread. The cluster module forks the server into multiple worker processes (one per CPU core) to handle more concurrent connections.",
    difficulty: "moderate", category: "Node.js", technology: "Node.js", type: "mcq",
    tags: ["clustering", "performance", "scaling"], estimatedTime: 60,
    realWorldUseCase: "Scaling a quiz server to handle 50 simultaneous users across 4 CPU cores."
  },
  {
    question: "What is the difference between synchronous and asynchronous file reading in Node.js?",
    options: ["There is no difference", "fs.readFileSync() blocks the event loop; fs.readFile() is non-blocking with a callback", "fs.readFile() is synchronous", "Only readFileSync works correctly"],
    correctAnswer: "fs.readFileSync() blocks the event loop; fs.readFile() is non-blocking with a callback",
    explanation: "Synchronous file operations block the event loop while reading, preventing handling other requests. Async versions use callbacks/promises and don't block.",
    difficulty: "moderate", category: "Node.js", technology: "Node.js", type: "mcq",
    tags: ["file-system", "sync-vs-async", "event-loop"], estimatedTime: 50,
    realWorldUseCase: "Reading environment files at startup (sync OK) vs serving files in a request handler (must be async)."
  },
  {
    question: "How do you implement request validation in Express without a library?",
    options: ["Validation is Express's job", "Check req.body properties and send error responses for invalid data before processing", "Node.js validates automatically", "Use only database-level validation"],
    correctAnswer: "Check req.body properties and send error responses for invalid data before processing",
    explanation: "Input validation should happen at the controller level before any business logic. Check for required fields, types, and format, returning 400 with descriptive messages.",
    difficulty: "moderate", category: "Node.js", technology: "Node.js", type: "scenario",
    tags: ["validation", "security", "best-practices"], estimatedTime: 50,
    realWorldUseCase: "Validating quiz submission data before saving to database."
  },
  {
    question: "What is the purpose of the dotenv package in Node.js?",
    options: ["It deploys Node.js applications", "It loads environment variables from a .env file into process.env for local development", "It encrypts environment variables", "It manages multiple Node.js versions"],
    correctAnswer: "It loads environment variables from a .env file into process.env for local development",
    explanation: "dotenv reads key=value pairs from a .env file and adds them to process.env. This allows local development without setting system-level env variables.",
    difficulty: "moderate", category: "Node.js", technology: "Node.js", type: "mcq",
    tags: ["dotenv", "config", "security"], estimatedTime: 40,
    realWorldUseCase: "Storing MongoDB URI and JWT secrets locally without committing them to git."
  },
  {
    question: "What is the difference between exports and module.exports in Node.js?",
    options: ["They are exactly the same", "exports is a reference to module.exports; reassigning exports breaks the link but reassigning module.exports works", "module.exports is deprecated", "exports works across files; module.exports is local"],
    correctAnswer: "exports is a reference to module.exports; reassigning exports breaks the link but reassigning module.exports works",
    explanation: "Initially exports === module.exports. If you do exports = function(){}, you break the reference. Always use export default ... to export a new value.",
    difficulty: "moderate", category: "Node.js", technology: "Node.js", type: "mcq",
    tags: ["modules", "exports"], estimatedTime: 55,
    realWorldUseCase: "Common cause of 'module not found' errors when exporting functions."
  },

  // --- Express.js Moderate (8) ---
  {
    question: "How do you implement error handling middleware in Express and what makes it different from regular middleware?",
    options: ["It has three parameters instead of four", "It has four parameters (err, req, res, next) and Express identifies it as error-handling middleware by the number of parameters", "It uses a different method like app.error()", "There is no special error middleware"],
    correctAnswer: "It has four parameters (err, req, res, next) and Express identifies it as error-handling middleware by the number of parameters",
    explanation: "Express identifies error-handling middleware by exactly 4 parameters: (err, req, res, next). Place it last with app.use() after all other routes.",
    difficulty: "moderate", category: "Express.js", technology: "Express.js", type: "mcq",
    tags: ["error-handling", "middleware"], estimatedTime: 55,
    realWorldUseCase: "Centralized error handler that formats all errors consistently as JSON."
  },
  {
    question: "What is the purpose of Helmet.js in an Express application?",
    options: ["It adds authentication to routes", "It sets secure HTTP headers to protect against common vulnerabilities like XSS, clickjacking, and MIME sniffing", "It compresses responses", "It handles CORS"],
    correctAnswer: "It sets secure HTTP headers to protect against common vulnerabilities like XSS, clickjacking, and MIME sniffing",
    explanation: "Helmet sets various HTTP response headers (X-XSS-Protection, X-Frame-Options, X-Content-Type-Options, etc.) that browsers use to enhance security.",
    difficulty: "moderate", category: "Express.js", technology: "Express.js", type: "mcq",
    tags: ["helmet", "security", "headers"], estimatedTime: 50,
    realWorldUseCase: "Protecting the quiz API from common web vulnerabilities."
  },
  {
    question: "How would you structure Express routes for a REST API with nested resources (e.g., /students/:studentId/attempts)?",
    options: ["Put everything in one file", "Use express.Router with mergeParams: true to access parent route params in child routers", "Hardcode all parameters in each route", "Use query strings instead"],
    correctAnswer: "Use express.Router with mergeParams: true to access parent route params in child routers",
    explanation: "Router({ mergeParams: true }) lets child routers access params defined in parent routes, enabling clean nested resource routing.",
    difficulty: "moderate", category: "Express.js", technology: "Express.js", type: "scenario",
    tags: ["routing", "REST", "nested-routes"], estimatedTime: 65,
    realWorldUseCase: "Building an API where admin can view /students/:id/attempts."
  },
  {
    question: "What is the difference between app.locals and res.locals in Express?",
    options: ["They are the same", "app.locals persists for the app's lifetime; res.locals is scoped to a single request-response cycle", "res.locals is for global variables", "app.locals is per-request"],
    correctAnswer: "app.locals persists for the app's lifetime; res.locals is scoped to a single request-response cycle",
    explanation: "app.locals stores data available to all templates for the app's lifetime (like app name). res.locals stores data only for the current request, passed between middleware.",
    difficulty: "moderate", category: "Express.js", technology: "Express.js", type: "mcq",
    tags: ["locals", "middleware-chain"], estimatedTime: 50,
    realWorldUseCase: "Storing the authenticated user in res.locals for use in subsequent middleware."
  },
  {
    question: "How do you implement request logging in production Express applications?",
    options: ["Use console.log in every route", "Use morgan middleware with a 'combined' format and stream logs to a file or log aggregator", "Log only errors to console", "Logging is not needed in production"],
    correctAnswer: "Use morgan middleware with a 'combined' format and stream logs to a file or log aggregator",
    explanation: "Morgan is an HTTP request logger middleware. In production, use 'combined' format and pipe logs to a log management service (Winston, CloudWatch, etc.).",
    difficulty: "moderate", category: "Express.js", technology: "Express.js", type: "scenario",
    tags: ["logging", "morgan", "production"], estimatedTime: 55,
    realWorldUseCase: "Tracking API usage and debugging issues in a deployed quiz platform."
  },
  {
    question: "A student makes 100 rapid quiz submissions. How do you prevent this on the backend?",
    options: ["Disable the submit button on frontend only", "Implement rate limiting per user ID on the submit endpoint using express-rate-limit", "Trust that students won't abuse the system", "Add a CAPTCHA to every request"],
    correctAnswer: "Implement rate limiting per user ID on the submit endpoint using express-rate-limit",
    explanation: "Frontend-only protection is easily bypassed. Backend rate limiting per user ID (not just IP, since students may share networks) is the correct defense.",
    difficulty: "moderate", category: "Express.js", technology: "Express.js", type: "scenario",
    tags: ["rate-limiting", "security", "abuse-prevention"], estimatedTime: 55,
    realWorldUseCase: "Preventing quiz score manipulation via automated submissions."
  },
  {
    question: "What is express-mongo-sanitize and why is it needed?",
    options: ["It validates MongoDB schemas", "It strips MongoDB operators ($, .) from user input to prevent NoSQL injection attacks", "It compresses MongoDB responses", "It formats MongoDB error messages"],
    correctAnswer: "It strips MongoDB operators ($, .) from user input to prevent NoSQL injection attacks",
    explanation: "Without sanitization, attackers can pass { $gt: '' } as a query value, manipulating MongoDB queries. mongo-sanitize removes these operators from req.body/params/query.",
    difficulty: "moderate", category: "Express.js", technology: "Express.js", type: "mcq",
    tags: ["security", "NoSQL-injection", "sanitization"], estimatedTime: 55,
    realWorldUseCase: "Preventing login bypass attacks using MongoDB operator injection."
  },
  {
    question: "How do you handle file uploads in Express.js?",
    options: ["Express handles uploads natively", "Use multer middleware to handle multipart/form-data and access files via req.file or req.files", "Use body-parser for file uploads", "Files must be base64 encoded in JSON"],
    correctAnswer: "Use multer middleware to handle multipart/form-data and access files via req.file or req.files",
    explanation: "Multer is a middleware for handling multipart/form-data (file uploads). It provides destination, filename, and filtering options, and attaches files to req.file.",
    difficulty: "moderate", category: "Express.js", technology: "Express.js", type: "mcq",
    tags: ["multer", "file-upload"], estimatedTime: 50,
    realWorldUseCase: "Allowing admins to upload bulk questions via CSV or Excel files."
  },

  // --- MongoDB Moderate (8) ---
  {
    question: "What is the MongoDB aggregation pipeline and when would you use it?",
    options: ["It's only for data export", "A multi-stage data processing pipeline where each stage transforms documents â€” used for complex queries, grouping, and analytics", "It replaces basic find() queries", "It's a migration tool"],
    correctAnswer: "A multi-stage data processing pipeline where each stage transforms documents â€” used for complex queries, grouping, and analytics",
    explanation: "The aggregation pipeline processes documents through stages like $match, $group, $sort, $project, enabling complex transformations and analytics that find() can't do.",
    difficulty: "moderate", category: "MongoDB", technology: "MongoDB", type: "mcq",
    tags: ["aggregation", "pipeline", "analytics"], estimatedTime: 60,
    realWorldUseCase: "Calculating average quiz scores per category for the admin analytics dashboard."
  },
  {
    question: "What is the $lookup stage in MongoDB aggregation?",
    options: ["It searches for text in documents", "It performs a left outer join with another collection, similar to SQL JOIN", "It indexes a field", "It looks up a document by ID"],
    correctAnswer: "It performs a left outer join with another collection, similar to SQL JOIN",
    explanation: "$lookup joins documents from another collection into the current aggregation pipeline, enabling SQL-like joins between MongoDB collections.",
    difficulty: "moderate", category: "MongoDB", technology: "MongoDB", type: "mcq",
    tags: ["aggregation", "lookup", "join"], estimatedTime: 55,
    realWorldUseCase: "Getting quiz attempts with populated student names in a single query."
  },
  {
    question: "How does Mongoose's .populate() work and what are its performance implications?",
    options: ["It compresses documents", ".populate() replaces ObjectId references with full documents via separate queries â€” multiple queries can impact performance on large datasets", "It's always more performant than aggregation", "It works like SQL foreign keys"],
    correctAnswer: ".populate() replaces ObjectId references with full documents via separate queries â€” multiple queries can impact performance on large datasets",
    explanation: "populate() issues a second query for each populated field. For simple use cases it's fine, but for analytics at scale, use $lookup in aggregation for a single query.",
    difficulty: "moderate", category: "MongoDB", technology: "MongoDB", type: "mcq",
    tags: ["populate", "performance", "references"], estimatedTime: 60,
    realWorldUseCase: "Deciding between populate() and $lookup for a quiz attempt list with 50 students."
  },
  {
    question: "What is a compound index in MongoDB and when should you create one?",
    options: ["An index that stores multiple databases", "An index on multiple fields â€” create one when queries filter by multiple fields together frequently", "An index with compression enabled", "A text search index"],
    correctAnswer: "An index on multiple fields â€” create one when queries filter by multiple fields together frequently",
    explanation: "Compound indexes cover queries that filter on multiple fields. { student: 1, status: 1 } serves queries like findOne({ student: id, status: 'completed' }) efficiently.",
    difficulty: "moderate", category: "MongoDB", technology: "MongoDB", type: "mcq",
    tags: ["indexes", "compound-index", "performance"], estimatedTime: 55,
    realWorldUseCase: "Optimizing the query for 'get all completed attempts by this student'."
  },
  {
    question: "What is the difference between $push and $addToSet in MongoDB updates?",
    options: ["They are identical", "$push adds an element regardless of duplicates; $addToSet adds only if the element doesn't already exist", "$addToSet is deprecated", "$push is atomic; $addToSet is not"],
    correctAnswer: "$push adds an element regardless of duplicates; $addToSet adds only if the element doesn't already exist",
    explanation: "$push always appends the element to an array. $addToSet ensures uniqueness by only adding if the value isn't already present.",
    difficulty: "moderate", category: "MongoDB", technology: "MongoDB", type: "mcq",
    tags: ["$push", "$addToSet", "arrays"], estimatedTime: 45,
    realWorldUseCase: "Adding unique tags to a question document without duplicates."
  },
  {
    question: "How do you implement pagination in MongoDB efficiently?",
    options: ["Load all documents and paginate in JavaScript", "Use .skip(page * limit).limit(limit) or cursor-based pagination with a range query on _id for large datasets", "Use $slice in aggregation", "Pagination is not needed with MongoDB"],
    correctAnswer: "Use .skip(page * limit).limit(limit) or cursor-based pagination with a range query on _id for large datasets",
    explanation: "skip+limit works for small datasets but becomes slow on large collections as MongoDB still scans skipped documents. Cursor-based pagination (_id > lastId) is O(log n).",
    difficulty: "moderate", category: "MongoDB", technology: "MongoDB", type: "scenario",
    tags: ["pagination", "performance", "queries"], estimatedTime: 60,
    realWorldUseCase: "Paginating 150 quiz questions in the admin panel."
  },
  {
    question: "What is a Mongoose virtual field?",
    options: ["A field stored in a separate collection", "A computed property that is not stored in MongoDB but is calculated from document fields on access", "A field with a virtual index", "An encrypted field"],
    correctAnswer: "A computed property that is not stored in MongoDB but is calculated from document fields on access",
    explanation: "Virtuals are document properties that don't get persisted to MongoDB. They're computed on the fly from other fields â€” useful for formatting or combining data.",
    difficulty: "moderate", category: "MongoDB", technology: "MongoDB", type: "mcq",
    tags: ["virtuals", "mongoose", "schema"], estimatedTime: 50,
    realWorldUseCase: "Computing a student's fullName from firstName and lastName without storing it separately."
  },
  {
    question: "What is the $sample stage in MongoDB aggregation and what are its limitations?",
    options: ["It samples CPU usage", "It randomly selects N documents from a collection â€” on collections with indexes, it may not be perfectly random for small N", "It creates a database backup", "It filters documents by criteria"],
    correctAnswer: "It randomly selects N documents from a collection â€” on collections with indexes, it may not be perfectly random for small N",
    explanation: "$sample efficiently selects random documents, but for small sample sizes it may use a non-uniform random selection algorithm. Use with awareness for quiz question selection.",
    difficulty: "moderate", category: "MongoDB", technology: "MongoDB", type: "mcq",
    tags: ["$sample", "aggregation", "random"], estimatedTime: 55,
    realWorldUseCase: "Randomly selecting 25 questions for each quiz attempt."
  },

  // --- Authentication & Security Moderate (8) ---
  {
    question: "How should you store JWT refresh tokens securely in a web application?",
    options: ["In localStorage for easy access", "In an httpOnly, Secure, SameSite=Strict cookie to prevent XSS and CSRF attacks", "In sessionStorage", "In the URL as a query parameter"],
    correctAnswer: "In an httpOnly, Secure, SameSite=Strict cookie to prevent XSS and CSRF attacks",
    explanation: "httpOnly prevents JavaScript access (XSS protection), Secure ensures HTTPS-only transmission, SameSite=Strict prevents CSRF. This combination is the most secure storage for refresh tokens.",
    difficulty: "moderate", category: "Authentication & Security", technology: "JWT", type: "scenario",
    tags: ["refresh-token", "cookies", "security"], estimatedTime: 60,
    realWorldUseCase: "Keeping students logged in securely across browser sessions."
  },
  {
    question: "What is a timing attack on password comparison and how does bcrypt prevent it?",
    options: ["It's an attack based on response time", "Timing attacks measure how long comparison takes â€” bcrypt.compare() uses constant-time comparison to prevent leaking password length information", "bcrypt doesn't prevent timing attacks", "It's a type of SQL injection"],
    correctAnswer: "Timing attacks measure how long comparison takes â€” bcrypt.compare() uses constant-time comparison to prevent leaking password length information",
    explanation: "Simple string comparison short-circuits at the first mismatch, leaking information through response time. bcrypt.compare() always takes the same amount of time regardless of match.",
    difficulty: "moderate", category: "Authentication & Security", technology: "Security", type: "mcq",
    tags: ["timing-attack", "bcrypt", "password"], estimatedTime: 65,
    realWorldUseCase: "Protecting user passwords from advanced password-guessing attacks."
  },
  {
    question: "What is CSRF (Cross-Site Request Forgery) and how do you prevent it in an API?",
    options: ["An XSS variant", "An attack where malicious sites trick authenticated users into making unwanted requests; prevented by using SameSite cookies, CSRF tokens, or checking Origin headers", "A MongoDB injection attack", "Rate limiting prevents CSRF"],
    correctAnswer: "An attack where malicious sites trick authenticated users into making unwanted requests; prevented by using SameSite cookies, CSRF tokens, or checking Origin headers",
    explanation: "CSRF exploits the browser's automatic cookie sending. Prevention: SameSite=Strict cookies, double-submit CSRF tokens, or verifying Origin/Referer headers.",
    difficulty: "moderate", category: "Authentication & Security", technology: "Security", type: "mcq",
    tags: ["CSRF", "security", "cookies"], estimatedTime: 65,
    realWorldUseCase: "Preventing malicious sites from submitting quiz answers on behalf of authenticated students."
  },
  {
    question: "How do you implement token rotation with refresh tokens?",
    options: ["Never change the refresh token", "Issue a new refresh token each time a refresh request is made and invalidate the old one", "Rotate tokens every hour with a cron job", "Use only access tokens"],
    correctAnswer: "Issue a new refresh token each time a refresh request is made and invalidate the old one",
    explanation: "Token rotation means each refresh request gets a new refresh token. If an attacker steals and uses a refresh token, the legitimate user's next use will fail, detecting the breach.",
    difficulty: "moderate", category: "Authentication & Security", technology: "JWT", type: "mcq",
    tags: ["token-rotation", "refresh-token", "security"], estimatedTime: 60,
    realWorldUseCase: "Detecting stolen refresh tokens in the student authentication system."
  },
  {
    question: "What is the principle of least privilege and how does it apply to your API?",
    options: ["Give all users admin access", "Users and services should have only the minimum permissions needed to perform their function", "It applies only to database access", "It means hiding API documentation"],
    correctAnswer: "Users and services should have only the minimum permissions needed to perform their function",
    explanation: "Students should only access their own data. Admins can access all data. APIs should reject requests that exceed the user's role, even if accidentally exposed.",
    difficulty: "moderate", category: "Authentication & Security", technology: "Security", type: "scenario",
    tags: ["RBAC", "least-privilege", "authorization"], estimatedTime: 55,
    realWorldUseCase: "Ensuring students cannot access other students' quiz results or admin functions."
  },
  {
    question: "What is NoSQL injection and how does it differ from SQL injection?",
    options: ["They are the same attack", "NoSQL injection uses operators ($where, $gt) in JSON to manipulate MongoDB queries instead of SQL syntax", "NoSQL databases can't be injected", "It targets the MongoDB server directly"],
    correctAnswer: "NoSQL injection uses operators ($where, $gt) in JSON to manipulate MongoDB queries instead of SQL syntax",
    explanation: "Instead of SQL UNION/DROP, NoSQL injection uses MongoDB operators. E.g., sending { 'email': { '$gt': '' } } as credentials can bypass password checks.",
    difficulty: "moderate", category: "Authentication & Security", technology: "Security", type: "mcq",
    tags: ["NoSQL-injection", "security", "MongoDB"], estimatedTime: 60,
    realWorldUseCase: "Protecting login endpoints from MongoDB operator injection attacks."
  },
  {
    question: "How do you securely hash passwords and what bcrypt cost factor is appropriate for production?",
    options: ["Use MD5 with salt", "Use bcrypt with cost factor 10-12 â€” balancing security (slow enough to deter attacks) with performance (fast enough for user experience)", "Use SHA-256 directly", "Store passwords as plain text and encrypt the database"],
    correctAnswer: "Use bcrypt with cost factor 10-12 â€” balancing security (slow enough to deter attacks) with performance (fast enough for user experience)",
    explanation: "Cost factor controls bcrypt's work. Factor 12 takes ~250ms â€” slow enough to make brute-force impractical but fast enough for login. Increase as hardware gets faster.",
    difficulty: "moderate", category: "Authentication & Security", technology: "bcrypt", type: "mcq",
    tags: ["bcrypt", "cost-factor", "password-hashing"], estimatedTime: 55,
    realWorldUseCase: "Choosing bcrypt rounds for the student registration endpoint."
  },
  {
    question: "What is JWT token expiry and how should you handle it gracefully on the frontend?",
    options: ["Let the user get a 401 error and re-login", "Implement an axios interceptor that catches 401 errors, uses the refresh token to get a new access token, then retries the original request", "Extend the access token lifetime", "Use only session cookies"],
    correctAnswer: "Implement an axios interceptor that catches 401 errors, uses the refresh token to get a new access token, then retries the original request",
    explanation: "Axios request interceptors can transparently refresh tokens. If a request gets 401 (token expired), the interceptor refreshes and retries, creating a seamless experience.",
    difficulty: "moderate", category: "Authentication & Security", technology: "JWT", type: "scenario",
    tags: ["axios-interceptor", "token-refresh", "UX"], estimatedTime: 65,
    realWorldUseCase: "Students not getting logged out mid-quiz due to token expiry."
  },

  // --- Problem Solving Moderate (5) ---
  {
    question: "Your quiz app needs to support 50 concurrent students all submitting at once. Which approach best handles this on the backend?",
    options: ["Use synchronous blocking code for reliability", "Use async/await with connection pooling (mongoose maxPoolSize), proper indexing, and ensure all handlers are non-blocking", "Create 50 server instances", "Handle requests one at a time in a queue"],
    correctAnswer: "Use async/await with connection pooling (mongoose maxPoolSize), proper indexing, and ensure all handlers are non-blocking",
    explanation: "Node.js handles concurrency via non-blocking I/O. Connection pooling prevents exhausting DB connections. Indexes ensure DB queries are fast even under load.",
    difficulty: "moderate", category: "Problem Solving", technology: "Node.js", type: "problem-solving",
    tags: ["concurrency", "scaling", "connection-pool"], estimatedTime: 70,
    realWorldUseCase: "Handling 50 students submitting their quiz at the end of a class session simultaneously."
  },
  {
    question: "A student submits the same quiz twice by double-clicking the submit button. How do you prevent duplicate submissions?",
    options: ["Handle it on the frontend only", "Disable the button after first click on frontend AND check for duplicate attempt status on backend before processing", "Use setTimeout to delay processing", "Let them submit twice and keep the better score"],
    correctAnswer: "Disable the button after first click on frontend AND check for duplicate attempt status on backend before processing",
    explanation: "Frontend-only prevention fails with multiple tabs or network retries. Backend must also verify the attempt isn't already 'completed' before processing.",
    difficulty: "moderate", category: "Problem Solving", technology: "Express.js", type: "problem-solving",
    tags: ["idempotency", "race-condition", "UX"], estimatedTime: 60,
    realWorldUseCase: "Preventing students from submitting quiz answers multiple times."
  },
  {
    question: "How would you implement a quiz timer that survives page refreshes?",
    options: ["Use JavaScript setInterval only", "Store startTime in the database when quiz begins, calculate remaining time on the server as (timeLimit - (now - startTime))", "Use localStorage only", "Reset timer on every refresh"],
    correctAnswer: "Store startTime in the database when quiz begins, calculate remaining time on the server as (timeLimit - (now - startTime))",
    explanation: "Client-side timers can be manipulated or lost on refresh. By storing startTime in DB, the server can always calculate the authoritative remaining time.",
    difficulty: "moderate", category: "Problem Solving", technology: "MongoDB", type: "problem-solving",
    tags: ["timer", "persistence", "security"], estimatedTime: 65,
    realWorldUseCase: "Preventing students from refreshing the page to reset their quiz timer."
  },
  {
    question: "You need to efficiently serve 150 questions in random order to 50 students without repeating the same pattern. What is the best database approach?",
    options: ["Sort all 150 questions and paginate", "Use MongoDB's $sample aggregation stage to randomly select 25 from each difficulty level server-side", "Load all 150 questions and shuffle in JavaScript", "Use a static random seed"],
    correctAnswer: "Use MongoDB's $sample aggregation stage to randomly select 25 from each difficulty level server-side",
    explanation: "$sample is MongoDB's efficient random selection. Doing it server-side avoids transferring 150 documents to the app server. Each student gets different questions.",
    difficulty: "moderate", category: "Problem Solving", technology: "MongoDB", type: "problem-solving",
    tags: ["$sample", "performance", "randomization"], estimatedTime: 60,
    realWorldUseCase: "Ensuring no two students in the same room see the same quiz question sequence."
  },
  {
    question: "The Gemini API call in your report generation is slow (5+ seconds). How do you improve the user experience?",
    options: ["Make users wait at the loading screen", "Trigger report generation asynchronously, show 'generating' status, and poll or use WebSocket to notify when ready", "Cache all reports upfront", "Skip AI report generation"],
    correctAnswer: "Trigger report generation asynchronously, show 'generating' status, and poll or use WebSocket to notify when ready",
    explanation: "Long-running operations should be async. Submit quiz â†’ save results â†’ redirect to results page (instant) â†’ trigger AI report in background â†’ show 'generating' with polling.",
    difficulty: "moderate", category: "Problem Solving", technology: "Node.js", type: "problem-solving",
    tags: ["async", "UX", "long-running-tasks"], estimatedTime: 70,
    realWorldUseCase: "Improving quiz result page UX when AI report generation takes time."
  },

  // --- Debugging Moderate (7) ---
  {
    question: "What is wrong with this Mongoose schema definition?\n\nconst userSchema = new Schema({\n  email: String,\n  password: String\n});\nconst User = mongoose.model('User', userSchema);\nconst user = new User({ email: 'test@test.com', password: '123' });\nawait user.save();",
    options: ["The schema is correct", "Passwords are stored in plain text â€” no hashing is applied before save", "The model name is incorrect", "await is not needed"],
    correctAnswer: "Passwords are stored in plain text â€” no hashing is applied before save",
    explanation: "Without a pre-save hook that hashes the password with bcrypt, passwords are stored as plain text, which is a critical security vulnerability.",
    difficulty: "moderate", category: "Debugging", technology: "MongoDB", type: "debugging",
    codeSnippet: "const userSchema = new Schema({\n  email: String,\n  password: String\n});\nawait new User({ email:'test@test.com', password:'123' }).save();",
    tags: ["security", "bcrypt", "password-hashing"], estimatedTime: 55,
    realWorldUseCase: "Identifying missing password hashing in user registration flow."
  },
  {
    question: "A React component is in an infinite loop. The code is:\n\nuseEffect(() => {\n  setData(processData(data));\n}, [data]);",
    options: ["setData is wrong", "Updating data in an effect that depends on data creates an infinite loop â€” use a ref or separate derived state", "processData is async", "useEffect doesn't accept arrays"],
    correctAnswer: "Updating data in an effect that depends on data creates an infinite loop â€” use a ref or separate derived state",
    explanation: "Every time data changes, the effect runs. The effect changes data, which triggers the effect again â€” infinite loop. Derive processed data with useMemo instead.",
    difficulty: "moderate", category: "Debugging", technology: "React", type: "debugging",
    codeSnippet: "useEffect(() => {\n  setData(processData(data));\n}, [data]);",
    tags: ["useEffect", "infinite-loop", "dependencies"], estimatedTime: 55,
    realWorldUseCase: "Infinite re-renders when processing fetched data in useEffect."
  },
  {
    question: "The following Express route always returns 'Not found' even for valid IDs:\n\nrouter.get('/:id', async (req, res) => {\n  const doc = await Model.findById(req.params.id);\n  if (!doc) return res.status(404).json({ msg: 'Not found' });\n  res.json(doc);\n});\n\nThe ID passed is valid. What could be wrong?",
    options: ["findById is deprecated", "The ID might be an invalid MongoDB ObjectId format, causing Mongoose to return null without error", "res.json is incorrect", "The route path is wrong"],
    correctAnswer: "The ID might be an invalid MongoDB ObjectId format, causing Mongoose to return null without error",
    explanation: "If the ID string isn't a valid 24-char hex ObjectId, Mongoose returns null instead of throwing. Add a CastError handler or validate the ID format before querying.",
    difficulty: "moderate", category: "Debugging", technology: "Express.js", type: "debugging",
    codeSnippet: "const doc = await Model.findById(req.params.id);\nif (!doc) return res.status(404).json({ msg: 'Not found' });",
    tags: ["ObjectId", "validation", "debugging"], estimatedTime: 60,
    realWorldUseCase: "API returning 404 when a valid attempt ID is passed from the frontend."
  },
  {
    question: "This Redux action dispatches but the component doesn't update. What's the likely bug?\n\nconst slice = createSlice({\n  initialState: { user: null },\n  reducers: {\n    setUser: (state, action) => {\n      state = { ...state, user: action.payload };\n    }\n  }\n});",
    options: ["createSlice is wrong", "The reducer reassigns 'state' directly instead of mutating it â€” Immer (used by Redux Toolkit) requires mutation or returning new state", "action.payload is wrong", "initialState format is invalid"],
    correctAnswer: "The reducer reassigns 'state' directly instead of mutating it â€” Immer (used by Redux Toolkit) requires mutation or returning new state",
    explanation: "In Redux Toolkit, you either mutate state directly (state.user = action.payload) or return a new object. Reassigning the state parameter itself doesn't work.",
    difficulty: "moderate", category: "Debugging", technology: "React", type: "debugging",
    codeSnippet: "setUser: (state, action) => {\n  state = { ...state, user: action.payload };\n}",
    tags: ["Redux", "Immer", "reducer"], estimatedTime: 60,
    realWorldUseCase: "Redux state not updating after a successful login action."
  },
  {
    question: "Your API returns correct data in Postman but the frontend gets a CORS error. What is the specific issue?",
    options: ["The API is broken", "Postman doesn't enforce CORS; the browser does. Your Express server is not sending the correct Access-Control-Allow-Origin header", "The frontend URL is wrong", "JSON is not properly formatted"],
    correctAnswer: "Postman doesn't enforce CORS; the browser does. Your Express server is not sending the correct Access-Control-Allow-Origin header",
    explanation: "Postman bypasses CORS as it's not a browser. The browser enforces CORS by checking response headers. Add cors() middleware with the correct origin to Express.",
    difficulty: "moderate", category: "Debugging", technology: "Express.js", type: "debugging",
    tags: ["CORS", "debugging", "browser-vs-postman"], estimatedTime: 55,
    realWorldUseCase: "Common confusion when testing APIs in Postman vs browser."
  },
  {
    question: "A student's quiz score shows as NaN. The calculation is:\n\nconst percentage = (correctAnswers / totalQuestions) * 100;",
    options: ["The formula is wrong", "Either correctAnswers or totalQuestions is undefined or NaN, possibly from an un-awaited async call or uninitialized state", "JavaScript doesn't support division", "percentage needs Math.round"],
    correctAnswer: "Either correctAnswers or totalQuestions is undefined or NaN, possibly from an un-awaited async call or uninitialized state",
    explanation: "Division with undefined/null gives NaN. Check that both variables are defined numbers. Common cause: async data not awaited or state not properly initialized.",
    difficulty: "moderate", category: "Debugging", technology: "Node.js", type: "debugging",
    codeSnippet: "const percentage = (correctAnswers / totalQuestions) * 100;",
    tags: ["NaN", "debugging", "undefined"], estimatedTime: 50,
    realWorldUseCase: "Score calculation breaking when quiz attempt data isn't fully loaded."
  },
  {
    question: "Your Next.js app deployed to production shows 'Error: getStaticPaths is required for dynamic routes'. What is the issue?",
    options: ["The route is wrong", "A dynamic route (like [id].js) using getStaticProps also needs getStaticPaths to specify which paths to pre-generate", "getStaticProps is deprecated", "Dynamic routes don't support static generation"],
    correctAnswer: "A dynamic route (like [id].js) using getStaticProps also needs getStaticPaths to specify which paths to pre-generate",
    explanation: "getStaticProps on a dynamic route needs getStaticPaths to know which [id] values to pre-render. Without it, Next.js can't know all possible paths at build time.",
    difficulty: "moderate", category: "Debugging", technology: "Next.js", type: "debugging",
    tags: ["getStaticPaths", "SSG", "dynamic-routes"], estimatedTime: 55,
    realWorldUseCase: "Pre-rendering individual quiz attempt result pages."
  },

  // ============================================================
  // HARD QUESTIONS (15)
  // ============================================================

  // --- React.js Hard (2) ---
  {
    question: "You are building a quiz component that needs to prevent re-renders for 25 question cards while the parent timer updates every second. Describe the complete optimization strategy.",
    options: ["Use React.lazy for each card", "Wrap QuestionCard in React.memo, memoize callback handlers with useCallback, and isolate timer state so it doesn't cause parent re-render that flows to cards", "Use class components for all cards", "Use useDeferredValue on the timer"],
    correctAnswer: "Wrap QuestionCard in React.memo, memoize callback handlers with useCallback, and isolate timer state so it doesn't cause parent re-render that flows to cards",
    explanation: "React.memo prevents re-renders if props are shallowly equal. useCallback ensures callback references are stable. Moving timer state to a separate TimerComponent (sibling, not parent of cards) prevents unnecessary prop changes to QuestionCards.",
    difficulty: "hard", category: "React.js", technology: "React", type: "scenario",
    tags: ["optimization", "memo", "useCallback", "performance"], estimatedTime: 120,
    realWorldUseCase: "Quiz interface where timer runs independently without causing 25 question cards to re-render every second."
  },
  {
    question: "Implement a React hook that syncs state to localStorage and handles SSR (where localStorage is unavailable). What edge cases must you handle?",
    options: ["Just wrap useState and add localStorage.setItem", "Handle: SSR (typeof window check), JSON parse errors for corrupted storage, cross-tab synchronization via storage event, and initial hydration mismatch", "Use useEffect to sync after mount only", "Use Next.js cookies instead"],
    correctAnswer: "Handle: SSR (typeof window check), JSON parse errors for corrupted storage, cross-tab synchronization via storage event, and initial hydration mismatch",
    explanation: "A production-ready useLocalStorage hook must: check if window exists (SSR), try-catch JSON.parse (corrupted data), listen to storage events (cross-tab sync), and use a function initializer in useState to avoid SSR hydration mismatches.",
    difficulty: "hard", category: "React.js", technology: "React", type: "problem-solving",
    tags: ["custom-hooks", "SSR", "localStorage", "hydration"], estimatedTime: 120,
    realWorldUseCase: "Persisting quiz state (current question index, draft answers) across page refreshes."
  },

  // --- Next.js Hard (2) ---
  {
    question: "A Next.js app with Server Components is fetching data in multiple nested components from the same database. Each makes a separate query. How do you optimize this?",
    options: ["Move all queries to the top-level page component", "Use React cache() to deduplicate identical requests, or fetch from a shared data access layer that batches and deduplicates queries per render", "Use getServerSideProps for all components", "Disable Server Components"],
    correctAnswer: "Use React cache() to deduplicate identical requests, or fetch from a shared data access layer that batches and deduplicates queries per render",
    explanation: "React's cache() function (available in Server Components) deduplicates fetch calls within a single render pass. Multiple components calling the same cached function only result in one actual database query.",
    difficulty: "hard", category: "Next.js", technology: "Next.js", type: "scenario",
    tags: ["server-components", "cache", "data-fetching", "optimization"], estimatedTime: 120,
    realWorldUseCase: "Dashboard page where multiple server components need the same student data."
  },
  {
    question: "How would you implement a secure, scalable authentication system in Next.js that works with both Server Components and Client Components?",
    options: ["Use only client-side JWT storage", "Use HttpOnly cookies for token storage, Next.js middleware to protect routes, server-side token verification in Server Components, and a client-side auth context that reads from a separate /api/me endpoint", "Store tokens in Redux", "Use a third-party auth service only"],
    correctAnswer: "Use HttpOnly cookies for token storage, Next.js middleware to protect routes, server-side token verification in Server Components, and a client-side auth context that reads from a separate /api/me endpoint",
    explanation: "Full-stack auth in Next.js: middleware.js reads and verifies the cookie for every protected request. Server Components can access the cookie directly via cookies(). Client Components hydrate auth state from /api/me called on mount.",
    difficulty: "hard", category: "Next.js", technology: "Next.js", type: "scenario",
    tags: ["auth", "middleware", "server-components", "security"], estimatedTime: 120,
    realWorldUseCase: "Protecting student quiz routes while allowing server-side session verification."
  },

  // --- Node.js Hard (2) ---
  {
    question: "Your Node.js quiz server is experiencing memory leaks in production. How do you diagnose and resolve them?",
    options: ["Restart the server frequently", "Use Node.js --inspect with Chrome DevTools heap snapshots to identify retained objects, check for unclosed event listeners, circular references, or growing global state", "Add more RAM to the server", "Reduce the number of API endpoints"],
    correctAnswer: "Use Node.js --inspect with Chrome DevTools heap snapshots to identify retained objects, check for unclosed event listeners, circular references, or growing global state",
    explanation: "Heap snapshots in Chrome DevTools reveal what's consuming memory. Common leak causes: event listeners not removed (EventEmitter leak), closures holding references, or in-memory caches growing unbounded.",
    difficulty: "hard", category: "Node.js", technology: "Node.js", type: "problem-solving",
    tags: ["memory-leak", "debugging", "profiling", "production"], estimatedTime: 120,
    realWorldUseCase: "Diagnosing gradual memory growth in a production quiz server that serves 50 students daily."
  },
  {
    question: "Design a Node.js job queue for generating Gemini AI reports after quiz submission without blocking the response. What technologies and patterns would you use?",
    options: ["Use setTimeout for delays", "Use a message queue (Bull/BullMQ with Redis), process jobs in worker threads, implement retry logic with exponential backoff, and use webhooks or SSE to notify the frontend when complete", "Generate reports synchronously in the request handler", "Use Promise.all for parallelism"],
    correctAnswer: "Use a message queue (Bull/BullMQ with Redis), process jobs in worker threads, implement retry logic with exponential backoff, and use webhooks or SSE to notify the frontend when complete",
    explanation: "Bull queue: submit quiz â†’ enqueue report job â†’ return 202 Accepted immediately. Worker picks up job, calls Gemini API, saves report, emits event. Retry with backoff handles API failures. Frontend polls or receives SSE notification.",
    difficulty: "hard", category: "Node.js", technology: "Node.js", type: "problem-solving",
    tags: ["job-queue", "Bull", "async-processing", "architecture"], estimatedTime: 120,
    realWorldUseCase: "Non-blocking AI report generation after 50 simultaneous quiz submissions."
  },

  // --- Express.js Hard (2) ---
  {
    question: "How would you design a comprehensive API versioning strategy for the quiz platform that supports backward compatibility?",
    options: ["Change the base URL when needed", "Use URL path versioning (/api/v1/, /api/v2/), implement a version negotiation middleware, maintain version-specific controllers, and deprecate gracefully with Sunset headers", "Version all responses manually", "Avoid versioning"],
    correctAnswer: "Use URL path versioning (/api/v1/, /api/v2/), implement a version negotiation middleware, maintain version-specific controllers, and deprecate gracefully with Sunset headers",
    explanation: "URL versioning is most visible and cacheable. Middleware reads the version from the path and routes to appropriate controller. Shared models, version-specific response shapes. Sunset header warns clients of deprecation dates.",
    difficulty: "hard", category: "Express.js", technology: "Express.js", type: "scenario",
    tags: ["API-versioning", "architecture", "backward-compatibility"], estimatedTime: 120,
    realWorldUseCase: "Rolling out a new quiz format without breaking existing student clients."
  },
  {
    question: "Implement a real-time quiz feature where admin can see student progress live. What is the most appropriate architecture?",
    options: ["Poll every second with REST", "Use WebSockets (Socket.io) on the server, have students emit events on each question answer, and broadcast aggregated progress to the admin room with rate limiting", "Use Server-Sent Events only", "Use GraphQL subscriptions with a third-party service"],
    correctAnswer: "Use WebSockets (Socket.io) on the server, have students emit events on each question answer, and broadcast aggregated progress to the admin room with rate limiting",
    explanation: "Socket.io handles WebSocket with fallbacks. Students join a quiz room, emit answer events (rate-limited to prevent spam). Server aggregates and broadcasts summary to admin room. Redis adapter needed for multiple Node.js instances.",
    difficulty: "hard", category: "Express.js", technology: "Express.js", type: "scenario",
    tags: ["WebSockets", "Socket.io", "real-time", "architecture"], estimatedTime: 120,
    realWorldUseCase: "Admin monitoring a live class quiz session with 50 students."
  },

  // --- MongoDB Hard (2) ---
  {
    question: "Design a MongoDB schema for the quiz platform that handles 50+ students, tracks attempts, and supports fast analytics queries. What are the key schema design decisions?",
    options: ["Store everything in one giant document", "Use separate collections with strategic denormalization â€” embed question results in attempts (read-heavy) but reference questions (to allow updates). Add compound indexes for common query patterns.", "Use fully normalized references everywhere", "Store analytics in separate SQL database"],
    correctAnswer: "Use separate collections with strategic denormalization â€” embed question results in attempts (read-heavy) but reference questions (to allow updates). Add compound indexes for common query patterns.",
    explanation: "Embed question results in QuizAttempt for fast read (no join needed to show results). Reference Question documents (not embed) so question updates don't require updating all attempts. Compound index { student: 1, status: 1, createdAt: -1 } for dashboard queries.",
    difficulty: "hard", category: "MongoDB", technology: "MongoDB", type: "scenario",
    tags: ["schema-design", "denormalization", "indexes", "performance"], estimatedTime: 120,
    realWorldUseCase: "Designing the core data model for the quiz platform that's fast for both students and admin analytics."
  },
  {
    question: "Write a MongoDB aggregation pipeline that shows each student's improvement trend over their last 5 quiz attempts, including category-level performance change.",
    options: ["Use find() with a loop in JavaScript", "Use $lookup to join students, $match for last 5 attempts, $group to calculate per-attempt and per-category stats, $setWindowFields for trend calculation, $sort for temporal ordering", "Use multiple separate queries and join in JavaScript", "MongoDB can't compute trends"],
    correctAnswer: "Use $lookup to join students, $match for last 5 attempts, $group to calculate per-attempt and per-category stats, $setWindowFields for trend calculation, $sort for temporal ordering",
    explanation: "$match filters per-student last 5 attempts. $unwind categoryBreakdown. $group computes avg per category per attempt. $setWindowFields (MongoDB 5+) calculates running averages for trend analysis. All in one pipeline, no JavaScript post-processing.",
    difficulty: "hard", category: "MongoDB", technology: "MongoDB", type: "problem-solving",
    tags: ["aggregation", "analytics", "trend-analysis", "$setWindowFields"], estimatedTime: 120,
    realWorldUseCase: "Admin analytics showing student improvement graphs over time."
  },

  // --- Authentication & Security Hard (1) ---
  {
    question: "A student finds they can access other students' quiz results by changing the attempt ID in the API URL. The JWT is valid. What went wrong and how do you fix it comprehensively?",
    options: ["This is expected behavior", "Missing ownership check â€” the controller only verifies authentication (valid JWT) but not authorization (does this user own this resource). Fix: always query with both resource ID AND req.user._id", "The JWT is too weak", "Use POST instead of GET"],
    correctAnswer: "Missing ownership check â€” the controller only verifies authentication (valid JWT) but not authorization (does this user own this resource). Fix: always query with both resource ID AND req.user._id",
    explanation: "This is an IDOR (Insecure Direct Object Reference) vulnerability â€” OWASP #1. Fix: QuizAttempt.findOne({ _id: attemptId, student: req.user._id }) ensures users can only access their own data. Add this pattern everywhere user-owned resources are accessed.",
    difficulty: "hard", category: "Authentication & Security", technology: "Security", type: "scenario",
    tags: ["IDOR", "authorization", "OWASP", "security"], estimatedTime: 120,
    realWorldUseCase: "A critical security fix preventing students from seeing each other's quiz results."
  },

  // --- Problem Solving Hard (1) ---
  {
    question: "The quiz platform needs to generate a 100-page PDF report for all 50 students with charts and analysis. This takes 3 minutes to generate. How do you architect this feature?",
    options: ["Generate synchronously and make users wait", "Implement: async job queue (Bull), a dedicated worker process for PDF generation using Puppeteer, progress tracking via Redis, email notification with download link when complete, and CDN storage for generated PDFs", "Use a third-party PDF service only", "Limit report to 5 pages"],
    correctAnswer: "Implement: async job queue (Bull), a dedicated worker process for PDF generation using Puppeteer, progress tracking via Redis, email notification with download link when complete, and CDN storage for generated PDFs",
    explanation: "Long-running tasks need: async queue for job management, dedicated workers (separate process) to avoid blocking the main server, Redis for progress state, email/webhook for completion notification, cloud storage (S3) for generated PDFs with signed URLs.",
    difficulty: "hard", category: "Problem Solving", technology: "Node.js", type: "problem-solving",
    tags: ["job-queue", "PDF-generation", "architecture", "async"], estimatedTime: 120,
    realWorldUseCase: "Generating end-of-semester comprehensive PDF reports for BVoc students."
  },

  // --- Debugging Hard (1) ---
  {
    question: "In production, some quiz submissions succeed but scores are calculated incorrectly â€” sometimes higher than actual correct answers. The bug only appears under concurrent load. What is the most likely cause?",
    options: ["A JavaScript calculation error", "A race condition: multiple concurrent submissions are reading and writing the user's average score non-atomically, causing lost updates. Fix: use MongoDB atomic operations ($inc) and findOneAndUpdate instead of read-modify-write patterns", "The Gemini API is altering scores", "The database indexes are corrupted"],
    correctAnswer: "A race condition: multiple concurrent submissions are reading and writing the user's average score non-atomically, causing lost updates. Fix: use MongoDB atomic operations ($inc) and findOneAndUpdate instead of read-modify-write patterns",
    explanation: "Classic race condition: Student A reads averageScore=70, Student B reads averageScore=70 simultaneously. Both calculate and write new averages, and one overwrites the other's update. MongoDB's $inc and $set in findOneAndUpdate are atomic, preventing this.",
    difficulty: "hard", category: "Debugging", technology: "MongoDB", type: "debugging",
    tags: ["race-condition", "concurrency", "atomic-operations", "production"], estimatedTime: 120,
    realWorldUseCase: "Diagnosing and fixing incorrect score statistics under concurrent quiz submissions."
  },

  // --- React.js Hard (extra to reach 15 total hard) ---
  {
    question: "You need to build a quiz platform where 50 students open the same quiz page simultaneously. The state architecture must handle: live question navigation, answer selections, a countdown timer, and submit â€” all without performance degradation. What is the optimal React state architecture?",
    options: [
      "Use a single large useState object for all quiz state",
      "Combine Redux for shared server-synced state (attemptId, questions), useReducer for quiz flow (currentIndex, answers), and a dedicated isolated Timer component with its own useRef/setInterval to avoid triggering parent re-renders",
      "Use React Context for all state and re-render on every tick",
      "Use localStorage as the primary state store"
    ],
    correctAnswer: "Combine Redux for shared server-synced state (attemptId, questions), useReducer for quiz flow (currentIndex, answers), and a dedicated isolated Timer component with its own useRef/setInterval to avoid triggering parent re-renders",
    explanation: "State colocation is key: Redux for data that needs persistence (attemptId, questions from API). useReducer for complex local transitions (answer selection, navigation). Timer lives in its own isolated component so its state updates (every second) don't cascade into re-rendering all 25 question cards.",
    difficulty: "hard", category: "React.js", technology: "React", type: "scenario",
    tags: ["state-architecture", "performance", "Redux", "useReducer", "timer"], estimatedTime: 120,
    realWorldUseCase: "Designing the state layer of a concurrent quiz platform for 50 students."
  },
  {
    question: "A Next.js application fetches quiz questions on the server and renders them. After deployment, you notice the build-time rendered questions are stale â€” new questions added in the admin panel don't appear for hours. Students in different regions get different data. What architectural changes are needed?",
    options: [
      "Switch entirely to client-side rendering",
      "Use ISR (Incremental Static Regeneration) with revalidate: 60 for the questions page, implement on-demand revalidation via a webhook from the admin panel using revalidatePath(), and use a CDN with stale-while-revalidate cache headers",
      "Rebuild and redeploy after every question update",
      "Use getServerSideProps for all pages to avoid staleness"
    ],
    correctAnswer: "Use ISR (Incremental Static Regeneration) with revalidate: 60 for the questions page, implement on-demand revalidation via a webhook from the admin panel using revalidatePath(), and use a CDN with stale-while-revalidate cache headers",
    explanation: "ISR with revalidate: 60 means pages are at most 60s stale. On-demand revalidation via revalidatePath('/quiz') in a Next.js API route (called by admin panel webhook) immediately regenerates the page when questions are updated. CDN caching ensures global consistency.",
    difficulty: "hard", category: "Next.js", technology: "Next.js", type: "scenario",
    tags: ["ISR", "revalidation", "CDN", "on-demand-revalidation", "caching"], estimatedTime: 120,
    realWorldUseCase: "Keeping quiz question pages fresh across global CDN nodes when admin adds new questions."
  },


  {
    question: "5 machines make 5 parts in 5 minutes. How long would it take 100 machines to make 100 parts?",
    options: ["100 minutes","50 minutes","5 minutes","10 minutes"],
    correctAnswer: "5 minutes",
    explanation: "The correct option is \"5 minutes\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["machines-work","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "3 workers paint 3 walls in 3 hours. How long does it take 9 workers to paint 9 walls?",
    options: ["9 hours","1 hour","3 hours","27 hours"],
    correctAnswer: "3 hours",
    explanation: "The correct option is \"3 hours\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["machines-work","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "If 4 men can dig 4 holes in 4 days, how many days would it take 1 man to dig 1 hole?",
    options: ["1 day","16 days","4 days","8 days"],
    correctAnswer: "4 days",
    explanation: "The correct option is \"4 days\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["machines-work","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "6 printers print 6 pages in 6 seconds. How long to print 60 pages with 60 printers?",
    options: ["60 seconds","6 seconds","10 seconds","1 second"],
    correctAnswer: "6 seconds",
    explanation: "The correct option is \"6 seconds\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["machines-work","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "2 taps fill 2 tanks in 2 hours. How many hours for 8 taps to fill 8 tanks?",
    options: ["8 hours","4 hours","1 hour","2 hours"],
    correctAnswer: "2 hours",
    explanation: "The correct option is \"2 hours\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["machines-work","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "If 10 workers build 10 houses in 10 months, how long for 1 worker to build 1 house?",
    options: ["1 month","10 months","100 months","12 months"],
    correctAnswer: "10 months",
    explanation: "The correct option is \"10 months\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["machines-work","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A factory has 8 robots making 8 toys in 8 minutes. How long for 4 robots to make 4 toys?",
    options: ["4 minutes","16 minutes","8 minutes","2 minutes"],
    correctAnswer: "8 minutes",
    explanation: "The correct option is \"8 minutes\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["machines-work","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "If 6 bakers bake 6 cakes in 6 hours, how many cakes do 12 bakers bake in 12 hours?",
    options: ["12 cakes","24 cakes","144 cakes","72 cakes"],
    correctAnswer: "24 cakes",
    explanation: "The correct option is \"24 cakes\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["machines-work","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "5 pumps empty 5 pools in 5 days. How many days for 1 pump to empty 1 pool?",
    options: ["1 day","25 days","5 days","10 days"],
    correctAnswer: "5 days",
    explanation: "The correct option is \"5 days\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["machines-work","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A machine produces 100 items in 100 seconds. How many items does it produce in 1 second?",
    options: ["100","10","1","0.1"],
    correctAnswer: "1",
    explanation: "The correct option is \"1\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "hard",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["machines-work","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "If 20 workers finish a job in 20 days, how many workers are needed to finish it in 10 days?",
    options: ["10 workers","30 workers","40 workers","20 workers"],
    correctAnswer: "40 workers",
    explanation: "The correct option is \"40 workers\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["machines-work","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "3 machines fill 300 bottles in 6 minutes. How long for 1 machine to fill 100 bottles?",
    options: ["2 minutes","6 minutes","18 minutes","9 minutes"],
    correctAnswer: "2 minutes",
    explanation: "The correct option is \"2 minutes\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["machines-work","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "7 cooks prepare a meal for 7 people in 1 hour. How long for 7 cooks to prepare a meal for 49 people?",
    options: ["1 hour","7 hours","3.5 hours","49 hours"],
    correctAnswer: "7 hours",
    explanation: "The correct option is \"7 hours\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["machines-work","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "If a tap fills a tank in 10 minutes alone and another fills it in 10 minutes alone, how long together?",
    options: ["20 minutes","10 minutes","5 minutes","2 minutes"],
    correctAnswer: "5 minutes",
    explanation: "The correct option is \"5 minutes\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["machines-work","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A car travels 60 km in 1 hour. How far does it travel in 30 minutes at the same speed?",
    options: ["60 km","15 km","30 km","45 km"],
    correctAnswer: "30 km",
    explanation: "The correct option is \"30 km\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["machines-work","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "If 1 man digs a hole in 1 day, how long does it take 0 men to dig a hole?",
    options: ["Never — impossible","0 days","2 days","1 day"],
    correctAnswer: "Never — impossible",
    explanation: "The correct option is \"Never — impossible\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["machines-work","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A tank fills in 12 minutes with tap A alone. Tap B alone fills it in 6 minutes. How long together?",
    options: ["9 minutes","4 minutes","3 minutes","18 minutes"],
    correctAnswer: "4 minutes",
    explanation: "The correct option is \"4 minutes\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["machines-work","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "If 5 workers complete a task in 8 hours, how many workers are needed to complete it in 4 hours?",
    options: ["8","10","12","15"],
    correctAnswer: "10",
    explanation: "The correct option is \"10\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["machines-work","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A pipe fills a pool in 20 min. A drain empties it in 30 min. Both open — how long to fill the pool?",
    options: ["50 minutes","60 minutes","25 minutes","10 minutes"],
    correctAnswer: "60 minutes",
    explanation: "The correct option is \"60 minutes\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["machines-work","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "12 men can build a wall in 8 days. How many men are needed to build it in 6 days?",
    options: ["14","16","18","20"],
    correctAnswer: "16",
    explanation: "The correct option is \"16\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "hard",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["machines-work","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A car travels at 60km/h for 2 hours and 90km/h for 1 hour. What is the average speed for the whole trip?",
    options: ["70 km/h","75 km/h","80 km/h","65 km/h"],
    correctAnswer: "70 km/h",
    explanation: "The correct option is \"70 km/h\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["machines-work","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "If you travel 120 km at 60 km/h, how long does the trip take?",
    options: ["1 hour","1.5 hours","2 hours","2.5 hours"],
    correctAnswer: "2 hours",
    explanation: "The correct option is \"2 hours\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["machines-work","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A car uses 8 litres of fuel per 100 km. How much fuel for a 250 km trip?",
    options: ["16 litres","20 litres","24 litres","25 litres"],
    correctAnswer: "20 litres",
    explanation: "The correct option is \"20 litres\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["machines-work","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What comes next? 2, 4, 8, 16, 32, ___",
    options: ["48","56","64","72"],
    correctAnswer: "64",
    explanation: "The correct option is \"64\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What is the missing number? 1, 4, 9, 16, ___, 36",
    options: ["20","25","22","28"],
    correctAnswer: "25",
    explanation: "The correct option is \"25\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Complete the series: 3, 6, 9, 12, ___",
    options: ["14","15","16","18"],
    correctAnswer: "15",
    explanation: "The correct option is \"15\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What comes next? 1, 1, 2, 3, 5, 8, ___",
    options: ["11","12","13","14"],
    correctAnswer: "13",
    explanation: "The correct option is \"13\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Find the pattern: 100, 90, 81, 73, 66, ___",
    options: ["58","60","61","59"],
    correctAnswer: "60",
    explanation: "The correct option is \"60\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What comes next? 2, 6, 12, 20, 30, ___",
    options: ["40","42","44","45"],
    correctAnswer: "42",
    explanation: "The correct option is \"42\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Fill in: 5, 10, 20, 40, ___",
    options: ["60","80","70","100"],
    correctAnswer: "80",
    explanation: "The correct option is \"80\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "hard",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What is missing? 2, 5, 11, 23, ___, 95",
    options: ["45","47","46","48"],
    correctAnswer: "47",
    explanation: "The correct option is \"47\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Next in series: 7, 14, 21, 28, ___",
    options: ["33","35","36","34"],
    correctAnswer: "35",
    explanation: "The correct option is \"35\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What is the pattern? 1, 2, 4, 7, 11, 16, ___",
    options: ["20","22","23","21"],
    correctAnswer: "22",
    explanation: "The correct option is \"22\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Complete: 81, 27, 9, 3, ___",
    options: ["1","0","2","-1"],
    correctAnswer: "1",
    explanation: "The correct option is \"1\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What comes next? 0, 3, 8, 15, 24, ___",
    options: ["34","35","36","33"],
    correctAnswer: "35",
    explanation: "The correct option is \"35\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Series: 10, 9, 7, 4, 0, ___",
    options: ["-4","-3","-5","-6"],
    correctAnswer: "-5",
    explanation: "The correct option is \"-5\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What's missing? 4, 9, 16, 25, ___, 49",
    options: ["30","36","32","38"],
    correctAnswer: "36",
    explanation: "The correct option is \"36\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Find next: 1, 3, 7, 15, 31, ___",
    options: ["63","62","60","64"],
    correctAnswer: "63",
    explanation: "The correct option is \"63\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What comes next? 1000, 100, 10, ___",
    options: ["5","0","1","2"],
    correctAnswer: "1",
    explanation: "The correct option is \"1\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Complete: 2, 3, 5, 7, 11, 13, ___",
    options: ["15","17","14","19"],
    correctAnswer: "17",
    explanation: "The correct option is \"17\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "hard",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Series: 144, 121, 100, 81, ___",
    options: ["69","64","72","60"],
    correctAnswer: "64",
    explanation: "The correct option is \"64\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Next value: 3, 9, 27, 81, ___",
    options: ["162","243","324","270"],
    correctAnswer: "243",
    explanation: "The correct option is \"243\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Fill in: 1, 8, 27, 64, ___",
    options: ["100","125","120","110"],
    correctAnswer: "125",
    explanation: "The correct option is \"125\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What's next? 5, 10, 17, 26, 37, ___",
    options: ["48","50","51","49"],
    correctAnswer: "50",
    explanation: "The correct option is \"50\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What is 25% of 200?",
    options: ["25","50","75","100"],
    correctAnswer: "50",
    explanation: "The correct option is \"50\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "If a number is doubled and the result is 84, what is the original number?",
    options: ["42","46","48","38"],
    correctAnswer: "42",
    explanation: "The correct option is \"42\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "The sum of two numbers is 30 and their difference is 10. What are the two numbers?",
    options: ["20 and 10","25 and 5","15 and 15","18 and 12"],
    correctAnswer: "20 and 10",
    explanation: "The correct option is \"20 and 10\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A number is 3 more than twice another. Together they are 18. Find both numbers.",
    options: ["5 and 13","4 and 14","6 and 12","7 and 11"],
    correctAnswer: "5 and 13",
    explanation: "The correct option is \"5 and 13\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "If you add 1/3 and 1/4, what do you get?",
    options: ["1/7","2/7","7/12","5/12"],
    correctAnswer: "7/12",
    explanation: "The correct option is \"7/12\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A price increases from $80 to $100. What is the percentage increase?",
    options: ["20%","25%","15%","30%"],
    correctAnswer: "25%",
    explanation: "The correct option is \"25%\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "hard",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What is the square root of 169?",
    options: ["11","12","13","14"],
    correctAnswer: "13",
    explanation: "The correct option is \"13\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Three consecutive numbers sum to 48. What is the middle number?",
    options: ["14","15","16","17"],
    correctAnswer: "16",
    explanation: "The correct option is \"16\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A shop gives 20% discount. If the original price is $150, what do you pay?",
    options: ["$130","$120","$110","$100"],
    correctAnswer: "$120",
    explanation: "The correct option is \"$120\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "If X is 40% of 80, what is X?",
    options: ["28","30","32","36"],
    correctAnswer: "32",
    explanation: "The correct option is \"32\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What is 15% of 60?",
    options: ["6","7","8","9"],
    correctAnswer: "9",
    explanation: "The correct option is \"9\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "If a dozen eggs costs $2.40, how much does 1 egg cost?",
    options: ["20 cents","22 cents","24 cents","18 cents"],
    correctAnswer: "20 cents",
    explanation: "The correct option is \"20 cents\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "How many seconds are in 2 hours?",
    options: ["3600","5400","7200","10800"],
    correctAnswer: "7200",
    explanation: "The correct option is \"7200\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A number multiplied by itself gives 144. What is the number?",
    options: ["11","12","13","14"],
    correctAnswer: "12",
    explanation: "The correct option is \"12\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What is the LCM of 4 and 6?",
    options: ["12","8","24","6"],
    correctAnswer: "12",
    explanation: "The correct option is \"12\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "If 30% of a number is 45, what is the number?",
    options: ["100","135","150","120"],
    correctAnswer: "150",
    explanation: "The correct option is \"150\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "hard",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A rectangle is 8cm long and 5cm wide. What is its area?",
    options: ["26 cm²","30 cm²","40 cm²","13 cm²"],
    correctAnswer: "40 cm²",
    explanation: "The correct option is \"40 cm²\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "How many odd numbers are between 1 and 20 (not including 1 and 20)?",
    options: ["8","9","10","7"],
    correctAnswer: "9",
    explanation: "The correct option is \"9\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["number-patterns","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "If you have a 3-litre jug and a 5-litre jug, how do you measure exactly 4 litres?",
    options: ["Fill 5L, pour into 3L, empty 3L, pour remaining 2L into 3L, refill 5L, top up 3L — 4L remains in 5L jug","It's impossible","Fill both jugs halfway","Fill 3L jug and add to 5L jug twice"],
    correctAnswer: "Fill 5L, pour into 3L, empty 3L, pour remaining 2L into 3L, refill 5L, top up 3L — 4L remains in 5L jug",
    explanation: "The correct option is \"Fill 5L, pour into 3L, empty 3L, pour remaining 2L into 3L, refill 5L, top up 3L — 4L remains in 5L jug\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A farmer has 17 sheep. All but 9 die. How many sheep are left?",
    options: ["8","0","9","17"],
    correctAnswer: "9",
    explanation: "The correct option is \"9\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A rooster lays an egg on top of a triangular roof. Which side does it roll down?",
    options: ["The steeper side","The flatter side","Straight down the middle","Roosters don't lay eggs"],
    correctAnswer: "Roosters don't lay eggs",
    explanation: "The correct option is \"Roosters don't lay eggs\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "How many months have 28 days?",
    options: ["1","2","4","12"],
    correctAnswer: "12",
    explanation: "The correct option is \"12\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "You're in a room with 3 light switches, one controls a bulb in another room. You can only visit once. How do you find the right switch?",
    options: ["Flip all three and guess","Turn on switch 1 for a few minutes, turn it off, turn on switch 2, enter the room — warm but off = switch 1, on = switch 2, cold and off = switch 3","You can't solve it","Keep flipping until someone tells you"],
    correctAnswer: "Turn on switch 1 for a few minutes, turn it off, turn on switch 2, enter the room — warm but off = switch 1, on = switch 2, cold and off = switch 3",
    explanation: "The correct option is \"Turn on switch 1 for a few minutes, turn it off, turn on switch 2, enter the room — warm but off = switch 1, on = switch 2, cold and off = switch 3\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "If you overtake the person in 2nd place in a race, what place are you in?",
    options: ["1st place","2nd place","3rd place","It depends on the race"],
    correctAnswer: "2nd place",
    explanation: "The correct option is \"2nd place\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "I have two coins totalling 30 cents. One is not a nickel. What are the two coins?",
    options: ["Two dimes and a penny","A quarter and a nickel","Two nickels","A quarter and two pennies"],
    correctAnswer: "A quarter and a nickel",
    explanation: "The correct option is \"A quarter and a nickel\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Before Mount Everest was discovered, what was the tallest mountain in the world?",
    options: ["K2","Kangchenjunga","Mount Everest — it was always the tallest, just undiscovered","Denali"],
    correctAnswer: "Mount Everest — it was always the tallest, just undiscovered",
    explanation: "The correct option is \"Mount Everest — it was always the tallest, just undiscovered\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "hard",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A man builds a house with all four walls facing south. A bear walks by. What color is the bear?",
    options: ["Brown","Black","White","Gray"],
    correctAnswer: "White",
    explanation: "The correct option is \"White\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "If there are 3 apples and you take away 2, how many apples do you have?",
    options: ["1","2","3","0"],
    correctAnswer: "2",
    explanation: "The correct option is \"2\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A doctor gives you 3 pills and says take one every half hour. How long until the pills are gone?",
    options: ["1.5 hours","1 hour","90 minutes","2 hours"],
    correctAnswer: "1 hour",
    explanation: "The correct option is \"1 hour\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A bat and ball together cost $1.10. The bat costs $1 more than the ball. How much does the ball cost?",
    options: ["10 cents","5 cents","15 cents","1 cent"],
    correctAnswer: "5 cents",
    explanation: "The correct option is \"5 cents\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "How many birthdays does the average person have?",
    options: ["Depends on age","One","12","365"],
    correctAnswer: "One",
    explanation: "The correct option is \"One\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Two fathers and two sons go fishing. Each catches one fish. Only 3 fish are caught. How?",
    options: ["One fish was thrown back","There are only 3 people: grandfather, father, and son","Two people didn't catch any","The question is wrong"],
    correctAnswer: "There are only 3 people: grandfather, father, and son",
    explanation: "The correct option is \"There are only 3 people: grandfather, father, and son\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A man is looking at a portrait. \"Brothers and sisters I have none, but this man's father is my father's son.\" Whose portrait is it?",
    options: ["His own portrait","His son","His father","His brother"],
    correctAnswer: "His son",
    explanation: "The correct option is \"His son\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "You are in a dark room with a candle, a wood stove, and a gas lamp. You have one match. What do you light first?",
    options: ["The candle","The wood stove","The gas lamp","The match"],
    correctAnswer: "The match",
    explanation: "The correct option is \"The match\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "How can you make the number 7 even without math operations?",
    options: ["Write it backwards","It's impossible","Remove the 'S' from SEVEN → EVEN","Round it down to 6"],
    correctAnswer: "Remove the 'S' from SEVEN → EVEN",
    explanation: "The correct option is \"Remove the 'S' from SEVEN → EVEN\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A plane crashes on the border of Canada and the USA. Where do they bury the survivors?",
    options: ["Canada","USA","Both countries","You don't bury survivors"],
    correctAnswer: "You don't bury survivors",
    explanation: "The correct option is \"You don't bury survivors\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "hard",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What has hands but can't clap?",
    options: ["A mannequin","A clock","A statue","A scarecrow"],
    correctAnswer: "A clock",
    explanation: "The correct option is \"A clock\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What has teeth but can't bite?",
    options: ["A saw","A shark","A comb","A zipper"],
    correctAnswer: "A comb",
    explanation: "The correct option is \"A comb\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What gets wetter the more it dries?",
    options: ["A sponge","A towel","Rain","A fish"],
    correctAnswer: "A towel",
    explanation: "The correct option is \"A towel\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What walks on 4 legs in the morning, 2 at noon, and 3 in the evening?",
    options: ["A crab","A bear","A human","A horse"],
    correctAnswer: "A human",
    explanation: "The correct option is \"A human\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What is always in front of you but can never be seen?",
    options: ["Air","The future","Your shadow","Light"],
    correctAnswer: "The future",
    explanation: "The correct option is \"The future\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What can you catch but not throw?",
    options: ["A ball","A cold","A fish","A frisbee"],
    correctAnswer: "A cold",
    explanation: "The correct option is \"A cold\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "The more you take, the more you leave behind. What are they?",
    options: ["Memories","Footsteps","Years","Breaths"],
    correctAnswer: "Footsteps",
    explanation: "The correct option is \"Footsteps\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "I have cities but no houses, mountains but no trees, water but no fish. What am I?",
    options: ["A dream","A map","A painting","A mirror"],
    correctAnswer: "A map",
    explanation: "The correct option is \"A map\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "I speak without a mouth and hear without ears. I have no body but come alive with wind. What am I?",
    options: ["A ghost","An echo","A radio","A shadow"],
    correctAnswer: "An echo",
    explanation: "The correct option is \"An echo\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "You have 10 bags with 10 coins. One bag has fake coins (9g each; real = 10g). Using a scale once, how do you find the fake bag?",
    options: ["Weigh all bags together","Take 1 coin from bag 1, 2 from bag 2, etc., weigh all — the deficit in grams = the fake bag number","Weigh 5 bags at a time","Shake each bag and listen"],
    correctAnswer: "Take 1 coin from bag 1, 2 from bag 2, etc., weigh all — the deficit in grams = the fake bag number",
    explanation: "The correct option is \"Take 1 coin from bag 1, 2 from bag 2, etc., weigh all — the deficit in grams = the fake bag number\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "hard",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["logic-puzzles","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What letter comes next? A, C, E, G, ___",
    options: ["H","I","J","K"],
    correctAnswer: "I",
    explanation: "The correct option is \"I\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["sequences","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Complete: Z, Y, X, W, ___",
    options: ["U","T","S","V"],
    correctAnswer: "V",
    explanation: "The correct option is \"V\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["sequences","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What comes next? A, B, D, G, K, ___",
    options: ["L","M","N","P"],
    correctAnswer: "P",
    explanation: "The correct option is \"P\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["sequences","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Number sequence: 2, 4, 12, 48, ___",
    options: ["96","192","144","240"],
    correctAnswer: "240",
    explanation: "The correct option is \"240\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["sequences","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Fill in: 1, 2, 6, 24, 120, ___",
    options: ["240","600","720","840"],
    correctAnswer: "720",
    explanation: "The correct option is \"720\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["sequences","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What's next? Monday, Wednesday, Friday, ___",
    options: ["Saturday","Sunday","Tuesday","Thursday"],
    correctAnswer: "Sunday",
    explanation: "The correct option is \"Sunday\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["sequences","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Complete: Jan, Apr, Jul, ___",
    options: ["Aug","Sep","Oct","Nov"],
    correctAnswer: "Oct",
    explanation: "The correct option is \"Oct\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["sequences","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Number pattern: 1, 4, 9, 16, 25, ___",
    options: ["30","36","49","32"],
    correctAnswer: "36",
    explanation: "The correct option is \"36\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["sequences","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What comes next? 2, 3, 5, 8, 13, 21, ___",
    options: ["29","31","34","35"],
    correctAnswer: "34",
    explanation: "The correct option is \"34\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["sequences","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Series: ♠ ♥ ♦ ♣ ♠ ♥ ___",
    options: ["♠","♥","♦","♣"],
    correctAnswer: "♦",
    explanation: "The correct option is \"♦\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "hard",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["sequences","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Letters: B, D, F, H, ___",
    options: ["I","J","L","K"],
    correctAnswer: "J",
    explanation: "The correct option is \"J\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["sequences","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What's next? 3, 8, 15, 24, 35, ___",
    options: ["46","48","50","44"],
    correctAnswer: "48",
    explanation: "The correct option is \"48\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["sequences","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Complete: 100, 50, 25, 12.5, ___",
    options: ["5","6","6.25","10"],
    correctAnswer: "6.25",
    explanation: "The correct option is \"6.25\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["sequences","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What comes next? 1, 2, 4, 8, 16, 32, ___",
    options: ["48","56","64","72"],
    correctAnswer: "64",
    explanation: "The correct option is \"64\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["sequences","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Fill in: 0, 1, 3, 6, 10, 15, ___",
    options: ["20","21","22","25"],
    correctAnswer: "21",
    explanation: "The correct option is \"21\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["sequences","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What comes next in the pattern? 1, 11, 21, 1211, 111221, ___",
    options: ["312211","123121","312221","211311"],
    correctAnswer: "312211",
    explanation: "The correct option is \"312211\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["sequences","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Complete: AZ, BY, CX, DW, ___",
    options: ["EV","EU","FV","EW"],
    correctAnswer: "EV",
    explanation: "The correct option is \"EV\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["sequences","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What's next? 1, 5, 14, 30, 55, ___",
    options: ["77","85","91","100"],
    correctAnswer: "91",
    explanation: "The correct option is \"91\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["sequences","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Fill in: 2, 2, 4, 12, 48, ___",
    options: ["96","120","144","240"],
    correctAnswer: "240",
    explanation: "The correct option is \"240\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["sequences","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Complete: A1, B2, C3, D4, ___",
    options: ["E4","F5","E5","D5"],
    correctAnswer: "E5",
    explanation: "The correct option is \"E5\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "hard",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["sequences","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What's the pattern? 31, 28, 31, 30, 31, 30, ___",
    options: ["31","28","30","29"],
    correctAnswer: "31",
    explanation: "The correct option is \"31\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["sequences","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "Next in series: 112, 123, 134, 145, ___",
    options: ["155","156","157","158"],
    correctAnswer: "156",
    explanation: "The correct option is \"156\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["sequences","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What's next? 1, 2, 3, 5, 8, 13, 21, 34, ___",
    options: ["47","55","50","52"],
    correctAnswer: "55",
    explanation: "The correct option is \"55\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["sequences","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What comes next? 5, 15, 45, 135, ___",
    options: ["270","375","405","540"],
    correctAnswer: "405",
    explanation: "The correct option is \"405\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["sequences","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What's missing? 64, ___, 16, 8, 4",
    options: ["32","24","48","30"],
    correctAnswer: "32",
    explanation: "The correct option is \"32\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "Logical Reasoning",
    technology: "Logical Reasoning",
    type: "mcq",
    tags: ["sequences","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A cube is painted red on all sides and cut into 27 equal smaller cubes. How many small cubes have NO red sides?",
    options: ["1","8","6","9"],
    correctAnswer: "1",
    explanation: "The correct option is \"1\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A snail is at the bottom of a 10-metre well. Each day it climbs 3m, each night it slides back 2m. How many days to escape?",
    options: ["8 days","10 days","7 days","9 days"],
    correctAnswer: "8 days",
    explanation: "The correct option is \"8 days\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "How many triangles are in a triangle divided into 4 equal smaller triangles?",
    options: ["4","5","6","8"],
    correctAnswer: "5",
    explanation: "The correct option is \"5\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "You fold a square paper in half twice (both folds parallel), then punch a hole through all layers. How many holes when unfolded?",
    options: ["1","2","4","8"],
    correctAnswer: "4",
    explanation: "The correct option is \"4\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A 3×3×3 cube is made of 27 unit cubes. How many unit cubes are completely hidden (no face visible)?",
    options: ["1","3","6","9"],
    correctAnswer: "1",
    explanation: "The correct option is \"1\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "hard",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "If you cut a cylindrical log into 3 pieces, how many cuts are needed?",
    options: ["3","4","2","1"],
    correctAnswer: "2",
    explanation: "The correct option is \"2\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A clock shows 3:15. What is the angle between the hour and minute hands?",
    options: ["0°","7.5°","15°","22.5°"],
    correctAnswer: "7.5°",
    explanation: "The correct option is \"7.5°\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "How many squares are in a 3×3 grid of squares?",
    options: ["9","12","14","16"],
    correctAnswer: "14",
    explanation: "The correct option is \"14\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A box has 6 faces. How many faces do 5 separate boxes have?",
    options: ["11","25","30","36"],
    correctAnswer: "30",
    explanation: "The correct option is \"30\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A ball is thrown straight up. How many times does it have zero velocity?",
    options: ["Never","Once (at the top)","Twice","Three times"],
    correctAnswer: "Once (at the top)",
    explanation: "The correct option is \"Once (at the top)\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A circle has a radius of 5. What is the area? (π ≈ 3.14)",
    options: ["31.4","78.5","15.7","25"],
    correctAnswer: "78.5",
    explanation: "The correct option is \"78.5\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "You have a square room. In each corner sits a cat. In front of each cat sit 3 more cats. How many cats total?",
    options: ["16","12","4","28"],
    correctAnswer: "16",
    explanation: "The correct option is \"16\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A cube's surface area is 54 cm². What is the side length?",
    options: ["3 cm","4 cm","6 cm","9 cm"],
    correctAnswer: "3 cm",
    explanation: "The correct option is \"3 cm\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "If you drive 4 km north then 3 km east, how far are you from the start?",
    options: ["7 km","5 km","6 km","4 km"],
    correctAnswer: "5 km",
    explanation: "The correct option is \"5 km\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "How many faces does a tetrahedron have?",
    options: ["3","4","5","6"],
    correctAnswer: "4",
    explanation: "The correct option is \"4\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "hard",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A clock shows 6:00. What is the angle between the hands?",
    options: ["90°","120°","180°","270°"],
    correctAnswer: "180°",
    explanation: "The correct option is \"180°\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "How many edges does a cube have?",
    options: ["8","10","12","6"],
    correctAnswer: "12",
    explanation: "The correct option is \"12\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "If you unfold a cube, how many squares do you get?",
    options: ["4","5","6","8"],
    correctAnswer: "6",
    explanation: "The correct option is \"6\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A rectangular room is 10m long and 8m wide. What is the perimeter?",
    options: ["18m","36m","80m","20m"],
    correctAnswer: "36m",
    explanation: "The correct option is \"36m\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "How many diagonals does a square have?",
    options: ["1","2","4","8"],
    correctAnswer: "2",
    explanation: "The correct option is \"2\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "If a square has a perimeter of 20cm, what is its area?",
    options: ["20 cm²","25 cm²","16 cm²","100 cm²"],
    correctAnswer: "25 cm²",
    explanation: "The correct option is \"25 cm²\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "How many vertices (corners) does a cube have?",
    options: ["6","8","10","12"],
    correctAnswer: "8",
    explanation: "The correct option is \"8\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A ladder leans against a wall. The base is 6m from the wall, the ladder is 10m long. How high up the wall does it reach?",
    options: ["6m","7m","8m","9m"],
    correctAnswer: "8m",
    explanation: "The correct option is \"8m\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "How many sides does a hexagon have?",
    options: ["5","6","7","8"],
    correctAnswer: "6",
    explanation: "The correct option is \"6\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "How many triangles can you form from the vertices of a square?",
    options: ["2","4","6","8"],
    correctAnswer: "4",
    explanation: "The correct option is \"4\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "hard",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "How many rectangles are in a 2×2 grid?",
    options: ["4","6","8","9"],
    correctAnswer: "9",
    explanation: "The correct option is \"9\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A frog starts at lily pad 1 and doubles its distance each jump. It reaches pad 8 in 3 jumps. Which pad does it start at?",
    options: ["Pad 1","Pad 2","Pad 3","Pad 4"],
    correctAnswer: "Pad 1",
    explanation: "The correct option is \"Pad 1\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What is 50% of 50% of 200?",
    options: ["25","50","100","75"],
    correctAnswer: "50",
    explanation: "The correct option is \"50\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A train travels from A to B at 60 km/h and returns at 40 km/h. What is the average speed for the whole journey?",
    options: ["50 km/h","52 km/h","48 km/h","45 km/h"],
    correctAnswer: "48 km/h",
    explanation: "The correct option is \"48 km/h\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "How many times does the digit 1 appear from 1 to 20?",
    options: ["10","11","12","13"],
    correctAnswer: "12",
    explanation: "The correct option is \"12\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "easy",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "If today is Wednesday, what day will it be 100 days from now?",
    options: ["Monday","Friday","Saturday","Sunday"],
    correctAnswer: "Friday",
    explanation: "The correct option is \"Friday\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A clock loses 10 minutes every hour. If set correctly at 12:00 noon, what does it show at 6:00 PM?",
    options: ["5:00 PM","5:00 PM","4:50 PM","5:10 PM"],
    correctAnswer: "5:00 PM",
    explanation: "The correct option is \"5:00 PM\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "What is the next prime number after 23?",
    options: ["25","26","29","27"],
    correctAnswer: "29",
    explanation: "The correct option is \"29\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "If CAT = 3+1+20 = 24, what does DOG equal?",
    options: ["22","23","26","25"],
    correctAnswer: "26",
    explanation: "The correct option is \"26\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "moderate",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  },

  {
    question: "A sequence goes: 2, 6, 18, 54, ___. What's next?",
    options: ["108","162","216","180"],
    correctAnswer: "162",
    explanation: "The correct option is \"162\". This is determined by analyzing the logical pattern, arithmetic sequence, or spatial relationships described in the question.",
    difficulty: "hard",
    category: "IQ",
    technology: "IQ",
    type: "mcq",
    tags: ["spatial-visual","aptitude"],
    estimatedTime: 45,
    realWorldUseCase: "Assesses cognitive ability, abstract reasoning, and problem-solving aptitude."
  }
];

export default questions;

