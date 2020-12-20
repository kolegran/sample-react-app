import {BrowserRouter} from "react-router-dom";
import "./styles.css";
import Header from "./Header";
import Body from "./Body";

function App() {
  return (
      <BrowserRouter>
          <div className={App}>
              <Header />
              <Body />
          </div>
      </BrowserRouter>
  );
}

export default App;
