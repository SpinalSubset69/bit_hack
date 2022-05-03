import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import MenuComponent from './views/menu'
import DebugLevel from './views/levels/DebugLevel'
import LevelComponent from './views/menu/components/level'
import useLevelSelector from './views/menu/hooks/useLevelSelector'

function App() {
  const { level } = useLevelSelector()
  return (
    <div className="app-wrapper">
      <Router>
        <Routes>
          <Route exact path="/" element={<MenuComponent />} />
          <Route exact path="/debug-level" element={<DebugLevel />} />
          <Route
            path="/level"
            element={
              Object.entries(level).length === 0 ? <Navigate to="/" /> : <LevelComponent />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
