import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary</h1>
      </header>
      <Dictionary />
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}
