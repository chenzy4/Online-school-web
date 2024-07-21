
function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
    var btnContent = document.getElementById('btn-content');
    if (sidebar.classList.contains('open')) {
        btnContent.textContent = '✕'; // Change to X when sidebar is open
    } else {
        btnContent.textContent = '☰'; // Change back to ☰ when sidebar is closed
    }
}


const unit1quizdata = [
    {
      question: "unit1,?",
      options: ["Use a tripod", "Increase ISO", "Use a faster shutter speed", "Use autofocus"],
      answer: "Use a faster shutter speed"
    },        

    {
      question: "What is the purpose of a lens hood?",
      options: ["Protects the lens from scratches", "Reduces glare", "Improves image sharpness", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What is the aperture of a lens?",
      options: ["The size of the opening that lets light into the camera", "The focal length of the lens", "The distance between the lens and the sensor", "The amount of zoom"],
      answer: "The size of the opening that lets light into the camera"
    }
    
  ];

  const unit2quizdata = [
    {
      question: "unit2,?",
      options: ["Use a tripod", "Increase ISO", "Use a faster shutter speed", "Use autofocus"],
      answer: "Use a faster shutter speed"
    },        

    {
      question: "What is the purpose of a lens hood?",
      options: ["Protects the lens from scratches", "Reduces glare", "Improves image sharpness", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What is the aperture of a lens?",
      options: ["The size of the opening that lets light into the camera", "The focal length of the lens", "The distance between the lens and the sensor", "The amount of zoom"],
      answer: "The size of the opening that lets light into the camera"
    }
    
  ];

  const dialog = document.getElementById("quiz-dialog");
  const question = document.getElementById("question");
  const optionButtons = document.querySelectorAll(".quiz-option");
  var score = 0;
  let currentQuestionIndex = 0;
  
  function loadQuiz() {                                       question.textContent = quizdata[0].question;          
    optionButtons.forEach((button, index) => {
      button.textContent = quizdata[0].options[index];
    });
  }
  
  function openDialog(unitnum) {
    loadQuiz(unitnum);
    dialog.showModal();
  }
  
  function closeDialog() {
    dialog.close();
  }
  
  function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    if (selectedAnswer === quizdata[currentQuestionIndex].answer) {
      alert("Correct!");
      score += 1;
      console.log(score)
      nextquestion()
    } else {
      alert("Wrong answer. Try again!");
      nextquestion()
    }
  }
  
	function nextquestion() {
    currentQuestionIndex++; 
    if (currentQuestionIndex < quizdata.length) {
        question.textContent = quizdata[currentQuestionIndex].question;
        optionButtons.forEach((button, index) => {
            button.textContent = quizdata[currentQuestionIndex].options[index];
        });
    } else {
        alert("Congratulations! You have finished all questions.");
    }
}	


  optionButtons.forEach(button => {
    button.addEventListener("click", checkAnswer);
  });
  
  loadQuiz();

function nextunit(level,unitnumber) {
    window.location.href= level +'unit' + unitnumber + '.html';
}

