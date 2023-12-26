const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)


function Counter({ count, counters, setCounters, index, onRemove }) {
  const handleIncrement = () => {
    const newCounters = [...counters];
    newCounters[index] = newCounters[index] + 1;
    setCounters(newCounters);
  };

  const handleDecrement = () => {
    const newCounters = [...counters];
    newCounters[index] = Math.max(newCounters[index] - 1, 0);
    setCounters(newCounters);
  };

  const handleReset = () => {
    const newCounters = [...counters];
    newCounters[index] = 0;
    setCounters(newCounters);
  };

  return (
    <div className='counter' key={index}>
      <button onClick={handleDecrement}> - </button>
      <h3>{count}</h3>
      <button onClick={handleIncrement}> + </button>
      <button onClick={handleReset}> C </button>
      <button onClick={onRemove}>X</button>
    </div>
  );
}

function SumInfo({ color, totalSum }) {
  return (
    <div className='suminfo'>
      <h1 style={{ color, fontSize: '50px' }}>Sum = {totalSum}</h1>
    </div>
  );
}

function App() {
  const [counters, setCounters] = React.useState([0]);

  const handleAddCounter = () => {
    const newCounters = [...counters, 0];
    setCounters(newCounters);
  };

  const handleRemoveCounter = (index) => {
    const newCounters = [...counters];
    newCounters.splice(index, 1);
    setCounters(newCounters);
  };

  // คำนวณผลรวมของ counters ทั้งหมด
  const totalSum = counters.reduce((sum, count) => sum + count, 0);
  // console.log('Increment Button Clicked', 'Decrement Button Clicked', 'Reset Button Clicked', 'Remove Button Clicked');

  return (
    <>
      <h1>Codecamp Academy 01</h1>
      <SumInfo color="red" totalSum={totalSum} />
      <button onClick={handleAddCounter} className="add-counter-btn">Add Counter</button>
      {counters.map((count, index) => (
        <Counter
          key={index}
          count={count}
          counters={counters}
          setCounters={setCounters}
          index={index}
          onRemove={() => handleRemoveCounter(index)}
        />
      ))}
    </>
  );
}

