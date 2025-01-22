import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Task from "./pages/Task";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element = {<Task/>}/>
      </>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
