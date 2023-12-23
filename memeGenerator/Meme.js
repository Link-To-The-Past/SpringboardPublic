document.addEventListener("DOMContentLoaded", function () {
  let memeForm = document.getElementById("newMemeForm");
  let memeList = document.getElementById("memeList");
  let count = 0;
  memeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const card = document.createElement("div");
    const container = document.createElement("div");
    container.id = count;
    console.log(count);
    card.classList.add("card");
    let removeButton = document.createElement("button");
    removeButton.innerText = "Send to the void";
    removeButton.style.color = "red";
    removeButton.addEventListener("click", remove);
    removeButton.value = count;
    card.style.backgroundImage = `url(${newMemeForm.image.value})`;

    let top = document.createElement("h2");
    top.innerText = document.getElementById("top").value;
    card.appendChild(top);

    let bottom = document.createElement("h2");
    bottom.innerText = document.getElementById("bottom").value;
    card.appendChild(bottom);
    container.appendChild(card);
    container.appendChild(removeButton);
    memeList.appendChild(container);
    count++;
    memeForm.reset();
  });
  function remove(event) {
    console.log(event.target.value);
    const contents = document.getElementById(event.target.value);
    console.log(contents);
    contents.remove();
  }
});
