import { Outlet } from 'react-router-dom';
import './index.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className=" mx-auto max-w-[1920px]">
      <Header/>
      <Outlet/>
      <Footer/>
    
    </div>
  );
}

export default App;
