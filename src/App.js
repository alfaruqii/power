import Navbar from "./components/Navbar";
import PageOne from "./pages/PageOne";
import SubPagesOne from "./pages/SubPagesOne";
import QuotesOne from "./pages/QuotesOne";
import Footer from "./components/Footer";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  console.log("test")
  return (
    <Suspense>
      <div className="font-david">
        <Navbar />
        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="/others" element={<SubPagesOne />} />
          <Route path="/quotes" element={<QuotesOne />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
