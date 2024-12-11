import { Outlet } from "react-router";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-mont">
      <header className="h-20 bg-white drop-shadow-md fixed w-full top-0 z-10">
        <Nav />
      </header>
      <main className="bg-slate-50 h-svh flex_center">
        <Outlet />
      </main>
      <footer className="bg-zinc-900 text-white min-h-56 flex_center">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
