interface Props {
  assessment: string;
  percentage: number;
}

const Description = ({ assessment, percentage }: Props) => {
  return (
    <>
      <div className="card__assessment">{assessment}</div>
      <div className="card__description">
        You scored higher than {percentage}% of the people who have taken these
        tests.
      </div>
    </>
  );
};

export default Description;
