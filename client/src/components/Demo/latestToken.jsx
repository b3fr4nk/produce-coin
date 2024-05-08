function latestToken(Context) {
  const { token } = Context;

  return (
    <div>
      <p>{token}</p>
    </div>
  );
}

export default latestToken;
