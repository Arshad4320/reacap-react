import { Suspense } from "react";
import "./App.css";
import Cars from "./components/cars/Cars";

const promiseData = fetch("/phone.json").then((res) => res.json());
function App() {
  return (
    <>
      <Suspense fallback={"data is loading...."}>
        <Cars promiseData={promiseData} />
      </Suspense>
    </>
  );
}

export default App;
