var openModalBtn = document.getElementById("openModal");
var videoModal = new bootstrap.Modal(document.getElementById("videoModal"));
var videoPlayer = document.getElementById("videoPlayer");

openModalBtn.addEventListener("click", function() {
  videoModal.show();
});

videoModal.addEventListener("hide.bs.modal", function() {
  videoPlayer.pause();
});

var openModalBtn = document.getElementById("openModal");
  var videoModal = new bootstrap.Modal(document.getElementById("videoModal"));
  var videoPlayer = document.getElementById("videoPlayer");

  openModalBtn.addEventListener("click", function() {
    videoModal.show();
  });

  videoModal.addEventListener("hide.bs.modal", function() {
    videoPlayer.pause();
  });