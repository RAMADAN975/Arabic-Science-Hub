import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "../router";

// The main application component
export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
