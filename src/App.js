import { useState, useEffect } from "react";

function App() {
  const randomColor = () => {
    let num = Math.floor(Math.random() * 4) + 1;
    if (num === 1) {
      return "#cb997e";
    }
    if (num === 2) {
      return "#2a1a1f";
    }
    if (num === 3) {
      return "#764134";
    }
    if (num === 4) {
      return "#ad8350";
    }

  };
  const matrix = ({ numRow, numCol }) => {
    return Array.from({ length: numRow }, () =>
      Array.from({ length: numCol }, () => randomColor())
    );
  };
  const [matrixA, setMatrixA] = useState([]);
  const [cols, setCols] = useState(2);
  const [rows, setRows] = useState(2);


  useEffect(() => {
    setMatrixA(() => matrix({ numRow: rows, numCol: cols }));
  }, [rows, cols]);

  const handleIncreaseCol = () => {
    setCols((prev) => prev + 1);
  };
  const handleDecreaseCol = () => {
    setCols((prev) => prev - 1);
  };
  const handleIncreaseRow = () => {
    setRows((prev) => prev + 1);
  };
  const handleDecreaseRow = () => {
    setRows((prev) => prev - 1);
  };

  return (
    <div className="w-[60%] mt-10 mx-auto">
      <div className="flex justify-center text-white">
        <div className="bg-slate-600 w-40 h-9 rounded-md flex justify-around">
          <button type="button" className="text-lg font-semibold">
            Colunms: {cols}
          </button>
          <div className="flex items-center">
            <i
              className="fa-solid fa-angle-down"
              onClick={handleDecreaseCol}
            ></i>
            <i
              className="fa-solid fa-angle-up ml-2"
              onClick={handleIncreaseCol}
            ></i>
          </div>
        </div>
        <div className="bg-slate-600 w-40 ml-3 h-9 rounded-md flex justify-around">
          <button type="button" className="text-lg font-semibold">
            Rows: {rows}
          </button>
          <div className="flex items-center">
            <i
              className="fa-solid fa-angle-down "
              onClick={handleDecreaseRow}
            ></i>
            <i
              className="fa-solid fa-angle-up ml-2"
              onClick={handleIncreaseRow}
            ></i>
          </div>
        </div>
      </div>

      <div className={` flex mt-6 grid grid-cols-${cols}`}>
        {matrixA.map((row) =>
          row.map((col) => (
            <div
              className="py-4 m-1 text-white text-lg font-semibold col-span-1 rounded-md text-center"
              style={{ background: col}}

              onClick
            >
              
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
