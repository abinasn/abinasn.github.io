import { createHashRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout";
import Home from "./home";
import Skill from "./skills";
import Work from "./work";
import Contact from "./contact";
import Resume from "./resume";
import { ThemeProvider } from "./hooks/theme";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/skill", element: <Skill /> },
      { path: "/work", element: <Work /> },
      { path: "/contact", element: <Contact /> },
      { path: "/resume", element: <Resume /> },
    ],
  },
]);

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}