import {render} from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";
import './index.css';
import App from "./App";
import Uniques1 from "./pages/uniques1";
import Unique from "./pages/unique";



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route exact path ="/" element={<App />} >
      <Route path ="/data" element={<Uniques1 />}>
        <Route path=":data2Id" element={<Unique />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
           <p>There's nothing here!</p>
          </main>
        }
      />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);