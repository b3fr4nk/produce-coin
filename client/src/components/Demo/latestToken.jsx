function LatestToken(props) {
  const { token } = props;
  if (token === "Waiting for first Token") {
    return (
      <div>
        <p>Waiting</p>
      </div>
    );
  }
  const url = "https://sepolia.etherscan.io/tx/" + token;
  return (
    <div>
      <a href={url}>token</a>
    </div>
  );
}

export default LatestToken;
