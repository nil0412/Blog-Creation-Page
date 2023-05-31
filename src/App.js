import './App.css';
import BlogCreationForm from './Pages/BlogCreationForm';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<BlogCreationForm />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
