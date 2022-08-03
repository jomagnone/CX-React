
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx'
import SolutionRemote from './pages/SolutionRemote.jsx'
import Journey from './pages/Journey.jsx'
import Initiative from './pages/Initiative.jsx'
import SideBar from './components/SideBar.jsx'
import WrapperPage from './components/WrapperPage.jsx'
import WrapperContent from './components/WrapperContent.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    < >
      <BrowserRouter>
         <WrapperPage>  
          <SideBar />
          <WrapperContent>
              <NavBar />
              <Routes>
                <Route path = "/" element = {<Dashboard />} />
                <Route path = "/solucion remota" element = {<SolutionRemote />} />
                <Route path = "/journey" element = {<Journey />} />
                <Route path = "/initiative/:idInit" element = {<Initiative />} /> 
              </Routes>
              <Footer />
          </WrapperContent>
         </WrapperPage>
      </BrowserRouter>
    </>
  );
}

export default App;
