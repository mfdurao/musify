const ChordEditPage = () => {
  const space = " ";
  const test = "test alo test";
  const a = test.split(space);
  return (
    <div>
      {a.map((item, index) => (
        <div style={{ width: `calc(${item.length}% * 2.9)` }} key={index}>
          <input style={{ width: "100%" }} type="text" />
          <p style={{ width: "100%", background: "red", fontSize: "100%" }}>
            {item}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ChordEditPage;
