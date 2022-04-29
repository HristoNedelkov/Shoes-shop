// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === "block") {
    mySidebar.style.display = "none";
  } else {
    mySidebar.style.display = "block";
  }
}
const divGenerate = (obj) => {
  return `
          <div class="field comment-card" >
          <label for="comment">| Автор: ${obj.name} |</label>
          <p>${obj.message}</p>
          </div>`;
};
function postComment() {
  let name = document.querySelector("#input-name-id");
  let message = document.querySelector("#input-message-id");
  if (name.value != "" && message.value != "") {
    commentServices.add({ name: name.value, message: message.value });
    alert("Успешно публикуван коментар!");
    reloadComments();
    name.value = "";
    message.value = "";
  } else {
    alert("Моля попълнете всички полета на формата!");
  }
}
