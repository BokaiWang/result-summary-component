const Score = ({ children }: { children: string }) => {
  return (
    <div className="score__container">
      <div className="score">{children}</div>
      <div className="score__baseline">of 100</div>
    </div>
  );
};

export default Score;
