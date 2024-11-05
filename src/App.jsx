import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import CreateSocietyForm from './component/CreateSocietyForm';
import SideBar from './component/SideBar';
import ResidentManagement from './pages/ResidentManagement';
import FinancialManagement from './pages/FinancialManagement';
import Header from './component/Header';
import DashBoard from './pages/DashBoard';

import ResidentForm from './pages/ResidentForm';
import TenantForm from './pages/TenantForm';

function App() {
  return (
    <div className="d-flex"> {/* Flexbox container to position sidebar and content side by side */}
      {/* Main content area */}
      <div className="content-area" style={{ marginLeft: '290px', padding: '20px', width: '100%' }}> 
      <SideBar />
    <Header />
        <Routes>
          {/* Your route components */}


          
       
          <Route path='/tenantform' element={<TenantForm />} />
          <Route path='/ownerform' element={<ResidentForm />} />
        
          <Route path='/createSociety' element={<CreateSocietyForm />} />
          <Route path='/residentmanagement' element={<ResidentManagement />} />
          <Route path='/addresidents' element={<ResidentForm />} />
          <Route path='/financialmanagement' element={<FinancialManagement />} />
          <Route path='/dashboard' element={<DashBoard />} />
        </Routes>
      </div>
    </div>
  );
}  

export default App;
