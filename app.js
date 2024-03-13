const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#011632';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});






window.addEventListener('DOMContentLoaded', () => {
  const aboutItems = document.querySelectorAll('.about-item');

  function adjustAnimation() {
    aboutItems.forEach((item, index) => {
      const descriptionContainer = item.querySelector('p');
      let animationDuration;

      const viewportWidth = window.innerWidth;

      switch (index) {
        case 0:
          animationDuration = 20000;
          break;
        case 1:
          animationDuration = 20000;
          break;
        case 2:
          animationDuration = 20000;
          break;
        case 3:
          animationDuration = 20000;
          break;
        case 4:
          animationDuration = 20000;
          break;
      }

      if (viewportWidth < 768) {
        descriptionContainer.style.fontSize = '15px';
      } else {
        descriptionContainer.style.fontSize = ''; 
      }

      const descriptionHeight = descriptionContainer.scrollHeight;

      document.styleSheets[0].insertRule(`@keyframes moveUp${index} {
        0% {
          transform: translateY(100%);
        }
        100% {
          transform: translateY(-${descriptionHeight}px);
        }
      }`, 0);

      descriptionContainer.style.animation = `moveUp${index} ${animationDuration}ms linear infinite`;
    });
  }

  adjustAnimation();

  window.addEventListener('resize', adjustAnimation);
});








document.addEventListener("DOMContentLoaded", function() {
  const admissionItems = document.querySelectorAll(".admission-item");

  admissionItems.forEach(item => {
    const imagesContainer = item.querySelector(".image-container");
    const images = imagesContainer.querySelectorAll("img");
    const prevBtn = item.querySelector(".prev-btn");
    const nextBtn = item.querySelector(".next-btn");
    let currentIndex = 0;
    let intervalId;

    const showImage = index => {
      images.forEach((img, i) => {
        if (i === index) {
          img.style.display = "block";
        } else {
          img.style.display = "none";
        }
      });
    };

    const showNextImage = () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    };

    const showPreviousImage = () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    };

    const startSlideshow = () => {
      intervalId = setInterval(showNextImage, 3000); 
    };

    const stopSlideshow = () => {
      clearInterval(intervalId);
    };

    nextBtn.addEventListener("click", () => {
      stopSlideshow();
      showNextImage();
    });

    prevBtn.addEventListener("click", () => {
      stopSlideshow();
      showPreviousImage();
    });

    startSlideshow();
    imagesContainer.addEventListener("mouseenter", stopSlideshow);
    imagesContainer.addEventListener("mouseleave", startSlideshow);
  });
});















var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];
var proceedButton = document.getElementById("proceedButton");
var agreeCheckbox = document.getElementById("agreeCheckbox");

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function resetModal() {
  modal.style.display = "none";
  agreeCheckbox.checked = false;
}

proceedButton.addEventListener('click', function () {
  if (agreeCheckbox.checked) {
    window.open('registrationForm.html', '_blank');
    resetModal(); 
  } else {
    alert("Please agree to the guidelines before proceeding.");
  }
});







document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('bgVideo');
  var homeSection = document.getElementById('home');

  
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  });

  
  observer.observe(homeSection);

  
  video.addEventListener('click', function () {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });


  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      video.pause();
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('bgVideo');
  var isMuted = true; 

  function toggleMute() {
    if (isMuted) {
      video.muted = false;
      isMuted = false;
    }
  }

  video.play();

  document.addEventListener('click', toggleMute);
});
