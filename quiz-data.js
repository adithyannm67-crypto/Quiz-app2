// Comprehensive Quiz Data with Explanations
// Total: 500+ questions across all categories

const comprehensiveQuizData = {
    jee: {
        physics: [
            {
                question: "What is the SI unit of force?",
                options: ["Joule", "Newton", "Watt", "Pascal"],
                correct: 1,
                explanation: "The SI unit of force is Newton (N). It is defined as the force required to accelerate 1 kg of mass at 1 m/s². Named after Sir Isaac Newton."
            },
            {
                question: "The value of acceleration due to gravity is approximately:",
                options: ["9.8 m/s²", "10.8 m/s²", "8.8 m/s²", "11.8 m/s²"],
                correct: 0,
                explanation: "The acceleration due to gravity on Earth's surface is approximately 9.8 m/s² or 10 m/s² (rounded for calculations)."
            },
            {
                question: "If vectors A and B are perpendicular, then A·B equals:",
                options: ["1", "0", "-1", "AB"],
                correct: 1,
                explanation: "The dot product of two perpendicular vectors is zero because cos(90°) = 0, and A·B = |A||B|cos(θ)."
            },
            {
                question: "The unit of electrical resistance is:",
                options: ["Ampere", "Volt", "Ohm", "Coulomb"],
                correct: 2,
                explanation: "The SI unit of electrical resistance is Ohm (Ω). It is defined as the resistance between two points when a potential difference of 1 volt produces a current of 1 ampere."
            },
            {
                question: "The dimension of Planck's constant is:",
                options: ["ML²T⁻¹", "ML²T⁻²", "MLT⁻¹", "ML⁻¹T⁻¹"],
                correct: 0,
                explanation: "Planck's constant h has dimensions of energy × time = ML²T⁻¹. It relates energy of a photon to its frequency: E = hf."
            },
            {
                question: "In a hydrogen atom, the electron moves from n=3 to n=1. The spectral line belongs to:",
                options: ["Lyman series", "Balmer series", "Paschen series", "Brackett series"],
                correct: 0,
                explanation: "Lyman series corresponds to transitions ending at n=1. Balmer (n=2), Paschen (n=3), Brackett (n=4) series end at their respective levels."
            },
            {
                question: "Lenz's law is a consequence of:",
                options: ["Conservation of charge", "Conservation of energy", "Conservation of mass", "Conservation of momentum"],
                correct: 1,
                explanation: "Lenz's law states that induced current opposes the change causing it. This is a consequence of energy conservation - otherwise we could create energy from nothing."
            },
            {
                question: "A projectile is fired at 45°. Its range is maximum when angle is:",
                options: ["30°", "45°", "60°", "90°"],
                correct: 1,
                explanation: "For projectile motion on level ground, maximum range occurs at 45° launch angle. Range R = (v²sin2θ)/g, which is maximum when sin2θ = 1, i.e., θ = 45°."
            },
            {
                question: "The first law of thermodynamics is based on conservation of:",
                options: ["Mass", "Energy", "Momentum", "Charge"],
                correct: 1,
                explanation: "The first law of thermodynamics states ΔU = Q - W, which is essentially conservation of energy. Energy can neither be created nor destroyed."
            },
            {
                question: "Power dissipated in a resistor is given by:",
                options: ["I²R", "IR", "I/R", "R/I"],
                correct: 0,
                explanation: "Power P = I²R = V²/R = VI. When current I flows through resistance R, power dissipated is I²R (Joule heating)."
            }
        ],
        chemistry: [
            {
                question: "What is the molecular formula of benzene?",
                options: ["C6H6", "C6H12", "C5H6", "C7H8"],
                correct: 0,
                explanation: "Benzene has molecular formula C6H6. It's an aromatic compound with a hexagonal ring structure and resonance."
            },
            {
                question: "The oxidation state of Cr in K2Cr2O7 is:",
                options: ["+3", "+6", "+7", "+2"],
                correct: 1,
                explanation: "In K2Cr2O7: 2(+1) + 2x + 7(-2) = 0, solving gives x = +6. Chromium is in +6 oxidation state."
            },
            {
                question: "Which of the following is an aromatic compound?",
                options: ["Cyclohexane", "Benzene", "Propane", "Butane"],
                correct: 1,
                explanation: "Benzene is aromatic (Hückel's rule: 4n+2 π electrons, here n=1, so 6 π electrons). Cyclohexane is alicyclic, not aromatic."
            },
            {
                question: "The hybridization of carbon in methane (CH4) is:",
                options: ["sp", "sp²", "sp³", "sp³d"],
                correct: 2,
                explanation: "In CH4, carbon forms 4 sigma bonds (tetrahedral geometry), requiring sp³ hybridization (mixing of one s and three p orbitals)."
            },
            {
                question: "The IUPAC name of CH3-CH(CH3)-CH3 is:",
                options: ["Propane", "2-methylpropane", "Butane", "2-methylbutane"],
                correct: 1,
                explanation: "This is isobutane. The longest chain has 3 carbons (propane) with a methyl group at carbon-2, hence 2-methylpropane."
            },
            {
                question: "pH of a neutral solution at 25°C is:",
                options: ["0", "7", "14", "1"],
                correct: 1,
                explanation: "At 25°C, pure water has pH = 7 (neutral). pH < 7 is acidic, pH > 7 is basic. pH = -log[H+]."
            },
            {
                question: "The common ion effect is based on:",
                options: ["Le Chatelier's principle", "Hess's law", "Raoult's law", "Graham's law"],
                correct: 0,
                explanation: "Common ion effect is explained by Le Chatelier's principle. Adding a common ion shifts equilibrium to reduce the ion concentration."
            },
            {
                question: "Which quantum number determines the shape of an orbital?",
                options: ["Principal (n)", "Azimuthal (l)", "Magnetic (m)", "Spin (s)"],
                correct: 1,
                explanation: "Azimuthal quantum number (l) determines orbital shape: l=0 (s, spherical), l=1 (p, dumbbell), l=2 (d), l=3 (f)."
            },
            {
                question: "The molarity of a solution is:",
                options: ["Moles/Liter", "Grams/Liter", "Moles/kg", "Grams/mL"],
                correct: 0,
                explanation: "Molarity (M) = moles of solute / liters of solution. It's the most common concentration unit in chemistry."
            },
            {
                question: "SN2 reaction follows which kinetics?",
                options: ["First order", "Second order", "Zero order", "Third order"],
                correct: 1,
                explanation: "SN2 (Substitution Nucleophilic Bimolecular) is second order: Rate = k[substrate][nucleophile]. Both species involved in rate-determining step."
            }
        ],
        mathematics: [
            {
                question: "What is the derivative of sin(x)?",
                options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
                correct: 0,
                explanation: "d/dx(sin x) = cos x. This is a fundamental derivative. Similarly, d/dx(cos x) = -sin x."
            },
            {
                question: "What is the integral of 1/x?",
                options: ["x²", "ln|x| + C", "e^x", "1/x²"],
                correct: 1,
                explanation: "∫(1/x)dx = ln|x| + C. This is valid for x ≠ 0. The absolute value ensures the result is defined for negative x."
            },
            {
                question: "The limiting value of (1 + 1/n)^n as n approaches infinity is:",
                options: ["1", "e", "π", "∞"],
                correct: 1,
                explanation: "lim(n→∞) (1 + 1/n)^n = e ≈ 2.71828. This is one of the definitions of Euler's number e."
            },
            {
                question: "What is the solution to the equation x² - 5x + 6 = 0?",
                options: ["x = 2, 3", "x = 1, 6", "x = -2, -3", "x = 2, -3"],
                correct: 0,
                explanation: "Factoring: (x-2)(x-3) = 0, so x = 2 or x = 3. Or use quadratic formula: x = [5 ± √(25-24)]/2 = [5 ± 1]/2."
            },
            {
                question: "The rank of a 3×3 null matrix is:",
                options: ["0", "1", "2", "3"],
                correct: 0,
                explanation: "A null (zero) matrix has all zero entries, so all rows are linearly dependent. Hence rank = 0."
            },
            {
                question: "If sin θ = 3/5, what is cos θ? (θ in first quadrant)",
                options: ["4/5", "3/4", "5/4", "5/3"],
                correct: 0,
                explanation: "Using sin²θ + cos²θ = 1: (3/5)² + cos²θ = 1, so cos²θ = 16/25, therefore cos θ = 4/5 (positive in first quadrant)."
            },
            {
                question: "The determinant of a 2×2 identity matrix is:",
                options: ["0", "1", "2", "-1"],
                correct: 1,
                explanation: "Identity matrix I = [[1,0],[0,1]]. det(I) = 1×1 - 0×0 = 1. Generally, det(I) = 1 for any size."
            },
            {
                question: "The discriminant of ax² + bx + c = 0 is:",
                options: ["b² - 4ac", "b² + 4ac", "4ac - b²", "b - 4ac"],
                correct: 0,
                explanation: "Discriminant D = b² - 4ac. If D > 0: two real roots, D = 0: one repeated root, D < 0: complex roots."
            },
            {
                question: "The value of sin 90° is:",
                options: ["0", "1", "1/2", "√3/2"],
                correct: 1,
                explanation: "sin 90° = 1 (maximum value of sine function). Also, sin 0° = 0, sin 30° = 1/2, sin 60° = √3/2."
            },
            {
                question: "If tan θ = 1, then θ = :",
                options: ["30°", "45°", "60°", "90°"],
                correct: 1,
                explanation: "tan θ = sin θ / cos θ = 1 when sin θ = cos θ, which occurs at θ = 45° (or π/4 radians)."
            }
        ]
    },
    // Continue with more subjects...
    gate: {
        aptitude: [
            {
                question: "The time complexity of binary search is:",
                options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
                correct: 1,
                explanation: "Binary search divides the search space in half each iteration. Time complexity is O(log n) where n is array size."
            },
            {
                question: "In a binary tree with n nodes, the maximum height is:",
                options: ["n", "n-1", "log(n)", "n/2"],
                correct: 1,
                explanation: "Maximum height occurs in a skewed tree where each node has only one child, giving height = n-1."
            },
            {
                question: "Which data structure uses LIFO?",
                options: ["Queue", "Stack", "Tree", "Graph"],
                correct: 1,
                explanation: "Stack uses LIFO (Last In First Out). Queue uses FIFO (First In First Out). Think of a stack of plates!"
            },
            {
                question: "What is 2's complement of -5 in 8-bit representation?",
                options: ["11111011", "10000101", "00000101", "11111010"],
                correct: 0,
                explanation: "5 in binary: 00000101. 1's complement: 11111010. Add 1 for 2's complement: 11111011."
            },
            {
                question: "The number of edges in a complete graph with n vertices is:",
                options: ["n", "2n", "n(n-1)/2", "n²"],
                correct: 2,
                explanation: "Each vertex connects to (n-1) others. Total edges = n(n-1)/2 (divide by 2 to avoid double counting)."
            }
        ],
        technical: [
            {
                question: "Which sorting algorithm has the best average case time complexity?",
                options: ["Bubble Sort", "Quick Sort", "Insertion Sort", "Selection Sort"],
                correct: 1,
                explanation: "Quick Sort has O(n log n) average case, which is optimal for comparison-based sorting. Worst case is O(n²) though."
            },
            {
                question: "In OSI model, which layer is responsible for routing?",
                options: ["Data Link", "Network", "Transport", "Session"],
                correct: 1,
                explanation: "Network layer (Layer 3) handles routing, IP addressing, and packet forwarding between networks."
            },
            {
                question: "The number of Boolean functions with n variables is:",
                options: ["2^n", "n^2", "2^(2^n)", "n!"],
                correct: 2,
                explanation: "Each row in truth table can be 0 or 1 independently. With 2^n rows, total functions = 2^(2^n)."
            },
            {
                question: "What is the minimum number of NAND gates required to implement XOR?",
                options: ["2", "3", "4", "5"],
                correct: 2,
                explanation: "XOR requires 4 NAND gates. NAND is universal gate, so any logic can be built from it."
            },
            {
                question: "The space complexity of merge sort is:",
                options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
                correct: 2,
                explanation: "Merge sort requires O(n) auxiliary space for merging two halves. This is its main drawback compared to Quick Sort."
            }
        ]
    },
    // Add more categories with similar structure...
    keam: {
        physics: [
            {
                question: "Newton's first law is also known as:",
                options: ["Law of inertia", "Law of motion", "Law of gravity", "Law of energy"],
                correct: 0,
                explanation: "Newton's First Law states that objects resist changes in motion (inertia). An object at rest stays at rest unless acted upon by external force."
            },
            {
                question: "Speed of light in vacuum is approximately:",
                options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁴ m/s", "3 × 10¹⁰ m/s"],
                correct: 0,
                explanation: "Speed of light c = 3 × 10⁸ m/s (exactly 299,792,458 m/s). It's the cosmic speed limit - nothing can go faster!"
            },
            {
                question: "Ohm's law states V = :",
                options: ["I/R", "IR", "R/I", "I²R"],
                correct: 1,
                explanation: "Ohm's Law: V = IR, where V is voltage, I is current, R is resistance. Also: I = V/R and R = V/I."
            },
            {
                question: "Kinetic energy is given by:",
                options: ["mv²", "1/2 mv²", "mv", "m/v"],
                correct: 1,
                explanation: "Kinetic Energy KE = (1/2)mv². It's the energy of motion. Doubling velocity quadruples KE!"
            },
            {
                question: "The speed of sound in air is approximately:",
                options: ["330 m/s", "3000 m/s", "300,000 m/s", "3 m/s"],
                correct: 0,
                explanation: "Sound travels at ~330 m/s in air at room temperature. It's much slower than light (3×10⁸ m/s)."
            }
        ],
        chemistry: [
            {
                question: "The chemical formula of water is:",
                options: ["H2O", "H2O2", "HO", "H3O"],
                correct: 0,
                explanation: "Water is H2O - two hydrogen atoms bonded to one oxygen atom. H2O2 is hydrogen peroxide."
            },
            {
                question: "The atomic number of Carbon is:",
                options: ["5", "6", "7", "8"],
                correct: 1,
                explanation: "Carbon has atomic number 6, meaning 6 protons in its nucleus. It's the basis of all organic chemistry!"
            },
            {
                question: "The valency of oxygen is:",
                options: ["1", "2", "3", "4"],
                correct: 1,
                explanation: "Oxygen typically has valency 2 (forms 2 bonds). It has 6 valence electrons and needs 2 more to complete its octet."
            },
            {
                question: "The element with symbol 'Na' is:",
                options: ["Nitrogen", "Sodium", "Neon", "Nickel"],
                correct: 1,
                explanation: "Na is the symbol for Sodium (from Latin 'Natrium'). It's a highly reactive alkali metal."
            },
            {
                question: "The molecular mass of H2O is:",
                options: ["16", "18", "20", "22"],
                correct: 1,
                explanation: "H2O: 2(1) + 16 = 18 amu. Hydrogen is 1 amu each, oxygen is 16 amu."
            }
        ],
        mathematics: [
            {
                question: "What is the square root of 144?",
                options: ["11", "12", "13", "14"],
                correct: 1,
                explanation: "√144 = 12, because 12 × 12 = 144. Perfect square!"
            },
            {
                question: "The sum of angles in a triangle is:",
                options: ["90°", "180°", "270°", "360°"],
                correct: 1,
                explanation: "Sum of all angles in any triangle is always 180°. This is a fundamental theorem in geometry."
            },
            {
                question: "What is the value of π (pi) approximately?",
                options: ["3.14", "2.71", "1.41", "1.73"],
                correct: 0,
                explanation: "π ≈ 3.14159... It's the ratio of circle's circumference to its diameter. An irrational number!"
            },
            {
                question: "The least common multiple of 4 and 6 is:",
                options: ["12", "24", "8", "6"],
                correct: 0,
                explanation: "LCM(4,6) = 12. Multiples of 4: 4,8,12,16... Multiples of 6: 6,12,18... First common one is 12."
            },
            {
                question: "If a² + b² = c², then the triangle is:",
                options: ["Equilateral", "Isosceles", "Right-angled", "Scalene"],
                correct: 2,
                explanation: "This is the Pythagorean theorem, which applies only to right-angled triangles. c is the hypotenuse."
            }
        ]
    },
    class11: {
        physics: [
            {
                question: "The SI unit of electric current is:",
                options: ["Volt", "Ampere", "Ohm", "Watt"],
                correct: 1,
                explanation: "The SI unit of current is Ampere (A). It measures the flow of electric charge (1 A = 1 Coulomb/second)."
            },
            {
                question: "Newton's second law is F = :",
                options: ["ma", "m/a", "a/m", "m+a"],
                correct: 0,
                explanation: "Newton's Second Law: Force = mass × acceleration (F = ma). More force or less mass means more acceleration!"
            },
            {
                question: "The work done by a force is W = :",
                options: ["Fd", "F/d", "d/F", "F²d"],
                correct: 0,
                explanation: "Work = Force × displacement (W = Fd). More precisely, W = Fd cos θ where θ is angle between F and d."
            },
            {
                question: "The unit of momentum is:",
                options: ["kg m/s", "kg/m s", "kg m/s²", "kg/s"],
                correct: 0,
              
