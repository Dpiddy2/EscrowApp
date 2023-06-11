import "./App.css";
import Form from "./form";

function App() {
  return (
    <div className="normalsection">
      <h1 className="heading1">Easycrow</h1>
      <h1 className="subheading">The number 1 crypto escrow service</h1>
      <button className="button">Connect Wallet</button>
      <button className="button2">Create Order</button>
      <Form></Form>
    </div>
  );
}

export default App;
