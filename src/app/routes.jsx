import React from "react";
import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Men from "../pages/Men";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/men",
    element: <Men />,
  },
]);

export default router;