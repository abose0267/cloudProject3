function load_style() {
  page_style = localStorage.getItem("page_style");
  if (page_style === null) {
    page_style = "styles.css";
  }
  document.getElementById("page_style").setAttribute("href", page_style);
}
function light_mode() {
  localStorage.setItem("page_style", "styles.css");
  load_style();
}
function dark_mode() {
  localStorage.setItem("page_style", "styles2.css");
  load_style();
}

function toggle_mode() {
  if (localStorage.getItem("page_style") === "styles.css") {
    console.log("calling dm");
    dark_mode();
  } else {
    console.log("calling lm");
    light_mode();
  }
}
load_style(); // load style immediately
