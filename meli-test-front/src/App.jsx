import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Result from "./pages/Results";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { HelmetProvider } from "react-helmet-async";

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
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  );
};

export default App;
