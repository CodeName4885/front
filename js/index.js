  const modalOpenBtn = document.querySelector(".modal-btn");
  const modal = document.querySelector(".modal-wrap");
  const modalCloseBtn = document.querySelector(".modal-close-btn");
  const modalBody = document.querySelector(".modal-body");
  const modalBox = document.querySelector(".modal-modal-box");
  let progressInterval
  let secondprogressInterval
  modalOpenBtn.addEventListener("click", ModalAppears)
  modalCloseBtn.addEventListener("click", ModalDisappears)
  function ModalAppears(){
    console.log("modalOpenBtn click!")
    modal.classList.add("active");
    progress = 0;
    secondprogress = 0;
    updateProgress();
    progressInterval = setInterval(updateProgress, 10);
    secondprogressInterval = setInterval(secondupdateProgress, 10);
    modalBody.scrollTo(0, 0);
    modalBox.scrollTo(0, 0);
  }
  function ModalDisappears(){
    modal.classList.remove("active");
    clearInterval(progressInterval);
    clearInterval(secondprogressInterval);
  }

  const number = document.querySelector(".number");
  const firstCanvas = document.getElementById("first-animation");
  const firstContext = firstCanvas.getContext('2d');

  const canvasWidth = firstCanvas.width;
  const canvasHeight = firstCanvas.height;

  const centerX = canvasWidth / 2;
  const centerY = canvasHeight / 2;
  const radius = canvasWidth / 2;

  let progress = 0;

  let increasing = true; // 초기값을 증가 중으로 설정
  function updateProgress(){
    if(increasing){
      progress += 0.007;
      if(progress >= 1){
        increasing = false;
      }
    } else {
      progress -= 0.007;
      if(progress <= 0.6){
        increasing = true;
        clearInterval(progressInterval);
      }
    }

    firstContext.clearRect(0, 0, canvasWidth, canvasHeight);


    firstContext.beginPath();
    firstContext.arc(centerX, centerY, radius -10, 0, 2 * Math.PI);
    firstContext.lineWidth = 1;
    firstContext.strokeStyle = "#A2A2A2";
    firstContext.stroke();

    firstContext.beginPath();
    firstContext.arc(centerX, centerY, radius -10, -Math.PI / 2,
    -Math.PI / 2 + 2 * Math.PI * progress);
    firstContext.lineWidth = 3;
    firstContext.strokeStyle = "#2D334F";
    firstContext.stroke();

    number.innerText = Math.round(progress * 100) + "%";

  }

  const number1 = document.querySelector(".number1");
  const secondCanvas = document.getElementById("second-animation");
  const secondContext = secondCanvas.getContext('2d');

  const secondcanvasWidth = secondCanvas.width;
  const secondcanvasHeight = secondCanvas.height;

  const secondcenterX = secondcanvasWidth / 2;
  const secondcenterY = secondcanvasHeight / 2;
  const secondradius = secondcanvasWidth / 2;

  let secondprogress = 0;

  let secondincreasing = true; // 초기값을 증가 중으로 설정
  function secondupdateProgress(){
    if(secondincreasing){
      secondprogress += 0.007;
      if(secondprogress >= 1){
        secondincreasing = false;
      }
    } else {
      secondprogress -= 0.007;
      if(secondprogress <= 0.5){
        secondincreasing = true;
        clearInterval(secondprogressInterval);
      }
    }

    secondContext.clearRect(0, 0, canvasWidth, canvasHeight);


    secondContext.beginPath();
    secondContext.arc(secondcenterX, secondcenterY, secondradius -10, 0, 2 * Math.PI);
    secondContext.lineWidth = 1;
    secondContext.strokeStyle = "#A2A2A2";
    secondContext.stroke();

    secondContext.beginPath();
    secondContext.arc(secondcenterX, secondcenterY, secondradius -10, -Math.PI / 2,
    -Math.PI / 2 + 2 * Math.PI * secondprogress);
    secondContext.lineWidth = 3;
    secondContext.strokeStyle = "#2D334F";
    secondContext.stroke();

    number1.innerText = Math.round(secondprogress * 100) + "%";
  }

  const projectImg1 = document.getElementById("project-img-1");
  const projectImgTitle = document.getElementById("project-img-title");
  const projectImgContent = document.getElementById("project-img-content");
  const projectRef = document.getElementById("project-ref");

  projectImg1.addEventListener("mouseover", imgMouseOver);
  projectImg1.addEventListener("mouseout",imgMouseOut);
  projectImgTitle.addEventListener("mouseover", imgMouseOver);
  projectImgTitle.addEventListener("mouseout",imgMouseOut);
  projectImgContent.addEventListener("mouseover", imgMouseOver);
  projectImgContent.addEventListener("mouseout",imgMouseOut);
  projectRef.addEventListener("mouseover", imgMouseOver);
  projectRef.addEventListener("mouseout",imgMouseOut);
  
  function imgMouseOver(){
    projectImg1.style.filter = "brightness(0.3)";
    projectImgTitle.style.display = "block";
    projectImgContent.style.display = "block";
    projectRef.style.display = "block";
  }
  
  function imgMouseOut(){
    projectImg1.style.filter = "brightness(1)";
    projectImgTitle.style.display = "none";
    projectImgContent.style.display = "none";
    projectRef.style.display = "none";
  }

  const projectImg2 = document.getElementById("project-img-2");
  const projectImgTitle2 = document.getElementById("project-img-title2");
  const projectImgContent2 = document.getElementById("project-img-content2");
  const projectRef2 = document.getElementById("project-ref2");

  projectImg2.addEventListener("mouseover", imgMouseOver2);
  projectImg2.addEventListener("mouseout",imgMouseOut2);
  projectImgTitle2.addEventListener("mouseover", imgMouseOver2);
  projectImgTitle2.addEventListener("mouseout",imgMouseOut2);
  projectImgContent2.addEventListener("mouseover", imgMouseOver2);
  projectImgContent2.addEventListener("mouseout",imgMouseOut2);
  projectRef2.addEventListener("mouseover", imgMouseOver2);
  projectRef2.addEventListener("mouseout",imgMouseOut2);

  function imgMouseOver2(){
    projectImg2.style.filter = "brightness(0.3)";
    projectImgTitle2.style.display = "block";
    projectImgContent2.style.display = "block";
    projectRef2.style.display = "block";
  }
  
  function imgMouseOut2(){
    projectImg2.style.filter = "brightness(1)";
    projectImgTitle2.style.display = "none";
    projectImgContent2.style.display = "none";
    projectRef2.style.display = "none";
  }

  