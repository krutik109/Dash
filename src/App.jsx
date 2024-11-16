// import { Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.css';
// import SideBar from './component/SideBar';
// import Header from './component/Header';
// import DashBoard from './pages/DashBoard';

// import ResidentForm from './pages/ResidentForm';
// import TenantForm from './pages/TenantForm';
// import OtherIncome from './pages/OtherIncome';
// import RegistrationForm from './component/RegistrationForm';

// function App() {
//   return (
//     <div className="d-flex"> {/* Flexbox container to position sidebar and content side by side */}
//       {/* Main content area */}
//       <div className="content-area" style={{ marginLeft: '290px', padding: '20px', width: '100%', backgroundColor: '#f5f5f5'}}> 
//       <SideBar />
//     <Header />
//         <Routes>
//           {/* Your route components */}


          
//           <Route path='/' element={<RegistrationForm />} />
       
//           <Route path='/tenantform' element={<TenantForm />} />
//           <Route path='/ownerform' element={<ResidentForm />} />
        
//           <Route path='/createSociety' element={<CreateSocietyForm />} />
//           <Route path='/residentmanagement' element={<ResidentManagement />} />
//           <Route path='/addresidents' element={<ResidentForm />} />
//           <Route path='/financialmanagement' element={<FinancialManagement />} />
//           <Route path='/dashboard' element={<DashBoard />} />
//           <Route path='/otherincome' element={<OtherIncome />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }  

// export default App;


import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import FinancialManagement from './pages/FinancialManagement';
 import CreateSocietyForm from './component/CreateSocietyForm';
 import ResidentForm from './pages/ResidentForm';
import DashBoard from './pages/DashBoard';
import Layout from "./component/Layout/Layout";
import FacilityManagement from "./pages/FacilityManagement";
import TenantForm from './pages/TenantForm';
import OtherIncome from './pages/OtherIncome';
import ComplaintTracking from "./pages/ComplaintTracking";
import SecurityGaurd from "./pages/SecurityGaurd";
import VisitorLogs from "./pages/VisitorLogs";
import SecurityProtocol from "./pages/SecurityProtocol";
import ResidentManagement from "./pages/ResidentManagement/ResidentManagement";
const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <DashBoard/>,
        },
        {
          path: "/ResidentManagement",
          element: <ResidentManagement />,
        },
        {
          path: "/FinancialManagement",
          element: <FinancialManagement />,
        },
        {
          path: "/FacilityManagement",
          element: <FacilityManagement />,
        },
        {
          path:'/createSociety' ,
          element:<CreateSocietyForm />
        },
        {
          path:'/addresidents', element:<ResidentForm />
        },
        {
          path:'/tenantform', element:<TenantForm />
        },
        {
          path:'/ownerform', element:<ResidentForm />
        },
        {
          path:'/otherincome', element:<OtherIncome />  
        },
        {
          path:'/complainttracking', element:<ComplaintTracking />
        },{
          path:'/securitygaurd', element:<SecurityGaurd />
        },{
          path:'/visitorlogs', element:<VisitorLogs />
        },
          {
            path: "/securityprotocol",
            element:<SecurityProtocol />,
          }

      ]
    }
  ])


  return <RouterProvider router={router} />
}


export default App;