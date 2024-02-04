export const handleStart = (
  counterId,
  setButtonColor,
  setCounter,
  setCounterId
) => {
  const startButton = document.querySelector("#startButton");
  startButton.setAttribute("disabled", "disabled");
  clearInterval(counterId);
  const id = setInterval(() => {
    setButtonColor((buttonColor) => {
      return buttonColor === "blue" ? "red" : "blue";
    });
    setCounter((counter) => {
      return counter + 1;
    });
  }, 1000);
  setCounterId(id);
};
