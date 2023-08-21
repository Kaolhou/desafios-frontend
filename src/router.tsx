import { createBrowserRouter } from "react-router-dom";
import BlogCodelandia from "./pages/blog-codelandia";
import App from "./App";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "blog-codelandia", element: <BlogCodelandia /> },
]);

export default router;
