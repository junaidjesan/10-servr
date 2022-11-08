
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { projectRouter } from './Route/Route';

function App() {
  return (
    <div className="App">
      <RouterProvider router={projectRouter}>

      </RouterProvider>
    </div>
  );
}

export default App;
