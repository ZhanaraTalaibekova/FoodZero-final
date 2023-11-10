import { Routes, Route } from 'react-router';
import './App.css';
import { Layout } from './shared';
import { Home, About, Contact, Blogs, Menu, Portfolio, OneBlog, Login, Registration, Cart } from './pages';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/blogs/:id" element={<OneBlog />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
