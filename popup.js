document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("toggleActive")
    .addEventListener("click", handleToggleButton);
});

const handleToggleButton = () => {
  document.getElementById("popupContent").classList.toggle("active");
};
