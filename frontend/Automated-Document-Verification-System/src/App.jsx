import { useEffect } from "react";

function App() {

  useEffect(() => {
    fetch("http://localhost:5000")
      .then(res => res.text())
      .then(data => console.log(data));
  }, []);

  return (
    <div>
      <h1>Automated Document Verification System</h1>
      <p>Check console for backend response</p>
    </div>
  );
}

export default App;