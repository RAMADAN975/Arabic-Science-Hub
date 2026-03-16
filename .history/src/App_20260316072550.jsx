import React from "react";
import './App.css'
import { RouterProvider } from "react-router-dom";
import router from "../router";

// The main application component
export default function App() {
  return (
    // We return the RouterProvider which handles all the navigation
    <RouterProvider router={router} />
  )
}
