import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'

function App() {
  const [isDayMode, setIsDayMode] = useState(true);

  useEffect(() => {
    if (isDayMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [isDayMode]);

  return (
    <div className={`App ${isDayMode ? 'bg-white' : 'bg-gray-900'} min-h-screen text-gray-900 dark:text-white`}>
      <BrowserRouter>
        <Header isDayMode={isDayMode} setIsDayMode={setIsDayMode} />
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
