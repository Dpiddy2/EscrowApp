import "./App.css";

const Form = () => {
  return (
    <div className="bigformcontainer">
      <div className="marguper">
        <button className="form-buttonupper">Outgoing Escrows</button>
        <button className="form-buttonupper">Incoming Escrows</button>
      </div>
      <button className="form-buttonupper">ESCROW ID #</button>

      <div className="form-container">
        <div className="form-section">
          <label className="form-label">Trade Description</label>
          <textarea
            className="form-textarea"
            placeholder="Enter trade description"
          ></textarea>
          <button className="form-button">Sign Description</button>
          <p className="form-label">2% fees on use</p>
        </div>
        <div className="form-section">
          <div className="form-column">
            <label className="form-label">Recipient Address</label>
            <input
              className="form-input"
              type="text"
              placeholder="Enter recipient address"
            />
          </div>
          <div className="form-column">
            <label className="form-label">Lawyer Address</label>
            <input
              className="form-input"
              type="text"
              placeholder="Enter lawyer address"
            />
          </div>
          <div className="form-column">
            <label className="form-label">Amount Eth</label>
            <input
              className="form-input"
              type="text"
              placeholder="Enter amount in Eth"
            />
          </div>
          <button className="form-button">Confirm Transaction</button>
        </div>
      </div>
      <div className="margbotom">
        <button className="form-buttonunder">Cancel Escrow</button>
        <button className="form-buttonunder">Finalize Escrow</button>
        <button className="form-buttonunder">Contact Support</button>
      </div>
    </div>
  );
};

export default Form;
