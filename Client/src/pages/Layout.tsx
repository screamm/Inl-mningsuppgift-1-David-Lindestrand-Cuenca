import { Outlet } from "react-router-dom";
import "../styles/Layout.css";
import { Navigation } from "../components/Navigation";



export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      
        <main> <Outlet /> 
    
        
        
        </main>


       <footer></footer>
          </>
        );
      };
      