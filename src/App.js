import './App.css';
import Header from './Component/Header'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Landing from './Pages/Landing/index'

function App() {
  return (
    <div className="App">
   {/* <Navbar /> */}
   <Header />
   <Landing />
   <Footer />
    </div>
  );
}

export default App;
