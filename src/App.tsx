import Main from "./pages/main";
import { BrowserRouter } from "react-router-dom";
import Navbar from "@/shared/ui/navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Main />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
