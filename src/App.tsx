import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Add from './pages/Add';
import NotFound from './pages/NotFound';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './pages/Error';


function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/book/:id" element={<Detail />} />
          <Route path="/add" element={<Add />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>

  );
}

export default App;
