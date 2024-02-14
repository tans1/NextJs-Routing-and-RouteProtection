
# NextJs-Routing-and RouteProtection
Methods of NextJs Project Routing-and-RouteProtection
### 1. Client-side protection

on each protected route, we can use a hook `useLayoutEffect` identical to useEffect, but it fires synchronously. look at the dashboard page [link](https://github.com/tans1/NextJs-Routing-and-RouteProtection/blob/master/src/app/dashboard/page.tsx). it may have some performance issue

### 2. middleware, server-side
 we create a `middleware.ts` ([link](https://github.com/tans1/NextJs-Routing-and-RouteProtection/blob/master/src/middleware.ts)) file at the root of the project, and 
    it will be fired before every request is handled.
