
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

// Quiz data for different units
const quizzes = {
  beginnerUnit1: [
    {
      question: "How to take a clear photo?",
      options: ["Use a tripod", "Increase ISO", "Use a faster shutter speed", "Use autofocus"],
      answer: "Use a faster shutter speed"
    },
    {
      question: "What is the purpose of a lens hood?",
      options: ["Protects the lens from scratches", "Reduces glare", "Improves image sharpness", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What is the purpose of a tripod?",
      options: ["To hold the camera steady", "To protect the camera from light", "To hold the camera in place", "All of the above"],
      answer: "To hold the camera steady"
    },
    {
      question: "What is the aperture of a lens?",
      options: ["The size of the opening that lets light into the camera", "The focal length of the lens", "The distance between the lens and the sensor", "The amount of zoom"],
      answer: "The size of the opening that lets light into the camera"
    }
  ],
  beginnerUnit2: [
    {
      question: "What is the aperture of a lens?",
      options: ["The size of the opening that lets light into the camera", "The focal length of the lens", "The distance between the lens and the sensor", "The amount of zoom"],
      answer: "The size of the opening that lets light into the camera"
    },

  ],
  beginnerUnit3: [
    {
      question: "What is the primary function of aperture in photography?",
      options: ["Control exposure", "Control depth of field", "Adjust shutter speed", "Control ISO"],
      answer: "Control depth of field"
    },
    {
      question: "Which f-stop value indicates a large aperture?",
      options: ["f/2.8", "f/11", "f/16", "f/22"],
      answer: "f/2.8"
    },
    {
      question: "A larger aperture allows for more light to enter the camera. True or False?",
      options: ["True", "False"],
      answer: "True"
    },
    {
      question: "Which scenario would you use a small aperture (high f-stop number)?",
      options: ["Portrait photography", "Landscape photography", "Low-light photography", "Sports photography"],
      answer: "Landscape photography"
    }
  ],

  beginnerUnit4: [
    {
      question: "What does ISO control in a camera?",
      options: ["Aperture size", "Shutter speed", "Sensor sensitivity to light", "Focal length"],
      answer: "Sensor sensitivity to light"
    },
    {
      question: "When should you use a high ISO setting?",
      options: ["In bright sunlight", "In low-light conditions", "To reduce noise", "For faster shutter speed"],
      answer: "In low-light conditions"
    },
    {
      question: "What is a drawback of using a high ISO?",
      options: ["Increased noise", "Decreased sharpness", "Increased depth of field", "Faster battery drain"],
      answer: "Increased noise"
    }
  ],
  beginnerUnit5: [
    {
      question: "What does ISO control in a camera?",
      options: ["Aperture size", "Shutter speed", "Sensor sensitivity to light", "Focal length"],
      answer: "Sensor sensitivity to light"
    },
    {
      question: "When should you use a high ISO setting?",
      options: ["In bright sunlight", "In low-light conditions", "To reduce noise", "For faster shutter speed"],
      answer: "In low-light conditions"
    },
    {
      question: "What is a drawback of using a high ISO?",
      options: ["Increased noise", "Decreased sharpness", "Increased depth of field", "Faster battery drain"],
      answer: "Increased noise"
    }
  ],
  intermediateUnit1: [
    {
      question: "What is the purpose of retouching in photography?",
      options: ["Adjust subject position", "Correct colors", "Remove distractions", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "Which software is most commonly used for retouching photos?",
      options: ["Adobe Photoshop", "Microsoft Paint", "GIMP", "Pixlr"],
      answer: "Adobe Photoshop"
    },
    {
      question: "What file format should you use for the best quality in retouching?",
      options: ["JPEG", "PNG", "RAW", "TIFF"],
      answer: "RAW"
    },
    {
      question: "Which tool in Photoshop can be used to remove unwanted objects?",
      options: ["Clone Stamp Tool", "Pen Tool", "Brush Tool", "Move Tool"],
      answer: "Clone Stamp Tool"
    }
  ],
  intermediateUnit2: [
    {
      question: "What tool is used to adjust the subject's position in Photoshop?",
      options: ["Crop Tool", "Brush Tool", "Clone Stamp Tool", "Healing Brush Tool"],
      answer: "Crop Tool"
    },
    {
      question: "Which adjustment layer in Photoshop is used to correct white balance?",
      options: ["Levels", "Curves", "Exposure", "Brightness/Contrast"],
      answer: "Curves"
    },
    {
      question: "How can you apply a vignette effect in Photoshop?",
      options: ["Filter > Blur", "Filter > Lens Correction", "Image > Adjustments > Levels", "Edit > Transform"],
      answer: "Filter > Lens Correction"
    },
    {
      question: "What effect does a sepia filter have on a photo?",
      options: ["Adds a blue tint", "Increases contrast", "Adds a vintage brown tone", "Reduces saturation"],
      answer: "Adds a vintage brown tone"
    },
    {
      question: "Which tool in Photoshop is used to remove unwanted elements by blending them with the surrounding pixels?",
      options: ["Clone Stamp Tool", "Healing Brush Tool", "Brush Tool", "Lasso Tool"],
      answer: "Healing Brush Tool"
    }
  ],
  intermediateUnit3: [
    {
      question: "Which camera setting is essential for capturing the night sky?",
      options: ["High ISO", "Fast shutter speed", "Small aperture", "Low ISO"],
      answer: "High ISO"
    },
    {
      question: "What shutter speed is recommended for photographing fireworks?",
      options: ["1/1000s", "1/60s", "4s", "10s"],
      answer: "4s"
    },
    {
      question: "When shooting in bright sunlight, which ISO should you use?",
      options: ["100", "400", "1600", "3200"],
      answer: "100"
    },
    {
      question: "Which camera mode is best for adjusting settings in various environments?",
      options: ["Auto", "Manual", "Portrait", "Night"],
      answer: "Manual"
    }
  ],
  intermediateUnit4: [
    {
      question: "What is the rule of thirds in photography composition?",
      options: ["Placing the subject at the center", "Dividing the frame into nine equal parts", "Using diagonal lines", "Filling the frame with the subject"],
      answer: "Dividing the frame into nine equal parts"
    },
    {
      question: "Which composition technique involves leading lines?",
      options: ["Rule of thirds", "Symmetry", "Depth of field", "Framing"],
      answer: "Framing"
    },
    {
      question: "What is the purpose of using negative space in a photograph?",
      options: ["To fill the frame", "To create balance", "To focus on the subject", "To make the image brighter"],
      answer: "To focus on the subject"
    },
    {
      question: "Which tool can help you achieve better composition?",
      options: ["Grid overlay", "Spot healing brush", "Histogram", "Clone stamp"],
      answer: "Grid overlay"
    }
  ],
  intermediateUnit5: [
    {
      question: "What is the significance of white balance in photography?",
      options: ["Controls exposure", "Adjusts colors to look natural", "Increases saturation", "Reduces noise"],
      answer: "Adjusts colors to look natural"
    },
    {
      question: "Which color temperature is suitable for shooting during sunset?",
      options: ["2000K", "3200K", "5600K", "7000K"],
      answer: "3200K"
    },
    {
      question: "Which color model is commonly used in digital photography?",
      options: ["RGB", "CMYK", "HSB", "Lab"],
      answer: "RGB"
    },
    {
      question: "What effect does increasing saturation have on an image?",
      options: ["Brightens the image", "Adds more color intensity", "Reduces shadows", "Increases sharpness"],
      answer: "Adds more color intensity"
    }
  ],
  advancedUnit1: [
    {
      question: "What ancient device led to the development of the camera?",
      options: ["Camera Obscura", "Pinhole Camera", "Box Camera", "Daguerreotype"],
      answer: "Camera Obscura"
    },
    {
      question: "What was the first commercially successful photographic process?",
      options: ["Calotype", "Daguerreotype", "Ambrotype", "Tintype"],
      answer: "Daguerreotype"
    },
    {
      question: "Who invented the negative-positive process known as Calotype?",
      options: ["Louis Daguerre", "George Eastman", "William Henry Fox Talbot", "Ansel Adams"],
      answer: "William Henry Fox Talbot"
    },
    {
      question: "Which camera is known for its simplicity and popularity in the early 20th century?",
      options: ["Box Camera", "35mm Camera", "Digital Camera", "SLR Camera"],
      answer: "Box Camera"
    },
    {
      question: "What significant transition marked the digital revolution in photography?",
      options: ["Color Photography", "Digital Editing", "Film to Digital", "Instant Photography"],
      answer: "Film to Digital"
    }
  ],
  advancedUnit2: [
    {
      question: "What type of light is best for flattering portrait photography?",
      options: ["Hard light", "Soft light", "Direct sunlight", "Backlight"],
      answer: "Soft light"
    },
    {
      question: "What is the rule of thirds used for in landscape photography?",
      options: ["Balancing colors", "Creating depth", "Composing images", "Adjusting focus"],
      answer: "Composing images"
    },
    {
      question: "Which type of photography involves capturing candid moments?",
      options: ["Portrait photography", "Street photography", "Wildlife photography", "Landscape photography"],
      answer: "Street photography"
    },
    {
      question: "Why is patience important in wildlife photography?",
      options: ["To avoid disturbing animals", "To wait for perfect lighting", "To capture wildlife behavior", "To set up equipment"],
      answer: "To capture wildlife behavior"
    },
    {
      question: "What is an ethical consideration in street photography?",
      options: ["Using a tripod", "Respecting privacy", "Shooting at night", "Using a flash"],
      answer: "Respecting privacy"
    }
  ],
  advancedUnit3: [
    {
      question: "What historical role has photography played in society?",
      options: ["Entertainment", "Key historical moments", "Fictional storytelling", "Marketing"],
      answer: "Key historical moments"
    },
    {
      question: "How can images influence public opinion?",
      options: ["Through lighting", "By altering perception", "By color correction", "Through framing"],
      answer: "By altering perception"
    },
    {
      question: "What is a key ethical consideration in photo manipulation?",
      options: ["Enhancing colors", "Changing backgrounds", "Ethical considerations", "Cropping images"],
      answer: "Ethical considerations"
    },
    {
      question: "What is the role of context in interpreting a photograph?",
      options: ["Adds contrast", "Changes interpretation", "Sharpens the image", "Enhances brightness"],
      answer: "Changes interpretation"
    },
    {
      question: "How do photographers balance art and reality?",
      options: ["By using filters", "Through creative expression", "By storytelling", "By altering colors"],
      answer: "Through creative expression"
    }
  ],
  advancedUnit4: [
    {
      question: "What type of light is natural light?",
      options: ["Sunlight", "Studio lights", "Flash", "LED lights"],
      answer: "Sunlight"
    },
    {
      question: "What is the purpose of a reflector in photography?",
      options: ["To diffuse light", "To bounce light", "To change color", "To increase contrast"],
      answer: "To bounce light"
    },
    {
      question: "Which lighting setup is known for creating dramatic portraits?",
      options: ["Rembrandt lighting", "Split lighting", "Backlighting", "Butterfly lighting"],
      answer: "Rembrandt lighting"
    },
    {
      question: "How does a diffuser affect light?",
      options: ["Hardens light", "Softens light", "Changes color", "Increases brightness"],
      answer: "Softens light"
    },
    {
      question: "What is the effect of backlighting in photography?",
      options: ["Creates a glow effect", "Adds shadows", "Increases contrast", "Enhances color"],
      answer: "Creates a glow effect"
    }
  ],
  advancedUnit5: [
    {
      question: "What is the first step in using a film camera?",
      options: ["Set the ISO", "Adjust the focus", "Load the film", "Take the photo"],
      answer: "Load the film"
    },
    {
      question: "Which type of film produces monochrome images?",
      options: ["Color Negative Film", "Black and White Film", "Slide Film", "Color Positive Film"],
      answer: "Black and White Film"
    },
    {
      question: "What is the purpose of the stop bath solution in film development?",
      options: ["To reveal the images", "To stop the developing process", "To fix the images", "To wash the film"],
      answer: "To stop the developing process"
    },
    {
      question: "Which type of film is known for vibrant colors and positive images?",
      options: ["Color Negative Film", "Black and White Film", "Slide Film", "Infrared Film"],
      answer: "Slide Film"
    },
    {
      question: "What is the last step in the film development process?",
      options: ["Developing", "Stopping", "Fixing", "Drying"],
      answer: "Drying"
    }
  ],



};



// Select DOM elements
const dialog = document.getElementById("quiz-dialog");
const question = document.getElementById("question");
const optionButtons = document.querySelectorAll(".quiz-option");
const scoreresults = document.getElementById("score");
const correctannouncement = document.getElementById("correct");
const wrongannouncement = document.getElementById("wrong");
const announcement = document.getElementById("results-announcement");
const results = document.getElementById("results");
const finished = document.getElementById("finished");
const quizclosebtn = document.getElementById('quiz-closebtn');
const quiznext = document.getElementById('quiz-next');
const quizopenbtn = document.getElementById('quizopenbtn');
// Quiz state variables
let score = 0;
let currentQuestionIndex = 0;
let quizdata;

// Function to reset the quiz state
function resetQuiz(unit) {
  score = 0;
  currentQuestionIndex = 0;
  scoreresults.textContent = "0";
  results.style.display = "none";
  finished.style.display = "none";
  quiznext.textContent = "Next";
  quizclosebtn.style.display = "block";
  announcement.style.display = "none";
  // Remove the closeDialog event listener from quiznext button
  quiznext.removeEventListener('click', closeDialog);
  loadQuiz(unit);
}


// Function to load the quiz data for the specified unit
function loadQuiz(unit) {
  currentQuestionIndex = 0;
  announcement.style.display = "none";
  results.style.display = "none";
  quizdata = quizzes[unit];
  question.textContent = quizdata[currentQuestionIndex].question;
  optionButtons.forEach((button, index) => {
    button.textContent = quizdata[currentQuestionIndex].options[index];
  });
}

// Function to open the quiz dialog and reset the quiz for the specified unit
function openDialog(unit) {
  console.log(unit);
  resetQuiz(unit);
  dialog.showModal();
}


// Function to close the quiz dialog
function closeDialog() {
  dialog.close();
}

// Function to check the selected answer
function checkAnswer(event) {
  const selectedAnswer = event.target.textContent;
  if (selectedAnswer === quizdata[currentQuestionIndex].answer) {
    scoreresults.textContent = score += 1;
    console.log(score)
    results.style.display = "flex";
    wrongannouncement.style.display = "none";
    correctannouncement.style.display = "block";
  } else {
    results.style.display = "flex";
    correctannouncement.style.display = "none";
    wrongannouncement.style.display = "block";
  }
}

// Function to navigate to the next question
function navigateNextQuestion() {
  results.style.display = "none";
  nextquestion()
}

// Function to display the next question or show the finished message
function nextquestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizdata.length) {
    question.textContent = quizdata[currentQuestionIndex].question;
    optionButtons.forEach((button, index) => {
      button.textContent = quizdata[currentQuestionIndex].options[index];
    });
  } else { // Show the finished message
    results.style.display = "flex";
    wrongannouncement.style.display = "none";
    correctannouncement.style.display = "none";
    finished.style.display = "block";
    quiznext.textContent = "close"
    quizclosebtn.style.display = "none";
    announcement.style.display = "block";
    quiznext.addEventListener('click', closeDialog);
  }

}

// Add event listeners to the option buttons
optionButtons.forEach(button => {
  button.addEventListener("click", checkAnswer);
});

// Load the quiz data for the first unit
loadQuiz();

// Function to navigate to the next unit's HTML pagefunction nextunit(level, unitnumber) {
function nextunit(level, unitnumber) {
  if (level === 'advanced' && unitnumber === 6) {
    alert('Congratulations! You have completed all units.');
  } else {
    window.location.href = level + 'unit' + unitnumber + '.html'; // navigate to the next unit
    console.log(level + 'unit' + unitnumber + '.html');
  }
}
