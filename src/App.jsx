import React, { Suspense } from "react";
import Quotely from "./components/swr/Quotely";

function App() {
  return (
    <div>
      <h2>4 ways to fetch in REACT APP</h2>

      <Suspense fallback={<h1>Loading Data...</h1>}>
        <Quotely />
      </Suspense>
    </div>
  );
}

export default App;
