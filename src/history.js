import { createBrowserHistory as history } from "history";

export default history();
// History (React Router uses this package internally, so using it explicitly doesn’t add anything new to the bundle)
// “browser history” - A DOM-specific implementation, useful in web 
// browsers that support the HTML5 history API
// push(path, [state]) - (function) Pushes a new entry onto the history stack
// we don’t use History package explicitly (but React Router uses it internally) and we listen to location changes as required
// And we’re done! The only thing that you should know is that now we pass our own History instance to React Router and when you want 
// to call e.g. push method you have to use exactly this instance but not browserHistory from React Router.