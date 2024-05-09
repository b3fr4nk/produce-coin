import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import LatestToken from "./LatestToken";

function ContractBtns() {
  const {
    state: { contract, accounts },
  } = useEth();
  const [farm, setFarm] = useState("");
  const [farmDate, setFarmDate] = useState("");
  const [processingPlant, setProcessingPlant] = useState("");
  const [processingDate, setProcessingDate] = useState("");
  const [token, setToken] = useState("Waiting for first Token");

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
    setToken(testToken.transactionHash);
  };

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
      <LatestToken token={token} />
    </div>
  );
}

export default ContractBtns;
