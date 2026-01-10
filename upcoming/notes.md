**Typeorm ->** Orm designed to be used as a wrapper around db connection and support multiple features like migration, seeding
**Datasource ->** It holds your database connection settings and establishes the initials database.
**Entity ->** A class maps to that database table and both(db table and entity) should have same columns
**Migration ->** A file used in production containing queries to create/update a database schema instead of manual changes you just have to make changes and run this file. (for dev or production)
**Seeding ->** generating fake data in database **(library ->[ typeorm-extension](https://typeorm-extension.tada5hi.net/guide/))	(usage -> [https://dev.to/imgildev/automatizando-la-generacion-de-datos-ficticios-con-seed-factory-faker-y-typeorm-en-nestjs-5fpc](https://dev.to/imgildev/automatizando-la-generacion-de-datos-ficticios-con-seed-factory-faker-y-typeorm-en-nestjs-5fpc) in spanish but convertable in english)**
**Relations ->** [https://darraghoriordan.medium.com/postgresql-and-typeorm-relational-data-1cf9ae0ebc80](https://darraghoriordan.medium.com/postgresql-and-typeorm-relational-data-1cf9ae0ebc80)
**Migration ->** [https://dev.to/andreasbergstrom/configure-typeorm-migrations-in-5-minutes-2njg](https://dev.to/andreasbergstrom/configure-typeorm-migrations-in-5-minutes-2njg)
**Best tips and tricks ->**[https://darraghoriordan.medium.com/postgresql-and-typeorm-9-tips-tricks-and-common-issues-9f1791b79699](https://darraghoriordan.medium.com/postgresql-and-typeorm-9-tips-tricks-and-common-issues-9f1791b79699) (Lazy And Eager is important)

**NestJS ->** A NodeJS progressive framework which means it provide tools to make development more robust and enterprise level.
**Works ->** On app start, it start scanning all modules starting from appmodule recursively by storing metadata about controller, provider, import, export and make a dependency graph which represents which module or service depend on what

**Dependency Injection ->** Dependency Injection (DI) in NestJS operates through its *Inversion of **Control (IoC) container***, which ***automatically*** manages the representation and injection of dependencies. When a class is marked with the** *@Injectable()*** decorator, it becomes a provider that can be injected into other classes. These dependencies are specified in the constructor of a class, and the* **IoC container resolves them at runtime***. This allows for clear and maintainable code, as dependencies are not created manually but injected as needed.

**Controller ->** A controller's purpose is to handle specific requests for the application. The routing mechanism determines which controller will handle each request. Often, a controller has multiple routes, and each route can perform a different action.

**Provider ->** Providers are a core concept in Nest. Many of the basic Nest classes, such as services, repositories, factories, and helpers, can be treated as providers.The key idea behind a provider is that it can be injected as a dependency, allowing objects to form various relationships with each other.Providers typically have a lifetime ("scope") that aligns with the application lifecycle. When the application is bootstrapped, each dependency must be resolved, meaning every provider gets instantiated. Similarly, when the application shuts down, all providers are destroyed. However, it is possible to make it's lifecycle request-scope(create for each request), default-scope(created once on app start), transient-scope(create on every injection). Provider types -> ***useValue***(injecting constant value), ***useClass***(use class with different classname means change class dynamically), ***useFactory***(create provider dynamically), ***useExisting***(use existing class with different name). Other types like global providers

**Module ->** A module is a class that is annotated with the @Module() decorator. This decorator provides metadata that Nest uses to organize and manage the application structure efficiently. Types -> global, shared, feature, dynamic(***forRoot***(configure once and use anytime), ***regsiter***(want to configure and user for calling module only), ***forFeature***(we use forRoot but want to configure with specific properties for calling module)).

**Circular Dependency ->** A circular dependency occurs when two classes depend on each other. For example, class A needs class B, and class B also needs class A. Circular dependencies can arise in Nest between modules and between providers. Then we solve it using two ways -> forward referencing(means using ***forwardRef in service***) and module referencing(means using ***forwardRef in module***). forwardRef will allow to remove circular dependency by injecting service only when needed. And in that time other service will be injected and this help removing circular dependency. Always avoid circular dependency.

**Dto ->** A interface between controller and route that validates incoming request.

**Middleware ->** Middleware is a function which is called before the route handler. Middleware functions have access to the request and response objects, and the next() middleware function in the application's request-response cycle. Types -> global, route, controller.

**Exception Filter ->** Nest comes with a built-in exceptions layer which is responsible for processing all unhandled exceptions across an application. When an exception is not handled by your application code, it is caught by this layer, which then automatically sends an appropriate user-friendly response. Types -> Built-in, Custom. Important ***~~topics to read~~*** -> how to create custom exception filter, execution context, argument host.

**Pipes ->** Pipes have two typical use cases:
1.) transformation: transform input data to the desired form (e.g., from string to integer),
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
socket
session
cors

rabbitmq
commander

**Cqrs Pattern ->** separate read and write operation to scale them separately ([Link](https://dev.to/jacobandrewsky/cqrs-pattern-in-nestjs-4n3p))
***Repository Pattern ->*** make separate file containing all db hits so that if orm or db change then we only make changes in this layer instead of every service or controller layer ([Link](https://docs.nestjs.com/techniques/database#repository-pattern))
outbox and inbox pattern -> inbox will consume to do task atmost 1 time and outbox will handle to publish task atleast 1 time (OutBox Pattern -> [Link](https://dev.to/eragoo/outbox-pattern-rabbitmq-publishing-strategies-for-high-performance-systems-3haf)) (Inbox Pattern -> )
domain driven design ->
event driven design ->
resillient architecture -> help to do max attempt for completing a task before discarding
