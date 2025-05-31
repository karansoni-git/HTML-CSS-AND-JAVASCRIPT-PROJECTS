const createBtn = document.querySelector("#createBtn");
const noteArea = document.querySelector(".textNoteArea");
const allNotes = document.querySelectorAll(".notes");

createBtn.addEventListener("click", () => {
  let newNote = document.createElement("p");
  let delBtn = document.createElement("img");
  newNote.className = "notes";
  newNote.setAttribute("contenteditable", "true");
  delBtn.src = "trash.png";
  delBtn.id = "deleteBtn";
  noteArea.appendChild(newNote).appendChild(delBtn);
});

noteArea.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
  }
});
