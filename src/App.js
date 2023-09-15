import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './pages/userpage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Dashboard />}></Route>
      
    </Routes>
    </BrowserRouter>

  );
}

export default App;
