import { useState, useEffect } from "react";
import "./App.css";
import Form from "./form";

function App() {
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState(0);
  const [showCreateOrder, setShowCreateOrder] = useState(false);

  useEffect(() => {
    // Function to check if MetaMask is connected and get account and balance
    const checkMetaMaskConnection = async () => {
      if (window.ethereum && window.ethereum.selectedAddress) {
        setConnected(true);
        setAccount(window.ethereum.selectedAddress);
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          const balance = await window.ethereum.request({
            method: "eth_getBalance",
            params: [accounts[0]],
          });
          setBalance(parseInt(balance));
        }
      } else {
        setConnected(false);
        setAccount("");
        setBalance(0);
      }
    };

    checkMetaMaskConnection();
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request MetaMask to connect
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setConnected(true);
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          const balance = await window.ethereum.request({
            method: "eth_getBalance",
            params: [accounts[0]],
          });
          setBalance(parseInt(balance));
        }
      } catch (error) {
        console.log("Error connecting wallet:", error);
      }
    }
  };

  const disconnectWallet = async () => {
    if (window.ethereum && window.ethereum.disconnect) {
      try {
        await window.ethereum.disconnect();
        setConnected(false);
        setAccount("");
        setBalance(0);
      } catch (error) {
        console.log("Error disconnecting wallet:", error);
      }
    }
  };

  const handleCreateOrder = () => {
    setShowCreateOrder(true);
  };

  return (
    <div className="normalsection">
      <h1 className="heading1">Easycrow</h1>
      <h1 className="subheading">The number 1 crypto escrow service</h1>
      {connected ? (
        <div className="wallet-info">
          <button className="button connected">
            Connected - {`${balance} ETH`} -{" "}
            {`${account.slice(0, 3)}...${account.slice(-3)}`}
          </button>
          <div className="menu">
            <button className="menu-button">...</button>
            <div className="menu-options">
              <button className="menu-option" onClick={disconnectWallet}>
                Log Out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button className="button" onClick={connectWallet}>
          Connect Wallet
        </button>
      )}
      <button className="form-button" onClick={handleCreateOrder}>
        Create Order
      </button>
      {showCreateOrder && <Form connected={connected} />}
    </div>
  );
}

export default App;
