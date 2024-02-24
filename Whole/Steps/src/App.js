import { useState } from "react";

const messages = ["Learn React", "Apply for job", " Invest Your Time"];

export default function App() {
  // const [step, setStep] = useState(1);
  const [step, setSep] = useState(1);
  const [isOpen, setisOpen] = useState(true);
  function prev() {
    if (step > 1) {
      setSep((s)=> s - 1);
    }
  }

  function next() {
    if (step < 3) {
      setSep((s) => s + 1);
    }
  }
  return (
    <>
      <button className="btn" onClick={() => setisOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}> 2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button className="previous" onClick={prev}>
              previous
            </button>
            <button className="next" onClick={next}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
