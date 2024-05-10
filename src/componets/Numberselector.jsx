function Numberselector({ select, setSelect, error, seterror }) {
  const arrNum = [1, 2, 3, 4, 5, 6];

  const numberselecter = (value) => {
    setSelect(value);
    seterror("");
  };

  return (
    <>
      <div>
        <div className="flex gap-5 p-8">
          <p className="text-red-500">{error}</p>
          {arrNum.map((value, i) => (
            <div
              selected={value === select}
              key={i}
              onClick={() => numberselecter(value)}
              className={`h-[72px] w-[72px] border-2 border-solid border-black grid place-content-center text-[24px] ${
                value === select ? "bg-black text-white" : "bg-white text-black"
              } `}
            >
              {value}
            </div>
          ))}
        </div>

        <p className="h-[36px] w-[182px] text-2xl float-end">Select Number</p>
      </div>
    </>
  );
}

export default Numberselector;
