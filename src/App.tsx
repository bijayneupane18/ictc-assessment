import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Offer from "./pages/offer/Offer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <MainLayout>
            <Home/>
          </MainLayout>
        </>
      ),
    },
    {
      path: "/showcase",
      element: (
        <>
          <MainLayout>
            <h1>This is showcase page</h1>
          </MainLayout>
        </>
      ),
    },
    {
      path: "/product",
      element: (
        <>
          <MainLayout>
            <h1>This is product page</h1>
          </MainLayout>
        </>
      ),
    },
    {
      path: "/offer",
      element: (
        <>
          <MainLayout>
            <Offer/>
          </MainLayout>
        </>
      ),
    },
    {
      path: "/job",
      element: (
        <>
          <MainLayout>
            <h1>This is job page</h1>
          </MainLayout>
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
