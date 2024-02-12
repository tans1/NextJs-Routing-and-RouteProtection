# NextJs-Routing-and RouteProtection
Methods of NextJs Project Routing-and-RouteProtection
### 1. Client-side protection
    - on each protected route, we can use a hook `useLayoutEffect` identical to useEffect, 
    but it fires synchronously. look at the dashboard page.
    - may have some performance issue
### 2. middleware, server-side
    we create a `middleware.ts` file at the root of the project, and 
    it will be fired before every request is handled.
