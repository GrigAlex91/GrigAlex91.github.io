document.getElementById('btn').addEventListener("click", list)

function list () {
  let change = document.getElementById("list-item");
  if (change.style.display == '') {
    change.style.display = "flex"
  } else if (change.style.display == 'none') {
    change.style.display = "flex"
  } else {
    change.style.display = "none"
  }
}
