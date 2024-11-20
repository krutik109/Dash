


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
import Rm from "./pages/Rm";
import FinancialExpense from "./pages/FinancialExpenses";
import EventParticipation from "./Resident/Event Participation/EventParticipation";
import ActivityParticipates from "./Resident/Activity Participate/ActivityParticipates";
import SecurityProtocols from "./Resident/Security Protocols/SecurityProtocols";
import PollApp from "./Resident/Polls/PollApp";
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
          ,{
            path: "/rm",
            element:<Rm />,
          }
          ,
          {
            path: "/financialexpenses",
            element:<FinancialExpense />,
          },{
            path: "/eventparticipation",
            element:<EventParticipation/>,
          },{
            path: "/activityparticipate",
            element:<ActivityParticipates/>
          },{
            path: "/securityprotocols",
            element:<SecurityProtocols/>
          },{
            path: "/polls",
            element:<PollApp/>
          }

      ]
    }
  ])


  return <RouterProvider router={router} />
}


export default App;