import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages';
import { Footer, Header } from './components/Index';

const App: React.FC=()=> {
  return (
    <div className="w-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;