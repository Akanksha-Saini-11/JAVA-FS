import "./App.css";
import { lazy, Suspense } from "react";

const Dash = lazy(() => import("./components/dashboard"));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Dash />
    </Suspense>
  );
}

export default App;
