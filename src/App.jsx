import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

function App() {
  return (
    <>
      <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#d2d4eb_40%,#4ca9ce_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000000_40%,#4ca9ce_100%)]"></div>

      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16 ">
        <Navbar />
        <Hero />
      </main>
    </>
  );
}

export default App;
