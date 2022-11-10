$(document).ready(() => {
  let guitarElement = document.querySelector(".guitarSound");
  let pianoElement = document.querySelector(".pianoSound");
  let trumpetElement = document.querySelector(".trumpetSound");
  let triangleElement = document.querySelector(".triangleSound");
  let harmonikaElement = document.querySelector(".harmonikaSound");
  let saxElement = document.querySelector(".saxSound");

  $("#guitarPlay").click(() => {
    guitarElement.play();
  });
  $("#pianoPlay").click(() => {
    pianoElement.play();
  });
  $("#trumpetPlay").click(() => {
    trumpetElement.play();
  });
  $("#trianglePlay").click(() => {
    triangleElement.play();
  });
  $("#harmonikaPlay").click(() => {
    harmonikaElement.play();
  });
  $("#saxPlay").click(() => {
    saxElement.play();
  });
});
