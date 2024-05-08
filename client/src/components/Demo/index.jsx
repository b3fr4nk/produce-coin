import useEth from "../../contexts/EthContext/useEth";
import Title from "./Title";

import ContractBtns from "./ContractBtns";
import NoticeWrongNetwork from "./NoticeWrongNetwork";

function Demo() {
  const { state } = useEth();

  const demo = (
    <>
      <div className="contract-container">
        <ContractBtns />
      </div>
    </>
  );

  return (
    <div className="demo">
      <Title />
      {!state.contract ? <NoticeWrongNetwork /> : demo}
    </div>
  );
}

export default Demo;
