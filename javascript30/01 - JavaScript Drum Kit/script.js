function time(div) {
  setTimeout(function () {
    document.querySelector(div).classList.remove("playing");
  }, 300);
}

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 65) {
    const div65 = "div[data-key='65']";
    document.querySelector('audio[data-key="65"]').play();
    document.querySelector(div65).classList.add("playing");
    time(div65);
  } else if (e.keyCode == 83) {
    const div83 = "div[data-key='83']";
    document.querySelector('audio[data-key="83"]').play();
    document.querySelector(div83).classList.add("playing");
    time(div83);
  } else if (e.keyCode == 68) {
    const div68 = "div[data-key='68']";
    document.querySelector('audio[data-key="68"]').play();
    document.querySelector(div68).classList.add("playing");
    time(div68);
  } else if (e.keyCode == 70) {
    const div70 = "div[data-key='70']";
    document.querySelector('audio[data-key="70"]').play();
    document.querySelector(div70).classList.add("playing");
    time(div70);
  } else if (e.keyCode == 71) {
    const div71 = "div[data-key='71']";
    document.querySelector('audio[data-key="71"]').play();
    document.querySelector(div71).classList.add("playing");
    time(div71);
  } else if (e.keyCode == 72) {
    const div72 = "div[data-key='72']";
    document.querySelector('audio[data-key="72"]').play();
    document.querySelector(div72).classList.add("playing");
    time(div72);
  } else if (e.keyCode == 74) {
    const div74 = "div[data-key='74']";
    document.querySelector('audio[data-key="74"]').play();
    document.querySelector(div74).classList.add("playing");
    time(div74);
  } else if (e.keyCode == 75) {
    const div75 = "div[data-key='75']";
    document.querySelector('audio[data-key="75"]').play();
    document.querySelector(div75).classList.add("playing");
    time(div75);
  } else if (e.keyCode == 76) {
    const div76 = "div[data-key='76']";
    document.querySelector('audio[data-key="76"]').play();
    document.querySelector(div76).classList.add("playing");
    time(div76);
  }
});
