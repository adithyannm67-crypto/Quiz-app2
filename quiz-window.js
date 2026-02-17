// Get quiz parameters from URL
const urlParams = new URLSearchParams(window.location.search);
const examType = urlParams.get('exam');
const subjectType = urlParams.get('subject') || 'mixed';

// Quiz state
let currentQuiz = null;
let currentQuestionIndex = 0;
let selectedAnswers = [];
let timerInterval = null;
let startTime = null;

// Initialize quiz
function initQuiz() {
    if (!examType || !comprehensiveQuizData[examType]) {
        alert('Invalid quiz type!');
        window.close();
        return;
    }

    // Get questions based on subject selection
    let allQuestions = [];
    
    if (subjectType === 'mixed') {
        // Mix questions from all subjects
        const subjects = Object.keys(comprehensiveQuizData[examType]);
        subjects.forEach(subject => {
            allQuestions = allQuestions.concat(comprehensiveQuizData[examType][subject]);
        });
        // Shuffle and take 20 questions
        allQuestions = shuffleArray(allQuestions).slice(0, 20);
    } else {
        // Get questions from specific subject
        if (comprehensiveQuizData[examType][subjectType]) {
            allQuestions = [...comprehensiveQuizData[examType][subjectType]];
        } else {
            alert('Subject not found!');
            window.close();
            return;
        }
    }

    currentQuiz = allQuestions;
    selectedAnswers = new Array(currentQuiz.length).fill(null);
    currentQuestionIndex = 0;
    startTime = Date.now();

    // Set title
    const subjectName = subjectType.charAt(0).toUpperCase() + subjectType.slice(1);
    const title = `${examType.toUpperCase()} - ${subjectName} Quiz`;
    document.getElementById('quizTitle').textContent = title;
    document.title = title;

    // Start timer
    startTimer();

    // Display first question
    displayQuestion();
}

// Shuffle array utility
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Quiz data (same as main file)
// Timer function
function startTimer() {
    let seconds = 0;
    timerInterval = setInterval(() => {
        seconds++;
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        document.getElementById('timer').textContent = 
            `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
}

// Display question
function displayQuestion() {
    const question = currentQuiz[currentQuestionIndex];
    
    // Update question text
    document.getElementById('questionText').textContent = question.question;
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / currentQuiz.length) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
    document.getElementById('questionCounter').textContent = 
        `Question ${currentQuestionIndex + 1} of ${currentQuiz.length}`;
    document.getElementById('progressPercent').textContent = `${Math.round(progress)}%`;
    
    // Display options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        
        if (selectedAnswers[currentQuestionIndex] === index) {
            optionDiv.classList.add('selected');
        }
        
        optionDiv.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionDiv);
    });
    
    // Update navigation buttons
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.textContent = currentQuestionIndex === currentQuiz.length - 1 ? 'Submit Quiz' : 'Next →';
}

// Select option
function selectOption(index) {
    selectedAnswers[currentQuestionIndex] = index;
    
    document.querySelectorAll('.option').forEach((opt, i) => {
        if (i === index) {
            opt.classList.add('selected');
        } else {
            opt.classList.remove('selected');
        }
    });
}

// Previous question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Next question or submit
function nextQuestion() {
    if (currentQuestionIndex < currentQuiz.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        submitQuiz();
    }
}

// Submit quiz
function submitQuiz() {
    clearInterval(timerInterval);
    
    // Calculate results
    let correct = 0;
    currentQuiz.forEach((question, index) => {
        if (selectedAnswers[index] === question.correct) {
            correct++;
        }
    });
    
    const totalTime = Math.floor((Date.now() - startTime) / 1000);
    const mins = Math.floor(totalTime / 60);
    const secs = totalTime % 60;
    const percentage = Math.round((correct / currentQuiz.length) * 100);
    
    // Save to localStorage
    saveQuizResult({
        exam: examType,
        subject: subjectType,
        total: currentQuiz.length,
        correct: correct,
        wrong: currentQuiz.length - correct,
        percentage: percentage,
        timeTaken: `${mins}m ${secs}s`,
        date: new Date().toISOString()
    });
    
    // Update results display
    document.getElementById('scoreText').textContent = `${percentage}%`;
    document.getElementById('totalQuestions').textContent = currentQuiz.length;
    document.getElementById('correctCount').textContent = correct;
    document.getElementById('wrongCount').textContent = currentQuiz.length - correct;
    document.getElementById('timeTaken').textContent = `${mins}m ${secs}s`;
    document.getElementById('percentage').textContent = `${percentage}%`;
    
    // Show results, hide quiz
    document.getElementById('quizBody').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'block';
}

// Save quiz result to localStorage
function saveQuizResult(result) {
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    history.push(result);
    localStorage.setItem('quizHistory', JSON.stringify(history));
}

// Show answers and explanations
function showAnswers() {
    document.getElementById('resultsContainer').style.display = 'none';
    document.getElementById('answersContainer').style.display = 'block';
    
    const answersGrid = document.getElementById('answersGrid');
    answersGrid.innerHTML = '';
    
    currentQuiz.forEach((question, index) => {
        const userAnswer = selectedAnswers[index];
        const isCorrect = userAnswer === question.correct;
        
        const answerItem = document.createElement('div');
        answerItem.className = `answer-item ${isCorrect ? 'correct' : 'wrong'}`;
        
        const statusIcon = isCorrect ? '✅' : '❌';
        
        let optionsHTML = '';
        question.options.forEach((option, optIdx) => {
            let optionClass = '';
            if (optIdx === question.correct) {
                optionClass = 'correct-answer';
            } else if (optIdx === userAnswer && !isCorrect) {
                optionClass = 'user-wrong';
            }
            
            const marker = optIdx === question.correct ? '✓ ' : 
                          (optIdx === userAnswer && !isCorrect ? '✗ ' : '');
            
            optionsHTML += `<div class="answer-option ${optionClass}">${marker}${option}</div>`;
        });
        
        answerItem.innerHTML = `
            <div class="answer-question">
                ${statusIcon} <strong>Q${index + 1}:</strong> ${question.question}
            </div>
            <div class="answer-options">
                ${optionsHTML}
            </div>
            <div class="explanation-box">
                <span class="explanation-label">💡 Explanation:</span>
                <div class="explanation-text">${question.explanation}</div>
            </div>
        `;
        
        answersGrid.appendChild(answerItem);
    });
}

// Back to results
function backToResults() {
    document.getElementById('answersContainer').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'block';
}

// Confirm before closing window during quiz
window.addEventListener('beforeunload', function (e) {
    if (document.getElementById('resultsContainer').style.display !== 'block') {
        e.preventDefault();
        e.returnValue = '';
    }
});

// Initialize on load
window.addEventListener('load', initQuiz);
  
