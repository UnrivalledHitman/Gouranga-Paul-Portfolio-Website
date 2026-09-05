import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CareerTimeline from "./components/CareerTimeline";
import Competencies from "./components/Competencies";
import MetricsBar from "./components/MetricsBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <Navbar />
      <main>
        <Hero />
        <CareerTimeline />
        <Competencies />
        <MetricsBar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
