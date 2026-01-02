import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import SignUp from './components/SignUp/SignUp'
import LoginFolder from './components/LoginFolder/LoginFolder'
import UserProfile from './components/UserProfileFolder/UserProfile'
import AddPaymentDetails from './components/AddPaymentDetailsFolder/AddPaymentDetails'
import TrainsFolder from './components/TrainsFolder/TrainsFolder'




import ProtectedRoute from './ProtectedRoute'
import AdminUploadTrains from './components/AdminUploadTrains/AdminUploadTrains'
import { getUserRole } from './auth'
import MasterListFolder from './components/MasterListFolder/MasterListFolder'


function App() {
  // const role=localStorage.getItem('role');
  // console.log("role",role);
  // const role=getUserRole();
  // console.log("rolee",role)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginFolder />} />
        <Route path='/signup' element={<SignUp />} />
        <Route
          path='/userprofile'
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path='/masterList'
          element={
            <ProtectedRoute>
              <MasterListFolder />
            </ProtectedRoute>
          }
        />

        <Route
          path='/addPaymentDetails'
          element={
            <ProtectedRoute>
              <AddPaymentDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path='/trains'
          element={
            <ProtectedRoute>
              <TrainsFolder />
            </ProtectedRoute>
          }
        />
          <Route
          path='/admin/upload-trains'
          element={
            <ProtectedRoute>
              <AdminUploadTrains />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
