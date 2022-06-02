import React from 'react';

// import { Container } from './styles';

const Home = () => {
  const space = " ";
  const test = "testa alo test AAAAA AAAAAAAAAAAA";
  const a = test.split(space);
  console.log(a)
  return (
    <div>
      <div>
      {a.map((item, index) => (
            <div style={{ width: `fit-content` }} key={index}>
              <input style={{ width: "100%" }} type="text" />
              <p
                style={{ width: "fit-content", background: "red", fontSize: "2rem" }}
              >
                {item}
              </p>
            </div>
          ))}
    </div>
    </div>
  );
}

export default Home;