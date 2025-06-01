function startSite() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("mainContent").classList.remove("hidden");

  const audio = document.getElementById("birthdayMusic");
  audio.play();
}
