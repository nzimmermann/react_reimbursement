import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from './Components/Navbar/Navbar';
import { Routes, Route, useRoutes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import routes from './Config/routes';
import { AuthProvider } from './Services/Auth/context';


function App() {


  return (
  <AuthProvider>
    <div className="App">
      
        <header className="App-header">
          <Navbar />
        </header>
        
        <main className="App-main">
          <Routes>
            {routes.map((route) => (
                <Route key={route.path}
                  path={route.path} element={route.element} 
                />
            ))}
          </Routes>
        </main>

    </div>
  </AuthProvider>
  );
}


export default App;

