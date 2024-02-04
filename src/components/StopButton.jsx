import { handleStop } from "../utils/handleStop";

export default function StopButton({
  style,
  counter,
  counterId,
  setCountText,
}) {
  return (
    <button
      style={style}
      onClick={() => handleStop(counter, counterId, setCountText)}
    >
      stop counting
    </button>
  );
}
