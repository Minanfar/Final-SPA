import { RouterProvider } from "react-router-dom";
import { router } from "./utilies/router";

function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
