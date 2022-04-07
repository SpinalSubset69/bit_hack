import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MenuComponent from "./views/menu";

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Routes>
          <Route exact path="/" element={<MenuComponent />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
