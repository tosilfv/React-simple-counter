import { handleReset } from "../utils/handleReset";

export default function ResetButton({
  style,
  counterId,
  setButtonColor,
  setCounter,
  setCounterId,
  setCountText,
}) {
  return (
    <button
      style={{ ...style, backgroundColor: "grey" }}
      onClick={() =>
        handleReset(
          counterId,
          setButtonColor,
          setCounter,
          setCounterId,
          setCountText
        )
      }
    >
      reset counter
    </button>
  );
}
