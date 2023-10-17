import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './view/Home';
import NotifyIncidentForm from './components/NotifyIncidentForm/NotifyIncidentForm';
import NewRequirements from './view/NewRequirements/NewRequirements';
// import { useSelector } from 'react-redux';

const App = () => {

  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-background">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/createIssue" element={<NewRequirements />} />
          <Route exact path="/createIssue/form/softland" element={<NotifyIncidentForm />} />
          <Route exact path="/createIssue/form/taller" element={<NotifyIncidentForm />} />
          <Route exact path="/createIssue/form/circuitoCompras" element={<NotifyIncidentForm />} />
          <Route exact path="/createIssue/form/hardware" element={<NotifyIncidentForm />} />
          <Route exact path="/createIssue/form/choferes" element={<NotifyIncidentForm />} />
          <Route exact path="/createIssue/form/bussinesInteligent" element={<NotifyIncidentForm />} />
          <Route exact path="/createIssue/form/nuevosRequerimientos" element={<NotifyIncidentForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
