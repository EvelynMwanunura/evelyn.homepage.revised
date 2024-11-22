document.getElementById("list").addEventListener("click", (event) => {
  let new_span = document.createElement("span");
  new_span.innerText = " ✔";

  event.target.appendChild(new_span);
});
