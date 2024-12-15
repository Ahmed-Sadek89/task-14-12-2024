import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import MainLayout from "./components/layouts/main-layout";

export default function App() {
  return (
    <MainLayout>
      <RouterProvider router={routes} />
    </MainLayout>
  )
}