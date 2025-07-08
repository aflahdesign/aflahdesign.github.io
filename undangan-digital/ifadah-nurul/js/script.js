// Fungsi nama tamu
const params = new URLSearchParams(document.location.search);
let to = params.get("to");

// Format nama tamu (Title Case)
function formatNama(nama) {
  return nama
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Tampilkan nama tamu
if (to) {
  const formattedTo = formatNama(to);
  const tamuElements = document.querySelectorAll(".info_tamu");
  tamuElements.forEach(el => {
    el.innerHTML = formattedTo;
    el.style.textAlign = "center";
  });
}

// Menonaktifkan scroll saat halaman dimuat
disableScrolling();
document.body.style.overflowY = "hidden";
document.body.style.height = "100vh";

// Fungsi ketika tombol diklik
document.getElementById("btnOpens").onclick = function () {
    myFunction();
    document.getElementById("song").play();
};

// Fungsi mengaktifkan kembali scroll
function myFunction() {
    document.body.style.overflowY = "unset";
    enableScrolling();
}

// Disable scrolling dengan mengunci posisi scroll
function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
        window.scrollTo(x, y);
    };
}

// Enable scrolling kembali
function enableScrolling() {
    window.onscroll = function () {};
}

// Fungsi Copy
function copyText(el) {
    var content = jQuery(el).siblings('div.copy-content').html();
    var temp = jQuery('<textarea>');
    jQuery("body").append(temp);
    temp.val(content.replace(/<br ?\/?>/g, "\n")).select();
    document.execCommand("copy");
    temp.remove();

    var text = jQuery(el).html();
    jQuery(el).html(jQuery(el).data('message'));

    setTimeout(function() {
    jQuery(el).html(text);
    }, 1000);
}

// ========== Scroll Reveal ==========
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    if (elementTop < windowHeight) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function revealin() {
  let reveals = document.querySelectorAll(".revealin");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    if (elementTop < windowHeight) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", revealin);

// ========== Smart Audio Control by WeddingPress ==========
const audioElement = document.getElementById("song");

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    if (audioElement && !audioElement.paused) {
      audioElement.pause();
    }
    if (typeof player !== "undefined" && player.getPlayerState) {
      if (
        player.getPlayerState() === YT.PlayerState.PLAYING ||
        player.getPlayerState() === YT.PlayerState.BUFFERING
      ) {
        player.pauseVideo();
      }
    }
  } else if (document.visibilityState === "visible") {
    if (audioElement && audioElement.paused) {
      audioElement.play().catch((err) => {
        console.warn("Error saat mencoba memutar audio:", err);
      });
    }
    if (typeof player !== "undefined" && player.getPlayerState) {
      if (player.getPlayerState() !== YT.PlayerState.PLAYING) {
        player.playVideo();
      }
    }
  }
});

window.addEventListener("load", () => {
  if (audioElement) {
    audioElement.play().catch((err) => {
      console.warn("Error saat mencoba memutar audio saat halaman dimuat:", err);
    });
  }
});