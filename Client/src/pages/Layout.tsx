import { Outlet } from "react-router-dom";

import { Navigation } from "../components/Navigation";



export const Layout = () => {
  return (
    <>
    <div className="min-h-screen bg-[#ede3dd] ">
      <header className=" bg-yellow-950 fixed w-full top-0">
        <Navigation  />
      </header>
      
        <main className="min-h-screen bg-[#ede3dd] "> 


        <Outlet /> 
            
        
        </main>


       <footer className=""></footer>
       </div>
          </>
        );
      };
      