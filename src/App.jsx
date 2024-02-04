import { useState } from "react";
import ResetButton from "./components/ResetButton";
import StartButton from "./components/StartButton";
import StopButton from "./components/StopButton";
import "./App.css";

const style = {
  button: {
    fontFamily: "Silkscreen",
    letterSpacing: 3,
    margin: 10,
    textTransform: "capitalize",
  },
  counter: {
    fontFamily: "Shrikhand",
    fontSize: 100,
    padding: 50,
  },
};

function App() {
  const [buttonColor, setButtonColor] = useState("blue");
  const [counter, setCounter] = useState(0);
  const [counterId, setCounterId] = useState(undefined);
  const [countText, setCountText] = useState("start");

  return (
    <section>
      <section style={style.counter}>{counter}</section>
      <section>
        <StartButton
          style={style.button}
          buttonColor={buttonColor}
          counterId={counterId}
          countText={countText}
          setButtonColor={setButtonColor}
          setCounter={setCounter}
          setCounterId={setCounterId}
        />
      </section>
      <StopButton
        style={style.button}
        counter={counter}
        counterId={counterId}
        setCountText={setCountText}
      />
      <ResetButton
        style={style.button}
        counterId={counterId}
        setButtonColor={setButtonColor}
        setCounter={setCounter}
        setCounterId={setCounterId}
        setCountText={setCountText}
      />
    </section>
  );
}

export default App;
