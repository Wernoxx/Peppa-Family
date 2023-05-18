const sounds = document.getElementsByClassName("sound");

for (const sound of sounds) {
  sound.addEventListener("click", (event) => {
    const name = event.target.getAttribute('data-sound');
    document.getElementById(name).play()
  });
}
