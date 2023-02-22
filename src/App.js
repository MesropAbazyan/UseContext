import './App.css';
import React, { useContext } from 'react';

      // function Comp3({value}) {
      //   return <Comp2 value={value} />;
      // }
      // 
      // function Comp2({value}) {
      //   return <Comp1 value={value} />
      // }

      // function Comp1({value}) {
      //   return <div>Hello {value}</div>
      // }

function Comp3() {
  return <Comp2 />;
}

function Comp2() {
  return <Comp1 />
}

function Comp1() {
  const value = useContext(CountryContext);
  return <div>Hello {value}</div>
}

const CountryContext = React.createContext('Armenia');

function App() {
  return (
    <div className="App">
            {/* <Comp3 value='Armenia' /> */}
      <CountryContext.Provider value='Colombia'>
        <Comp3 />
      </CountryContext.Provider>
    </div>
  );
}

export default App;
