export const handleStop = (counter, counterId, setCountText) => {
  const startButton = document.querySelector("#startButton");
  startButton.removeAttribute("disabled");
  setCountText(() => {
    if (counter > 0) {
      return "resume";
    }
    return "start";
  });
  clearInterval(counterId);
};
