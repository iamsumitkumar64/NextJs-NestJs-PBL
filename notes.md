# Backend (NestJs)

---

**Typeorm ->** Orm designed to be used as a wrapper around db connection and support multiple features like migration, seeding

**Datasource ->** It holds your database connection settings and establishes the initials database.
**Entity ->** A class maps to that database table and both(db table and entity) should have same columns
**Migration ->** A file used in production containing queries to create/update a database schema instead of manual changes you just have to make changes and run this file. (for dev or production)
**Seeding ->** generating fake data in database **(library ->[ typeorm-extension](https://typeorm-extension.tada5hi.net/guide/))	(usage -> [https://dev.to/imgildev/automatizando-la-generacion-de-datos-ficticios-con-seed-factory-faker-y-typeorm-en-nestjs-5fpc](https://dev.to/imgildev/automatizando-la-generacion-de-datos-ficticios-con-seed-factory-faker-y-typeorm-en-nestjs-5fpc) in spanish but convertable in english)**
**Relations ->** [https://darraghoriordan.medium.com/postgresql-and-typeorm-relational-data-1cf9ae0ebc80](https://darraghoriordan.medium.com/postgresql-and-typeorm-relational-data-1cf9ae0ebc80)
**Migration ->** [https://dev.to/andreasbergstrom/configure-typeorm-migrations-in-5-minutes-2njg](https://dev.to/andreasbergstrom/configure-typeorm-migrations-in-5-minutes-2njg)
**Best tips and tricks ->**[https://darraghoriordan.medium.com/postgresql-and-typeorm-9-tips-tricks-and-common-issues-9f1791b79699](https://darraghoriordan.medium.com/postgresql-and-typeorm-9-tips-tricks-and-common-issues-9f1791b79699) (Lazy And Eager is important)

**NestJS ->** A NodeJS progressive framework which means it provide tools to make development more robust and enterprise level.
**Works ->** On app start, it start scanning all modules starting from appmodule recursively by storing metadata about controller, provider, import, export in the ***Inversion of Control (IoC) container*** and make a dependency graph which represents which module or service depend on what and give instance of class at runtime.

**Dependency Injection ->** Dependency Injection (DI) in NestJS operates through its ***Inversion of Control (IoC) container***, which ***automatically*** manages the representation and injection of dependencies. When a class is marked with the** *@Injectable()*** decorator, it becomes a provider that can be injected into other classes. These dependencies are specified in the constructor of a class, and the* **IoC container resolves them at runtime***. This allows for clear and maintainable code, as dependencies are not created manually but injected as needed.

**Controller ->** A controller's purpose is to handle specific requests for the application. The routing mechanism determines which controller will handle each request. Often, a controller has multiple routes, and each route can perform a different action.

**Provider ->** Providers are a core concept in Nest. Many of the basic Nest classes, such as services, repositories, factories, and helpers, can be treated as providers.The key idea behind a provider is that it can be injected as a dependency, allowing objects to form various relationships with each other.Providers typically have a lifetime ("scope") that aligns with the application lifecycle. When the application is bootstrapped, each dependency must be resolved, meaning every provider gets instantiated. Similarly, when the application shuts down, all providers are destroyed. However, it is possible to make it's lifecycle request-scope(create for each request), default-scope(created once on app start), transient-scope(create on every injection). Provider types -> ***useValue***(injecting constant value), ***useClass***(use class with different classname means change class dynamically), ***useFactory***(create provider dynamically), ***useExisting***(use existing class with different name). Other types like global providers

**Module ->** A module is a class that is annotated with the @Module() decorator. This decorator provides metadata that Nest uses to organize and manage the application structure efficiently. Types -> global, shared, feature, dynamic(***forRoot***(configure once and use anytime), ***regsiter***(want to configure and user for calling module only), ***forFeature***(we use forRoot but want to configure with specific properties for calling module)).

**Circular Dependency ->** A circular dependency occurs when two classes depend on each other. For example, class A needs class B, and class B also needs class A. Circular dependencies can arise in Nest between modules and between providers. Then we solve it using two ways -> forward referencing(means using ***forwardRef in service***) and module referencing(means using ***forwardRef in module***). forwardRef will allow to remove circular dependency by injecting service only when needed. And in that time other service will be injected and this help removing circular dependency. Always avoid circular dependency.

**Dto ->** A interface between controller and route that validates incoming request.

**Middleware ->** Middleware is a function which is called before the route handler. Middleware functions have access to the request and response objects, and the next() middleware function in the application's request-response cycle. Types -> global, route, controller.

**Exception Filter ->** Nest comes with a built-in exceptions layer which is responsible for processing all unhandled exceptions across an application. When an exception is not handled by your application code, it is caught by this layer, which then automatically sends an appropriate user-friendly response. Types -> Built-in, Custom. Important ***~~topics to read~~*** -> how to create custom exception filter, execution context, argument host.

**Pipes ->** Pipes have two typical use cases:

1) transformation: transform input data to the desired form (e.g., from string to integer),
2) validation: evaluate input data and if valid, simply pass it through unchanged; otherwise, throw an exception.
   In both cases, pipes operate on the arguments being processed by a controller route handler. Nest interposes a pipe just before a method is invoked, and the pipe receives the arguments destined for the method and operates on them. Types -> Built-in pipes, Custom Pipes. ***~~Things to learn ->~~*** dto, custom pipes, global pipes, .

**Guard ->** Guards have a single responsibility. They determine whether a given request will be handled by the route handler or not, depending on certain conditions (like permissions, roles, ACLs, etc.) present at run-time. This is often referred to as ***authorization***. Authorization (and its cousin, authentication, with which it usually collaborates) has typically been handled by middleware in traditional Express applications. If guard return true then authorized otherwise unauthorized. This is also responsible for role based authorization. ***~~Things to learn ->~~*** role based authentication, custom guard.

**Interceptors ->** Interceptors have a set of useful capabilities which are inspired by the [Aspect Oriented Programming](https://en.wikipedia.org/wiki/Aspect-oriented_programming) (AOP) technique. They make it possible to:

* bind extra logic before / after method execution
* transform the result returned from a function
* transform the exception thrown from a function
* extend the basic function behavior
* completely override a function depending on specific conditions (e.g., for caching purposes)

Each interceptor implements the intercept() method, which takes two arguments. The first one is the ExecutionContext. The ExecutionContext inherits from ArgumentsHost. The second one is the CallHandler.

* **Execution Context ->** ExecutionContext is a utility class that provides information about the current request-response cycle and the environment (HTTP, WebSockets, or microservices) in which a handler is running. It acts as a wrapper around the arguments passed to a handler, offering additional methods to access details about the class and method being invoked. These utilities provide information about the current execution context which can be used to build generic guards, filters, and interceptors
* **CallHandler ->** The CallHandler interface implements the handle() method, which you can use to invoke the route handler method at some point in your interceptor. If you don't call the handle() method in your implementation of the intercept() method, the route handler method won't be executed at all.

task schedlling
multer
socket [Link](https://docs.nestjs.com/websockets/gateways)
session
cors
commander

**Rabbitmq ->** Help in implementing async communication. RabbitMQ is a widely used message broker that implements the Advanced Message Queuing Protocol (AMQP). It acts as an intermediary for messaging, where one service (producer) sends messages to a queue, and another service (consumer) retrieves those messages to process them asynchronously. ([Rabbitmq Link](https://www.rabbitmq.com/)) ([Library Reference Link](https://amqp-node.github.io/amqplib/channel_api.html))

**CQRS Pattern ->** CQRS(Command And Query Segregation) Separate read and write operation to scale them separately. Here command -> future state , query -> current state , event -> past state. Resources ([Link](https://dev.to/jacobandrewsky/cqrs-pattern-in-nestjs-4n3p)) (Best Article -> ([Link](https://martinfowler.com/bliki/CQRS.html)))
**Repository Pattern ->** make separate file containing all db hits so that if orm or db change then we only make changes in this layer instead of every service or controller layer ([Link](https://docs.nestjs.com/techniques/database#repository-pattern)) ([Link](https://www.geeksforgeeks.org/system-design/repository-design-pattern/))
**Outbox and Inbox pattern ->** inbox will consume to do task atmost 1 time and outbox will handle to publish task atleast 1 time (OutBox Pattern -> ([Link](https://dev.to/eragoo/outbox-pattern-rabbitmq-publishing-strategies-for-high-performance-systems-3haf)))  (Inbox Pattern -> ) (Need and usage -> ([Link](https://event-driven.io/en/outbox_inbox_patterns_and_delivery_guarantees_explained/)), ([Link](https://medium.com/@serhatalftkn/reliable-messaging-in-microservices-the-outbox-and-inbox-pattern-2f831f15ff82)), ([Link](https://medium.com/@mech2dude/outbox-inbox-patterns-the-2-patterns-that-save-you-from-silent-data-loss-04cb5e672168) -> unlock using freemedium))
**Resillient Architecture ->** Help to do max attempt for completing a task before discarding ([Link](https://www.geeksforgeeks.org/system-design/architecture-patterns-for-resilient-systems/))
**Domain Driven Design ->** DDD (Domain-Driven Design) architecture is  =a software development approach focusing on deeply understanding complex business domains, modeling software around these core business concepts, and using a shared language between developers and domain experts to create a highly adaptable and maintainable system, contrasting with database-first approaches by prioritizing business logic over data storage details . It involves strategic patterns (like Bounded Contexts) for large systems and tactical patterns (Entities, Value Objects, Aggregates) for implementation, ultimately building software that accurately reflects real-world business rules. ([Link](https://medium.com/me/following-feed/writers/fa3ab82e4f38)) (Implementation architecure -> [Link 1](https://medium.com/@syed.fawzul.azim/hexagonal-clean-onion-architectures-a-domain-driven-design-perspective-e303cef1d6fe) , [Link 2](https://youtu.be/Thzz5bvUI40?si=XaLpBeUjVScAte4C))
**Event Driven Design(EDA) ->** Event-Driven Architecture (EDA) is a software design paradigm where system components communicate by producing and responding to events. These events can be important happenings, like user actions or changes in the system's state. ([Link](https://www.geeksforgeeks.org/system-design/event-driven-architecture-system-design/)) Examples of eda -> websocket (only for it's real-time architecture), rabbitmq, kafka,
**Onion (or Slice Onion) Architecture ->** Onion architecture is a way to structure the code by dividing it into domain-driven design layers. It is based on the inversion of control principle. The architecture does not focus on underlying technology or frameworks but the actual domain models.The outer circles represent mechanisms and the inner circles represent core domain logic. The outer layers depend on inner layers and the inner layers are completely unaware of outer circles. Domain-Driven Design centres on the domain model that has a rich understanding of the processes and rules of a domain. Onion architecture implements this concept and dramatically increases code quality, reduces complexity and enables evolutionary enterprise systems.  ([Link](https://medium.com/@debasisdasnospdii/onion-architecture-an-example-folder-structure-nest-js-480ea9c6ec3a))
**Clean Architecture ->** Help us maintain D(Dependency Inversion control) of solid principle. In this architecture inner layer define interface and outer layer implements those interfaces. It also states that coupling increases towards inner (entity or interface) layer from outside layers.
**State Design Pattern ->** This pattern allows an object to alter its behavior when its internal state changes, making it appear as if the object’s class has changed. The key idea is to represent each state as a separate class that implements a common interface. ([Link](https://medium.com/@vipulkumarsviit/state-design-pattern-using-spring-boot-dc572f010056))

**Layered Architecture (N-tier architecture) ->** A design pattern commonly used in software development to structure applications into distinct layers, each responsible for a specific aspect of the system. This pattern provides a clear separation of concerns, making it easier to manage, scale, and maintain the application over time. It’s a traditional and popular approach, especially in enterprise systems, where modularity and maintainability are key requirements.([Link](https://dev.to/bluee/layered-architecture-n-tier-52io))

**Docker ->** ([Link](https://medium.com/@raghurambtechit/docker-zero-to-beginner-414d7252220f))
**Docker Compose ->** ([Link](https://medium.com/@aggarwal-rohan17/a-to-z-of-docker-compose-6fb39e5587d9))
**Api Design ->** All rules of create good api ([Link](https://github.com/stickfigure/blog/wiki/How-to-(and-how-not-to)-design-REST-APIs))
**What is microservice ->** ([Link](https://youtu.be/lL_j7ilk7rc?si=tYHi65SYS-Iaeo0k))
**Why to use uuid instead of number id for user interaction** -> because if anyone have number then they access privacy data using going back or forth ([Link](https://youtu.be/gocwRvLhDf8?si=j3wINcq9CA4oSBmd))
**Polymorphic Association ->** Help us by saving us from applying realtions in db where one table is related to many
tables but one at a time and we don't want to make relation for each table ([Link](https://medium.com/@toahabhuiyan/polymorphic-relationships-in-database-design-44581013c84c))

Redux -> **Redux toolkit** is a wrapper around [****Redux****](https://www.geeksforgeeks.org/web-tech/introduction-to-react-redux/) and encapsulates its necessary functions. Redux toolkit is flexible and provides a simple way to make a store for large applications. It encourages immutability by providing utility functions **immer** internally, allowing more straightforward state updates within reducers.createAsyncThunk Is included in the Redux Toolkit which simplifies the process of managing asynchronous actions within the Redux store.It is designed to improve developer experience by reducing boilerplate, making it more accessible and efficient, especially for beginners. ([Link](https://redux-toolkit.js.org/introduction/getting-started))

# BASIC FRONTEND INTERVIEW QUESTIONS

---

1. HTML FUNDAMENTALS

- What is the difference between Block and Inline elements?
- Explain the difference between local storage, session storage, and cookies. -> local persist until manually remove for all tabs (5-10mb per origin), session for same tab (5mb per origin), cookie sent with every request and can be both persistent and non-persistent(4-5kb).

2. CSS ESSENTIALS

- Explain the CSS Box Model (Content, Padding, Border, Margin).
- What are Pseudo-classes (:hover) vs. Pseudo-elements (::before)?
- What is the difference between 'em' and 'rem' units? -> em for relative font-size of parent element and rem for relative font-size of root element

3. JAVASCRIPT BASICS

- Difference between var, let, and const (Scope & Hoisting). -> var (global or function scope, hoisted) , let and const (block scope,not hoisted).
- Explain the difference between '==' and '===' (Loose vs. Strict equality).
- What are the primitive data types in JavaScript?
- What is a Closure and can you give a real-world example? -> A closure in JavaScript is a function that remembers and accesses variables from its surrounding scope (its lexical environment) even after the outer function has finished executing. JavaScript uses a mechanism called  lexical scoping, which means the accessibility of variables is determined by where they are declared in the source code.
- Explain Hoisting in JavaScript (Variable vs. Function). -> Hoisting is JavaScript's default behavior of moving declarations to the top.
- How does the 'this' keyword work in different contexts? -> In JavaScript, the this keyword refers to an object. The this keyword refers to different objects depending on how it is used:
  i. Alone, this refers to the global object.
  ii. In a function, this refers to the global object.
  iii. In a function, in strict mode, this is undefined.
  iv. In an object method, this refers to the object.
  v. In an event, this refers to the element that received the event.
  vi. Methods like call(), apply(), and bind() can refer this to any object.
- What is the difference between Null and Undefined?
- Explain the Event Loop (Call Stack, Task Queue, Microtask Queue).
- What is Event Delegation and Event Bubbling?
- Difference between Arrow functions and regular functions. -> hoisting, constructor, this
- High Order Function (HOF) -> A higher-order function in JavaScript is a function that does at least one of the following: i.) Takes one or more functions as arguments (often called callback functions). ii.) Returns a new function as its result.

4. BROWSER & WEB CONCEPTS

- How does a browser render a web page (Parsing, Styles, Layout, Paint)? -> Parse html response into structure tree known as DOM(DOCUMENT OBJECT MODEL) which is a structure of html elements. Each known as nodes and stores metadata about it. After that browser process css to build CSSOM (CSS OBJECT MODEL) for CSSOM tree and this help to easily retrieve css for each element. And after that render tree is built by combining DOM and CSSOM. For layout, browser calculate exact position and size for each element and then start painting each element on scree and for animations browser use GPU.
- What is the DOM (Document Object Model)? -> The Document Object Model (DOM) in JavaScript is a programming interface (API) that treats an HTML or XML document as a hierarchical tree of objects. It is not part of the core JavaScript language itself, but a Web API that JavaScript uses to interact with and dynamically change the content, structure, and style of a web page.
- Explain the Same-Origin Policy and CORS. -> The Same-Origin Policy (SOP) is a fundamental browser security mechanism that restricts scripts on one web page from accessing data and resources from another origin (domain, protocol, or port). Cross-Origin Resource Sharing (CORS) is an HTTP-header-based mechanism that provides a controlled way to relax the SOP, allowing servers to explicitly grant permission for specific external origins to access their resources. 
- What is a Single Page Application (SPA)?
- What is the purpose of a CDN (Content Delivery Network)? -> It is basically a distributed system of servers that stores the data by the use of Amazon Web Services or Google Cloud storage and it serves that data to the user via the nearest server so that the loading or buffering of web pages is low.

# ADVANCED JAVASCRIPT & REACT INTERVIEW QUESTIONS

---

1. DEEP JAVASCRIPT (THE ENGINE & BEYOND)

- Difference between Prototypal vs. Classical Inheritance. -> classical inheritance uses classes as blueprints for creating instances with new operator, forming a hierarchy, while prototypal inheritance uses existing objects as prototypes from which other objects inherit directly without new operator, forming a chain.
- Explain the Temporal Dead Zone (TDZ) in depth. -> The Temporal Dead Zone (TDZ) in JavaScript is a period of time during which variables declared with let and const exist within their scope but cannot be accessed or assigned a value before their declaration is reached and initialized. Attempting to access a variable in the TDZ results in a ReferenceError. The term "temporal" is used because the "dead zone" depends on the time or order of code execution, rather than the physical position of the code.
- What is the 'this' binding rule for Arrow functions vs. Regular functions?
- How does the Garbage Collector work (Mark-and-Sweep)?
- Explain "Pass by Value" vs. "Pass by Reference" for Primitives and Objects.
- What are WeakMap and WeakSet and when would you use them over Map/Set? -> WeakMap and WeakSet are JavaScript collections that use  weak references , allowing their stored objects to be garbage collected if no other references exist, unlike Map and Set, which hold strong references and prevent garbage collection, making WeakMap/WeakSet ideal for temporary metadata, caching, or tracking objects without causing memory leaks
- What is polyfill? -> A polyfill is a piece of JavaScript code that provides modern functionality to older web browsers that do not natively support those features. They act as a compatibility patch. 
- Explain Currying and its practical use cases in functional programming. -> Currying is used in JavaScript to break down complex function calls into smaller, more manageable steps. It transforms a function with multiple arguments into a series of functions, each taking a single argument.
- Deep vs. Shallow Copy: How to clone nested objects safely? -> a shallow copy duplicates only the top-level properties and shares references to nested structures, while a deep copy duplicates all levels, creating a completely independent copy.
Common Methods: 
Shallow -> Spread syntax (...), Object.assign(), Array.prototype.slice() or Array.prototype.concat() (for arrays)
Deep -> JSON.parse(JSON.stringify(...)), structuredClone(...)

2. ASYNCHRONOUS JAVASCRIPT

- Microtask Queue vs. Macrotask Queue priority.
- What is the difference between Promise.all, Promise.allSettled, and Promise.race?
- How does 'async/await' work under the hood (Generators + Promises)?
- Explain the "Inversion of Control" problem with Callbacks.
- How to handle sequential vs. parallel execution of async tasks?

3. REACT CORE & FIBER

- What is React Fiber and how does it enable Incremental Rendering? ->  Fiber is a new reconciler algorithm whose aims to solve many of the problems that came with the original algorithm. Rendering the page, responding to user actions, running Javascript and much more are all handled by the browser’s main thread. If at any time our main thread gets blocked, the user’s experience can become laggy and slow. The following is the process that React took before Fiber in order to render items on the screen: React will create a tree of nodes. A virtual tree (called virtualDOM) is created which is a clone of the rendered tree. Traversing the virtual DOM tree, React will update the DOM on whichever classes or elements need to be updated whenever a change occurs.After any state change, React will compare every node from the two trees and pass on the changes to the renderer which ultimately draws it out on the screen. This whole process would happen synchronously, meaning that once it was started, it could not be interrupted by another process until it was done. Fiber can help you prioritize different updates that can happen. React calls this incremental rendering, which splits rendering work into chunks that can then be spread out over multiple frames. Phase 1 — Reconciliation -> React makes a list of all the changes that need to be processed and then rendered to the UI. During this time, React can jump to processing another change as well.Once this list is computed, React will then schedule the changes to be executed in the next phase.Phase 2 — Commit -> Out of the scheduled changes that come out of the reconciliation process, React can choose to render a specific set of changes. Once committed, React notifies the DOM to render the changes that were found while in the reconciliation process. While the reconciliation phase can be interrupted, the commit phase cannot.
- Explain the "Diffing Algorithm" (O(n) complexity heuristics). -> The diffing algorithm is a core part of the reconciliation process, which efficiently updates the actual DOM by comparing two versions of the Virtual DOM (VDOM). This heuristic algorithm runs in linear time complexity, O(n), by making specific assumptions to ensure fast and performant updates. The process follows these key principles: i.) Element Type Comparison ii.) Child Reconciliation (Lists and Keys) -> Without Keys: If a list's items can change order, adding/removing items without unique keys can lead to performance issues, as React might re-render every subsequent item. With Keys: The key prop is crucial for efficient list updates. Keys allow React to uniquely identify each element in a list and track them across renders. With stable, unique keys, React can efficiently determine exactly which items were added, removed, or moved, and only perform the necessary operations, minimizing DOM manipulation. You should always use stable, unique identifiers (like item IDs from data) as keys, and avoid using array indices in dynamic lists.
- Synthetic Events: Why does React use its own event system? -> React uses synthetic events primarily to ensure cross-browser consistency and improve performance through a standardized event system.
- The 'key' prop: Why is it bad to use 'Math.random()' or 'index'? -> they can cause issues with component state, performance, and the correct rendering of lists when items are added, removed, or reordered
- What is the "Reconciliation" process exactly? -> Reconciliation is the process by which React efficiently updates the actual Document Object Model (DOM) to match the latest state of the component tree. It uses a lightweight, in-memory representation called the Virtual DOM (VDOM) and a "diffing" algorithm to determine the minimal number of changes needed, avoiding costly direct DOM manipulations. 
- Pure Component: A pure component in React is a component that only re-renders when its props or state have changed and always give same output, based on a shallow comparison. Use of HOC(high order components) like React.memo or useMemo in functional component and extending React.PureComponent in class component style.
- Impure Component: A component that does not always render the same output for the same input (props, state, and context). This unpredictability typically stems from side effects, such as modifying external variables, making API calls during the render phase, or using non-deterministic functions like Date.now() or Math.random(). By default all components are impure because if parent of any component changes then they too change.

4. ADVANCED REACT HOOKS & PATTERNS

- useEffect vs. useLayoutEffect: When does the browser paint? useRef run after component mount and dom update while useLayoutEffect runs synchronously after render but before DOM update. useRef is mostly used for api call, data changing while useLayoutEffect used for side effect like resizing dom element.
- When to use useImperativeHandle with forwardRef?
- How does useMemo differ from useCallback in terms of memory overhead?
- Implementing custom hooks for: usePrevious, useFetch, useDebounce.
- What is "Prop Drilling" and how to solve it without Context API (Component Composition)? -> Passing data as props to children too nestedly. Solve by keeping data in global state so anyone can access.
- How do you "Reset" a component's state using the 'key' attribute?

5. CONCURRENCY & MODERN REACT (v18/v19)

- Transitions: Difference between startTransition and useTransition.
- useDeferredValue vs. Debouncing: Which is better for performance?
- What is Automatic Batching in React 18?
- React Server Components (RSC) vs. Server-Side Rendering (SSR).
- What are "Action" hooks in React 19 (useActionState)?

6. STATE MANAGEMENT PHILOSOPHY

- When is 'useReducer' preferred over 'useState'?
- Lifting State Up vs. Colocation (keeping state close to where it's used).
- Global State: When is Redux/Zustand necessary vs. Context API?
- Server State: Why shouldn't you store API data in a global Redux store?
- HttpOnly Cookie vs. LocalStorage for JWT

# React Deep-Dive Topics

---

**React Working Under the hood ->** ([Link](https://medium.com/@ruchivora16/react-how-react-works-under-the-hood-9b621ee69fb5))

1. CORE ARCHITECTURE

- Concurrent Mode & Transitions
- Synthetic Event System: Synthetic events in React are cross-browser wrapper objects around the browser's native event system, designed to provide a consistent and reliable API for handling events across all major browsers.
- Component Lifecycle (Mounting, Updating, Unmounting)
- Controlled vs. Uncontrolled Components -> Controlled can be managed by states like useState and uncontrolled can be managed by dom like useRef.

2. BUNDLING & TOOLING

- Hot Module Replacement (HMR) -> Hot reloading (more accurately called Hot Module Replacement or HMR in web development contexts) is a mechanism that allows developers to see changes in a running React application almost instantly without a full page refresh.
- Fast Refresh Runtime
- Tree Shaking & Dead Code Elimination
- Code Splitting & Dynamic Imports -> Code splitting is a performance optimization technique that breaks a large JavaScript bundle file into smaller, manageable "chunks" during the build process. Instead of forcing users to download the entire application's code upfront, code splitting ensures that only the code required for the current view is loaded.
- Transpilation (Babel/SWC) -> Transpilation, or source-to-source compilation, is  the process of converting source code written in one programming language to equivalent source code in another language. JSX to js in react using babel.
- Module Federation
- Polyfilling & Target Environments

3. STATE & DATA MANAGEMENT

- Reconciliation & State Batching
- Context API Propagation
- Atomic State (Jotai/Recoil)
- Finite State Machines (XState)
- Client-side Caching (TanStack Query)
- Immutability Patterns (Immer)

4. RENDERING STRATEGIES

- Client-Side Rendering (CSR)
- Server-Side Rendering (SSR)
- Static Site Generation (SSG)
- Incremental Static Regeneration (ISR)
- Hydration & Progressive Hydration
- React Server Components (RSC)
- Streaming SSR

5. PERFORMANCE OPTIMIZATION

- Memoization (useMemo, useCallback, React.memo)
- Virtualization & Windowing
- Debouncing & Throttling UI Updates
- Interaction to Next Paint (INP) Optimization
- Bundle Analysis & Treemap Visuals
- Selective Hydration

6. ADVANCED PATTERNS

- Higher-Order Components (HOC)
- Render Props Pattern
- Compound Components
- Error Boundaries & RecoveryPortals & Out-of-tree Rendering

# Next.js Advanced Topics

---

1. CORE ARCHITECTURE

- App Router vs. Pages Router
- React Server Components (RSC) -> By default, all components in the app directory are Server Components. The RSC payload (React Server Component Payload) in Next.js is  a compact, binary representation of the rendered server component tree that is sent from the server to the client. It is not plain HTML, but rather a set of instructions used by client-side React to efficiently update the browser's DOM. For subsequent client-side navigations (using components), Next.js prefetches only the RSC payload for the new route, avoiding a full page load and providing an instant transition.
- Client Components
- Layouts -> A layout is UI that is shared between multiple pages. On navigation, layouts preserve state, remain interactive, and do not rerender.
- Routing ->
- Static vs. Dynamic Rendering
- Route Groups & Private Folders: Route Group -> /(auth)/{login.tsx, signup.tsx} here (auth) will not present in route, Private -> _credentials. Private folder are non-routable.

2. DATA FETCHING & MUTATION

- Server Actions & Form Progressive Enhancement
- Request Memoization (Deduplication)
- fetch() API Extensions (revalidate, tags)
- Revalidating Data (Time-based vs. On-demand)
- Route Handlers (API Routes for App Router)
- Streaming & Suspense Boundaries (Loading Skeletons)

4. RENDERING STRATEGIES

- Static Site Generation (SSG) -> Pre-Rendering at build time means they created only once using getStaticProps(). Example-> documentation.
- Server-Side Rendering (SSR) -> Generating HTML on each request for up-to-date data using getServerSideProps().
- Incremental Static Regeneration (ISR) -> Generated on build time but regenerate in background when new request come. Used when content changes frequently but not need to update at each request and give better performance than SSR.
- Partial Prerendering (PPR)
- Client-Side Rendering (CSR) -> Page is rendered on browser using javascript. Page that changes most commonly and require higher user interaction.

## Note: Use freeMedium if any medium content is locked or ask for buy premium.