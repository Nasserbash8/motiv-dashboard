import React , {useContext, useEffect, useState} from 'react'
import { BrowserRouter} from "react-router-dom";
import Layout from "./components/layout/layout";
import Sidebar from "./components/layout/Sidebar";
import Content from "./components/layout/Content";
import MainRoutes from "./components/mainRoutes";
import { ThemeProvider } from './context/ThemeContext';

function App() {

  const [isactive, setisactive] = useState();
  const handleClick =(active)=>{
       setisactive(active)
  }
  
  return (
    <div className={`App `}>
        <div className={`app main-container d-flex `} >
             <BrowserRouter>
                    <ThemeProvider>
                        <Content>
                          
                            <Layout isactive={isactive} handleClick={handleClick} />
                            <MainRoutes/>
                        </Content>     
                    </ThemeProvider>
              </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
