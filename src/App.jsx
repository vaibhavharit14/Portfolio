import Contact from "./component/Contact";


import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import Technologies from "./component/Technologies";

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">

      <div className="fixed inset-0 -z-10">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
 <Navbar/>
 <Hero/>
 <Technologies/>
 <Project/>
 
 <Contact/>
      </div>
    </div>
  );
};

export default App;
