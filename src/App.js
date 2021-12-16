import './styles/tailwind_css/directives.css'; // directives for Tailwind styles
import './styles/css/App.css'; // stylesheet for CSS styles
import Header from "./components/Header";

function App() {
  return (
    <div>
      {" "}
      {/* this is the page wrapper */}
      {/* Header */}
      <div className="app">
        {" "}
        <Header /> 
      </div>
      {/* Body */}
      <div>Lorem ipsum; This is the Body.... working as a Team</div>
    </div>
  );
}

export default App;