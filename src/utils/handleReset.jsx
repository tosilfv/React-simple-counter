export const handleReset = (
  counterId,
  setButtonColor,
  setCounter,
  setCounterId,
  setCountText
) => {
  const startButton = document.querySelector("#startButton");
  startButton.removeAttribute("disabled");
  clearInterval(counterId);
  setButtonColor("blue");
  setCounter(0);
  setCounterId(undefined);
  setCountText((countText) => {
    return (countText = "start");
  });
};
