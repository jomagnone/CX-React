import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx'
import Journey from './pages/Journey.jsx'
import Initiative from './pages/Initiative.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'
import SideBar from './components/SideBar.jsx'
import WrapperPage from './components/WrapperPage.jsx'
import WrapperContent from './components/WrapperContent.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import EpicContextProvider from './contexts/EpicContext.jsx'

function App() {
  return (
    < >
      <EpicContextProvider>
      <BrowserRouter>
         <WrapperPage>  
          <SideBar />
          <WrapperContent>
              <NavBar />
              <Routes>
                <Route path = "" element = {<Dashboard />} />
                <Route path = "/home" element = {<Dashboard />} />
                <Route path = "/Nosotros" element = {<About />} />
                <Route path = "/journey" element = {<Journey />} />
                <Route path = "/:idInit" element = {<Initiative />} /> 
                <Route path = "/*" element = {<NotFound />} />
  
              </Routes>
              <Footer />
          </WrapperContent>
         </WrapperPage>
        </BrowserRouter>
        </EpicContextProvider>
    </>
  );
}

export default App;
