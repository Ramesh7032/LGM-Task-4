let disp = document.querySelector(".disp");

let button = Array.from(document.getElementsByClassName("btn"));

button.map((button) => {
  button.addEventListener("click", (ele) => {
    ele.preventDefault();
    switch (ele.target.innerText) {
      case "C":
        disp.innerText = "";
        break;
      case "←":
        disp.innerText = disp.innerText.slice(0, -1);
        break;

      case "=":
        try {
          disp.innerText = eval(disp.innerText);
        } catch {
          disp.innerText = "Error!!!";
        }
        break;
      default:
        disp.innerText += ele.target.innerText;
    }
  });
});