import Layout from '@containers/Layout'
import Home from '@pages/Home'
import Login from '@pages/Login'
import PasswordRecovery from '@pages/PasswordRecovery'
// import SendEmail from '@pages/SendEmail'
// import NewPassword from '@pages/NewPassword'
// import MyAccount from '@pages/MyAccount'
// import CreateAccount from '@pages/CreateAccount'
// import Checkout from '@pages/Checkout'
// import Orders from '@pages/Orders'

// import NotFound from '@pages/NotFound'
import '@styles/global.css'
import AppContext from '@context/AppContext.js'
import React from 'react' // importamos el dom de react
// eslint-disable-next-line no-unused-vars
import ReactDom from 'react-dom'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import useInitialState from '@hooks/useInitialState'

const App = () => { // creamos el element
  const initialState = useInitialState()

  // eslint-disable-next-line no-unused-vars
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <>
  //       <Route basename="/curso-practico-react02" path='/' element={<Home />} />
  //       <Route path='/login' element={<Login />} />
  //       <Route path='/password-recovery' element={<PasswordRecovery />} />
  //     </>
  //   )
  // )

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter basename={document.baseURI.substring(document.baseURI.indexOf(window.location.origin) + window.location.origin.length, document.baseURI.lastIndexOf('/'))}>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/password-recovery' element={<PasswordRecovery />} />
          </Routes>
        
          {/* <RouterProvider router={router} /> */}

        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App // exportamos

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />}>
//       <Route path="dashboard" element={<Dashboard />} />
//       {/* ... etc. */}
//     </Route>
//   )
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

/* <Layout>
{/* login se cierra ya que no va a contener otro componete, como si lo hace layout */
/* <Login />
<RecoveryPassword />
</Layout> */

// <BrowserRouter>
//     <Switch>
//         <Layout>
//             <Route exact path="/" element={Home}/>
//             <Route exact path="/login" element={Login} />
//             <Route exact path="recovery-password" element={RecoveryPassword} />
//             <Route element={NotFound} />
//         </Layout>
//     </Switch>
// </BrowserRouter>
