import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Result from "./pages/Results";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: "/items/:id",
    element: (
      <MainLayout>
        <Detail />
      </MainLayout>
    ),
  },
  {
    path: "/items",
    element: (
      <MainLayout>
        <Result />
      </MainLayout>
    ),
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
