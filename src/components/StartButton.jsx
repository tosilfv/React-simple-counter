import { handleStart } from "../utils/handleStart";

export default function StartButton({
  style,
  buttonColor,
  counterId,
  countText,
  setButtonColor,
  setCounter,
  setCounterId,
}) {
  return (
    <button
      id="startButton"
      style={{ ...style, backgroundColor: buttonColor }}
      onClick={() =>
        handleStart(counterId, setButtonColor, setCounter, setCounterId)
      }
    >
      {countText} counting
    </button>
  );
}
