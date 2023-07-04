import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './Navigation/Header/Header';
import { useDispatch } from 'react-redux';
import { takeCurrentUser } from 'redux/thunks';
import { PrivateRoute } from './PrivatRoute/PrivetRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

const Home = lazy(() => import('../pages/HomePage/Home'));
const Contacts = lazy(() => import ('../pages/Contacts/Contacts'));
const LogInPage = lazy(() => import ('../pages/LogInPage/LogInPage'));
const RegistrationPage = lazy(() => import ('..//pages/RegistrationPage/RegistrationPage'));


export function App() {

  const dispatch = useDispatch();

   useEffect(() => {
    dispatch(takeCurrentUser())
   }, [dispatch])
  

  return (
<Router basename="/goit-react-hw-08-phonebook">
  <Header />
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={
      <PublicRoute path="/login" registered>
        <LogInPage />
      </PublicRoute>
    } />
      <Route path="/registration" element={
      <PublicRoute path="/login" registered>
        <RegistrationPage />
      </PublicRoute>
    } />
      <Route path="/contacts" element={
      <PrivateRoute>
        <Contacts />
      </PrivateRoute>
    } />
    </Routes>
  </Suspense>
</Router> 
  )
}
