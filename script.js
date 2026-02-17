// Sample quiz data for different categories
const quizData = {
    jee: [
        {
            question: "What is the derivative of sin(x)?",
            options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
            correct: 0
        },
        {
            question: "The SI unit of force is:",
            options: ["Joule", "Newton", "Watt", "Pascal"],
            correct: 1
        },
        {
            question: "What is the molecular formula of benzene?",
            options: ["C6H6", "C6H12", "C5H6", "C7H8"],
            correct: 0
        },
        {
            question: "The value of acceleration due to gravity is approximately:",
            options: ["9.8 m/s²", "10.8 m/s²", "8.8 m/s²", "11.8 m/s²"],
            correct: 0
        },
        {
            question: "What is the integral of 1/x?",
            options: ["x²", "ln|x| + C", "e^x", "1/x²"],
            correct: 1
        },
        {
            question: "The limiting value of (1 + 1/n)^n as n approaches infinity is:",
            options: ["1", "e", "π", "∞"],
            correct: 1
        },
        {
            question: "In a hydrogen atom, the electron moves from n=3 to n=1. The spectral line belongs to:",
            options: ["Lyman series", "Balmer series", "Paschen series", "Brackett series"],
            correct: 0
        },
        {
            question: "The oxidation state of Cr in K2Cr2O7 is:",
            options: ["+3", "+6", "+7", "+2"],
            correct: 1
        },
        {
            question: "If vectors A and B are perpendicular, then A·B equals:",
            options: ["1", "0", "-1", "AB"],
            correct: 1
        },
        {
            question: "The unit of electrical resistance is:",
            options: ["Ampere", "Volt", "Ohm", "Coulomb"],
            correct: 2
        },
        {
            question: "Which of the following is an aromatic compound?",
            options: ["Cyclohexane", "Benzene", "Propane", "Butane"],
            correct: 1
        },
        {
            question: "The dimension of Planck's constant is:",
            options: ["ML²T⁻¹", "ML²T⁻²", "MLT⁻¹", "ML⁻¹T⁻¹"],
            correct: 0
        },
        {
            question: "What is the solution to the equation x² - 5x + 6 = 0?",
            options: ["x = 2, 3", "x = 1, 6", "x = -2, -3", "x = 2, -3"],
            correct: 0
        },
        {
            question: "The first law of thermodynamics is based on conservation of:",
            options: ["Mass", "Energy", "Momentum", "Charge"],
            correct: 1
        },
        {
            question: "The hybridization of carbon in methane (CH4) is:",
            options: ["sp", "sp²", "sp³", "sp³d"],
            correct: 2
        },
        {
            question: "If sin θ = 3/5, what is cos θ? (θ in first quadrant)",
            options: ["4/5", "3/4", "5/4", "5/3"],
            correct: 0
        },
        {
            question: "Lenz's law is a consequence of:",
            options: ["Conservation of charge", "Conservation of energy", "Conservation of mass", "Conservation of momentum"],
            correct: 1
        },
        {
            question: "The IUPAC name of CH3-CH(CH3)-CH3 is:",
            options: ["Propane", "2-methylpropane", "Butane", "2-methylbutane"],
            correct: 1
        },
        {
            question: "The rank of a 3×3 null matrix is:",
            options: ["0", "1", "2", "3"],
            correct: 0
        },
        {
            question: "A projectile is fired at 45°. Its range is maximum when angle is:",
            options: ["30°", "45°", "60°", "90°"],
            correct: 1
        }
    ],
    gate: [
        {
            question: "In a binary tree with n nodes, the maximum height is:",
            options: ["n", "n-1", "log(n)", "n/2"],
            correct: 1
        },
        {
            question: "The time complexity of binary search is:",
            options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
            correct: 1
        },
        {
            question: "Which data structure uses LIFO?",
            options: ["Queue", "Stack", "Tree", "Graph"],
            correct: 1
        },
        {
            question: "What is 2's complement of -5 in 8-bit representation?",
            options: ["11111011", "10000101", "00000101", "11111010"],
            correct: 0
        },
        {
            question: "The number of edges in a complete graph with n vertices is:",
            options: ["n", "2n", "n(n-1)/2", "n²"],
            correct: 2
        },
        {
            question: "Which sorting algorithm has the best average case time complexity?",
            options: ["Bubble Sort", "Quick Sort", "Insertion Sort", "Selection Sort"],
            correct: 1
        },
        {
            question: "In OSI model, which layer is responsible for routing?",
            options: ["Data Link", "Network", "Transport", "Session"],
            correct: 1
        },
        {
            question: "The number of Boolean functions with n variables is:",
            options: ["2^n", "n^2", "2^(2^n)", "n!"],
            correct: 2
        },
        {
            question: "What is the minimum number of NAND gates required to implement XOR?",
            options: ["2", "3", "4", "5"],
            correct: 2
        },
        {
            question: "In a B-tree of order m, each internal node can have at most:",
            options: ["m children", "m-1 children", "2m children", "m+1 children"],
            correct: 0
        },
        {
            question: "The space complexity of merge sort is:",
            options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            correct: 2
        },
        {
            question: "Which protocol operates at the Transport layer?",
            options: ["HTTP", "TCP", "IP", "Ethernet"],
            correct: 1
        },
        {
            question: "The minimum number of states required to recognize a string of length n is:",
            options: ["n", "n+1", "2n", "log n"],
            correct: 1
        },
        {
            question: "What is the output of XOR gate when both inputs are 1?",
            options: ["0", "1", "Undefined", "High impedance"],
            correct: 0
        },
        {
            question: "In SQL, which command is used to remove a table?",
            options: ["DELETE", "REMOVE", "DROP", "TRUNCATE"],
            correct: 2
        },
        {
            question: "The worst-case time complexity of Quick Sort is:",
            options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
            correct: 1
        },
        {
            question: "What is the maximum efficiency of a class AB amplifier?",
            options: ["50%", "78.5%", "90%", "100%"],
            correct: 1
        },
        {
            question: "In context-free grammar, the production rules are of the form:",
            options: ["A → α", "α → β", "A → αBβ", "AB → CD"],
            correct: 0
        },
        {
            question: "The fan-out of a logic gate is:",
            options: ["Number of inputs", "Number of outputs", "Number of gates it can drive", "Operating frequency"],
            correct: 2
        },
        {
            question: "What is the purpose of a semaphore in operating systems?",
            options: ["Memory allocation", "Process synchronization", "CPU scheduling", "File management"],
            correct: 1
        }
    ],
    keam: [
        {
            question: "The chemical formula of water is:",
            options: ["H2O", "H2O2", "HO", "H3O"],
            correct: 0
        },
        {
            question: "Newton's first law is also known as:",
            options: ["Law of inertia", "Law of motion", "Law of gravity", "Law of energy"],
            correct: 0
        },
        {
            question: "The powerhouse of the cell is:",
            options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"],
            correct: 2
        },
        {
            question: "What is the square root of 144?",
            options: ["11", "12", "13", "14"],
            correct: 1
        },
        {
            question: "The atomic number of Carbon is:",
            options: ["5", "6", "7", "8"],
            correct: 1
        },
        {
            question: "The valency of oxygen is:",
            options: ["1", "2", "3", "4"],
            correct: 1
        },
        {
            question: "Speed of light in vacuum is approximately:",
            options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁴ m/s", "3 × 10¹⁰ m/s"],
            correct: 0
        },
        {
            question: "Photosynthesis produces:",
            options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
            correct: 1
        },
        {
            question: "The sum of angles in a triangle is:",
            options: ["90°", "180°", "270°", "360°"],
            correct: 1
        },
        {
            question: "The SI unit of temperature is:",
            options: ["Celsius", "Fahrenheit", "Kelvin", "Rankine"],
            correct: 2
        },
        {
            question: "The number of protons in a hydrogen atom is:",
            options: ["0", "1", "2", "3"],
            correct: 1
        },
        {
            question: "What is the value of π (pi) approximately?",
            options: ["3.14", "2.71", "1.41", "1.73"],
            correct: 0
        },
        {
            question: "The process of breakdown of glucose is called:",
            options: ["Photosynthesis", "Respiration", "Digestion", "Excretion"],
            correct: 1
        },
        {
            question: "Ohm's law states V = :",
            options: ["I/R", "IR", "R/I", "I²R"],
            correct: 1
        },
        {
            question: "The least common multiple of 4 and 6 is:",
            options: ["12", "24", "8", "6"],
            correct: 0
        },
        {
            question: "The element with symbol 'Na' is:",
            options: ["Nitrogen", "Sodium", "Neon", "Nickel"],
            correct: 1
        },
        {
            question: "Kinetic energy is given by:",
            options: ["mv²", "1/2 mv²", "mv", "m/v"],
            correct: 1
        },
        {
            question: "The human body has how many chromosomes?",
            options: ["23", "46", "48", "92"],
            correct: 1
        },
        {
            question: "If a² + b² = c², then the triangle is:",
            options: ["Equilateral", "Isosceles", "Right-angled", "Scalene"],
            correct: 2
        },
        {
            question: "The freezing point of water in Celsius is:",
            options: ["-1°C", "0°C", "1°C", "100°C"],
            correct: 1
        }
    ],
    class11: [
        {
            question: "The quadratic formula is used to solve:",
            options: ["Linear equations", "Quadratic equations", "Cubic equations", "Polynomial equations"],
            correct: 1
        },
        {
            question: "Photosynthesis occurs in:",
            options: ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"],
            correct: 1
        },
        {
            question: "The SI unit of electric current is:",
            options: ["Volt", "Ampere", "Ohm", "Watt"],
            correct: 1
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correct: 1
        },
        {
            question: "The process of conversion of solid to gas is called:",
            options: ["Melting", "Evaporation", "Sublimation", "Condensation"],
            correct: 2
        },
        {
            question: "What is the value of sin 90°?",
            options: ["0", "1", "1/2", "√3/2"],
            correct: 1
        },
        {
            question: "The number of chromosomes in human gametes is:",
            options: ["23", "46", "69", "92"],
            correct: 0
        },
        {
            question: "Newton's second law is F = :",
            options: ["ma", "m/a", "a/m", "m+a"],
            correct: 0
        },
        {
            question: "The electronic configuration of Neon is:",
            options: ["2, 6", "2, 8", "2, 8, 8", "2, 8, 2"],
            correct: 1
        },
        {
            question: "The sum of first n natural numbers is:",
            options: ["n(n+1)", "n(n+1)/2", "n²", "2n"],
            correct: 1
        },
        {
            question: "The speed of sound in air is approximately:",
            options: ["330 m/s", "3000 m/s", "300,000 m/s", "3 m/s"],
            correct: 0
        },
        {
            question: "Mendel's laws relate to:",
            options: ["Evolution", "Inheritance", "Ecology", "Metabolism"],
            correct: 1
        },
        {
            question: "The work done by a force is W = :",
            options: ["Fd", "F/d", "d/F", "F²d"],
            correct: 0
        },
        {
            question: "The valency of nitrogen in NH3 is:",
            options: ["2", "3", "4", "5"],
            correct: 1
        },
        {
            question: "The discriminant of ax² + bx + c = 0 is:",
            options: ["b² - 4ac", "b² + 4ac", "4ac - b²", "b - 4ac"],
            correct: 0
        },
        {
            question: "The unit of momentum is:",
            options: ["kg m/s", "kg/m s", "kg m/s²", "kg/s"],
            correct: 0
        },
        {
            question: "Which gas is most abundant in Earth's atmosphere?",
            options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
            correct: 2
        },
        {
            question: "The molecular mass of H2O is:",
            options: ["16", "18", "20", "22"],
            correct: 1
        },
        {
            question: "If tan θ = 1, then θ = :",
            options: ["30°", "45°", "60°", "90°"],
            correct: 1
        },
        {
            question: "The basic unit of life is:",
            options: ["Tissue", "Organ", "Cell", "Organism"],
            correct: 2
        }
    ],
    class12: [
        {
            question: "What is the integration of cos(x)?",
            options: ["sin(x) + C", "-sin(x) + C", "cos(x) + C", "-cos(x) + C"],
            correct: 0
        },
        {
            question: "DNA stands for:",
            options: ["Deoxyribonucleic Acid", "Dinitrogen Acid", "Double Nucleic Acid", "Dextrose Nucleic Acid"],
            correct: 0
        },
        {
            question: "Ohm's law relates:",
            options: ["V = IR", "P = IV", "E = mc²", "F = ma"],
            correct: 0
        },
        {
            question: "The determinant of a 2×2 identity matrix is:",
            options: ["0", "1", "2", "-1"],
            correct: 1
        },
        {
            question: "The pH of pure water is:",
            options: ["6", "7", "8", "9"],
            correct: 1
        },
        {
            question: "The derivative of e^x is:",
            options: ["e^x", "xe^(x-1)", "e^(x+1)", "1/e^x"],
            correct: 0
        },
        {
            question: "The genetic material in most organisms is:",
            options: ["RNA", "DNA", "Protein", "Lipid"],
            correct: 1
        },
        {
            question: "Electric potential is measured in:",
            options: ["Ampere", "Volt", "Ohm", "Watt"],
            correct: 1
        },
        {
            question: "If A is a 3×3 matrix and |A| = 0, then A is:",
            options: ["Singular", "Non-singular", "Identity", "Diagonal"],
            correct: 0
        },
        {
            question: "An acid has pH:",
            options: ["Less than 7", "Equal to 7", "Greater than 7", "Equal to 14"],
            correct: 0
        },
        {
            question: "The integral of x^n is (n ≠ -1):",
            options: ["x^(n+1)/(n+1) + C", "nx^(n-1) + C", "x^(n-1)/(n-1) + C", "nx^n + C"],
            correct: 0
        },
        {
            question: "The central dogma of molecular biology is:",
            options: ["DNA → RNA → Protein", "RNA → DNA → Protein", "Protein → RNA → DNA", "DNA → Protein → RNA"],
            correct: 0
        },
        {
            question: "The unit of electric charge is:",
            options: ["Ampere", "Volt", "Coulomb", "Ohm"],
            correct: 2
        },
        {
            question: "The transpose of a matrix A is denoted by:",
            options: ["A'", "A⁻¹", "A*", "|A|"],
            correct: 0
        },
        {
            question: "The common ion effect is based on:",
            options: ["Le Chatelier's principle", "Hess's law", "Raoult's law", "Graham's law"],
            correct: 0
        },
        {
            question: "The area under the curve y = f(x) from a to b is:",
            options: ["∫f(x)dx from a to b", "f(b) - f(a)", "f'(x)", "Σf(x)"],
            correct: 0
        },
        {
            question: "Mitosis results in:",
            options: ["Two identical cells", "Four different cells", "One cell", "Three cells"],
            correct: 0
        },
        {
            question: "A capacitor stores:",
            options: ["Current", "Voltage", "Charge", "Resistance"],
            correct: 2
        },
        {
            question: "The order of a differential equation is determined by:",
            options: ["Highest derivative", "Number of variables", "Degree", "Constants"],
            correct: 0
        },
        {
            question: "The molarity of a solution is:",
            options: ["Moles/Liter", "Grams/Liter", "Moles/kg", "Grams/mL"],
            correct: 0
        }
    ]
};

// Global variables
let currentQuiz = null;
let currentQuestionIndex = 0;
let selectedAnswers = [];
let timerInterval = null;
let startTime = null;

// Update date and time
function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    document.getElementById('currentDateTime').textContent = now.toLocaleDateString('en-US', options);
}

// Update date/time every second
setInterval(updateDateTime, 1000);
updateDateTime();

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    
    // Update icon
    const toggle = document.querySelector('.theme-toggle');
    toggle.textContent = isDark ? '☀️' : '🌙';
}

// Load dark mode preference
function loadDarkMode() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) {
        document.body.classList.add('dark-mode');
        document.querySelector('.theme-toggle').textContent = '☀️';
    }
}

// Initialize dark mode on load
loadDarkMode();

// Analytics Functions
function updateAnalytics() {
    const quizHistory = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    
    // Total quizzes
    document.getElementById('totalQuizzes').textContent = quizHistory.length;
    
    // Average score
    if (quizHistory.length > 0) {
        const avgScore = quizHistory.reduce((sum, quiz) => sum + quiz.percentage, 0) / quizHistory.length;
        document.getElementById('averageScore').textContent = Math.round(avgScore) + '%';
    } else {
        document.getElementById('averageScore').textContent = '0%';
    }
    
    // Best score
    if (quizHistory.length > 0) {
        const bestScore = Math.max(...quizHistory.map(q => q.percentage));
        document.getElementById('bestScore').textContent = bestScore + '%';
    } else {
        document.getElementById('bestScore').textContent = '0%';
    }
    
    // Study streak
    const streak = calculateStudyStreak();
    document.getElementById('studyStreak').textContent =
