import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import MenuComponent from './views/menu'
import DebugLevel from './views/levels/DebugLevel'
import LevelComponent from './views/menu/components/level'

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Routes>
          <Route exact path="/" element={<MenuComponent />} />
          <Route exact path="/debug-level" element={<DebugLevel />} />
          <Route path="/level" element={<LevelComponent />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
