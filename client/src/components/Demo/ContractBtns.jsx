import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import { latestToken } from "./latestToken";

function ContractBtns() {
  const {
    state: { contract, accounts },
  } = useEth();
  const [farm, setFarm] = useState("");
  const [farmDate, setFarmDate] = useState("");
  const [processingPlant, setProcessingPlant] = useState("");
  const [processingDate, setProcessingDate] = useState("");
  const [token, setToken] = useState("");

  const awardItem = async (e) => {
    const address = accounts[0];
    const metadata = {
      farm: farm,
      farming_date: farmDate,
      processing_plant: processingPlant,
      processing_date: processingDate,
    };
    const testToken = await contract.methods
      .awardItem(address, JSON.stringify(metadata))
      .send({ from: accounts[0] });
    console.log(testToken);
  };

  // const read = async () => {
  //   const value = await contract.methods.read().call({ from: accounts[0] });
  //   setValue(value);
  // };

  // const write = async e => {
  //   if (e.target.tagName === "INPUT") {
  //     return;
  //   }
  //   if (inputValue === "") {
  //     alert("Please enter a value to write.");
  //     return;
  //   }
  //   const newValue = parseInt(inputValue);
  //   await contract.methods.write(newValue).send({ from: accounts[0] });
  // };

  return (
    <div>
      <div>
        <label>Farm</label>
        <input
          type="text"
          placeholder="Farm"
          onChange={(e) => {
            setFarm(e.target.value);
          }}
        />
        <label>Farming Date</label>
        <input
          type="date"
          placeholder="Farming Date"
          onChange={(e) => {
            setFarmDate(e.target.value);
          }}
        />
        <label>Processing Plant</label>
        <input
          type="text"
          placeholder="Processing Plant"
          onChange={(e) => {
            setProcessingPlant(e.target.value);
          }}
        />
        <label>Processing Date</label>
        <input
          type="date"
          placeholder="Processing Date"
          onChange={(e) => {
            console.log(e.target.value);
            setProcessingDate(e.target.value);
          }}
        />
      </div>
      <button onClick={awardItem} className="input-btn">
        Submit
      </button>
    </div>
  );
}

export default ContractBtns;
