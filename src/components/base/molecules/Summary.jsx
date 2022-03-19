const Summary = ({ summaryList }) => {
  const color = {
    Positive: 'drop-shadow-md w-full bg-green-200 p-2 mt-2 mb-2 rounded-lg',
    Negative: 'drop-shadow-md w-full bg-red-200 p-2 mt-2 mb-2 rounded-lg',
    Neutral: 'drop-shadow-md w-full bg-blue-200 p-2 mt-2 mb-2 rounded-lg'
  };  
  return (
    <div className="flex flex-col h-full w-full bg-saas-main ml-4 rounded-xl drop-shadow-lg p-6 hover:drop-shadow-xl">
      <div className="flex flex-row justify-between items-center">
        <div className="text-xl text-saas-accent">Summary</div>
      </div>
      <div className="h-full overflow-y-scroll">
        {summaryList.map(({ sentiment, date, sentence }, key) => (
          <div key={key} className={color[sentiment]}>
            {sentence}
            {sentiment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;
