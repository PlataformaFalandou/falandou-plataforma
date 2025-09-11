// Student database from provided data - now includes meetLink
const studentsDatabase = [
    {
        id: 103,
        registration_number: "103",
        password: "deconto2928",
        name: "Nelsita de Conto",
        email: "decontonelsita@gmail.com",
        plan_status: "active",
        plan_expiry: "2026-08-04",
        credits: {
            "25_min_classes": 0,
            "50_min_classes": 139
        },
        weekly_schedule: [
            {
                date: "2025-09-10",
                day: "Quarta-feira",
                time: "13:00",
                timezone: "Brasília",
                topic: "Presenting Yourself",
                professor: "Prof. Adriel Pelegrino",
                duration: "50min",
                status: "scheduled",
                meetLink: "https://meet.google.com/abc-defg-hij"
            }
        ]
    },
    {
        id: 102,
        registration_number: "102",
        password: "dario5990",
        name: "Eliel Dário",
        email: "elieldario3.0@gmail.com",
        plan_status: "active",
        plan_expiry: "2026-11-30",
        credits: {
            "25_min_classes": 16,
            "50_min_classes": 0
        },
        weekly_schedule: []
    },
    {
        id: 104,
        registration_number: "104",
        password: "arruda0914",
        name: "Gabriel Arruda",
        email: "ghenrique.info@gmail.com",
        plan_status: "active",
        plan_expiry: "2025-10-04",
        credits: {
            "25_min_classes": 0,
            "50_min_classes": 2
        },
        weekly_schedule: [
            {
                date: "2025-09-10",
                day: "Quarta-feira",
                time: "11:00",
                timezone: "Brasília",
                topic: "Presenting Yourself",
                professor: "Prof. Adriel Pelegrino",
                duration: "50min",
                status: "scheduled",
                meetLink: "https://meet.google.com/xyz-mnop-qrs"
            },
            {
                date: "2025-09-12",
                day: "Sexta-feira",
                time: "11:00",
                timezone: "Brasília",
                topic: "Personal Possessions",
                professor: "Prof. Adriel Pelegrino",
                duration: "50min",
                status: "scheduled",
                meetLink: "https://meet.google.com/tuv-wxyz-123"
            }
        ]
    },
    {
        id: 40000,
        registration_number: "11111",
        password: "xyz789",
        name: "Carlos Lima",
        email: "carlos.lima@email.com",
        plan_status: "expired",
        plan_expiry: "2025-08-15",
        credits: {
            "25_min_classes": 0,
            "50_min_classes": 0
        },
        weekly_schedule: []
    },
    {
        id: 40001,
        registration_number: "22222",
        password: "test123",
        name: "Ana Costa",
        email: "ana.costa@email.com",
        plan_status: "active",
        plan_expiry: "2026-01-15",
        credits: {
            "25_min_classes": 15,
            "50_min_classes": 6
        },
        weekly_schedule: [
            {
                date: "2025-09-08",
                day: "Segunda-feira",
                time: "08:00",
                timezone: "Brasília",
                topic: "Debates e Argumentação",
                professor: "Prof. Fernanda Rocha",
                duration: "50min",
                status: "scheduled",
                meetLink: "https://meet.google.com/deb-ates-arg"
            },
            {
                date: "2025-09-10",
                day: "Quarta-feira",
                time: "11:00",
                timezone: "Brasília",
                topic: "Apresentações Formais",
                professor: "Prof. Miguel Santos",
                duration: "50min",
                status: "scheduled",
                meetLink: "https://meet.google.com/apr-sent-for"
            },
            {
                date: "2025-09-12",
                day: "Sexta-feira",
                time: "15:30",
                timezone: "Brasília",
                topic: "Vocabulário Avançado",
                professor: "Prof. Ana Silva",
                duration: "25min",
                status: "scheduled",
                meetLink: "https://meet.google.com/voc-avanc-ado"
            }
        ]
    },
    {
        id: 1,
        registration_number: "111",
        password: "111",
        name: "ADM",
        email: "teste.adm@gmail.com",
        plan_status: "active",
        plan_expiry: "2026-01-15",
        credits: {
            "25_min_classes": 0,
            "50_min_classes": 0
        },
        weekly_schedule: [
            {
                date: "2025-09-10",
                day: "Quarta-feira",
                time: "11:00",
                timezone: "Brasília",
                topic: "Presenting Yourself",
                professor: "Prof. Adriel Pelegrino",
                duration: "50min",
                status: "scheduled",
                meetLink: "https://meet.google.com/adm-test-meet"
            },
            {
                date: "2025-09-12",
                day: "Sexta-feira",
                time: "11:00",
                timezone: "Brasília",
                topic: "Personal Possessions",
                professor: "Prof. Adriel Pelegrino",
                duration: "50min",
                status: "scheduled",
                meetLink: "https://meet.google.com/pers-poss-adm"
            }
        ]
    }
];

// Course data
const courseData = {
    modules: [
        {
            id: "modulo1",
            title: "Módulo 1: Fundamentos",
            description: "Base essencial para aprendizado de inglês",
            icon: "📚",
            lessons: [
                {
                    id: "lesson1",
                    title: "Basic English Grammar",
                    description: "Fundamentos da gramática inglesa para iniciantes",
                    videoId: "M7lc1UVf-VE",
                    duration: "15:30",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Pronunciation Basics",
                    description: "Pronúncia básica em inglês - sons e ritmo",
                    videoId: "dQw4w9WgXcQ",
                    duration: "12:45",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson3",
                    title: "Essential Vocabulary",
                    description: "Vocabulário essencial para o dia a dia",
                    videoId: "jNQXAC9IVRw",
                    duration: "18:20",
                    difficulty: "basico",
                    status: "locked"
                }
            ]
        },
        {
            id: "modulo2",
            title: "Módulo 2: Conversação",
            description: "Desenvolvimento de habilidades de conversação",
            icon: "💬",
            lessons: [
                {
                    id: "lesson4",
                    title: "Daily Conversations",
                    description: "Conversas do dia a dia - cumprimentos e apresentações",
                    videoId: "L_jWHffIx5E",
                    duration: "22:15",
                    difficulty: "intermediario",
                    status: "locked"
                },
                {
                    id: "lesson5",
                    title: "Business English",
                    description: "Inglês para negócios e ambiente profissional",
                    videoId: "fJ9rUzIMcZQ",
                    duration: "25:30",
                    difficulty: "intermediario",
                    status: "locked"
                },
                {
                    id: "lesson6",
                    title: "Travel English",
                    description: "Inglês para viagens - aeroporto, hotel, restaurante",
                    videoId: "QH2-TGUlwu4",
                    duration: "19:45",
                    difficulty: "intermediario",
                    status: "locked"
                }
            ]
        },
        {
            id: "modulo3",
            title: "Módulo 3: Avançado",
            description: "Conteúdo avançado para fluência",
            icon: "🎓",
            lessons: [
                {
                    id: "lesson7",
                    title: "Advanced Grammar",
                    description: "Estruturas gramaticais complexas e uso avançado",
                    videoId: "NUsoVlDFqZg",
                    duration: "28:10",
                    difficulty: "avancado",
                    status: "locked"
                },
                {
                    id: "lesson8",
                    title: "Idiomatic Expressions",
                    description: "Expressões idiomáticas e gírias do inglês",
                    videoId: "xvFZjo5PgG0",
                    duration: "16:55",
                    difficulty: "avancado",
                    status: "locked"
                }
            ]
        },
        {
            id: "modulo4",
            title: "Módulo 4: Prática",
            description: "Exercícios práticos e situações reais",
            icon: "🎯",
            lessons: [
                {
                    id: "lesson9",
                    title: "Listening Exercises",
                    description: "Exercícios de compreensão auditiva avançada",
                    videoId: "Sagg08DrO5U",
                    duration: "21:40",
                    difficulty: "intermediario",
                    status: "locked"
                },
                {
                    id: "lesson10",
                    title: "Speaking Practice",
                    description: "Prática de conversação e fluência",
                    videoId: "hFAOXdXZ5TM",
                    duration: "24:20",
                    difficulty: "avancado",
                    status: "locked"
                },
                {
                    id: "lesson11",
                    title: "Real-world Scenarios",
                    description: "Simulações de situações do mundo real",
                    videoId: "8HslUzw35mc",
                    duration: "30:15",
                    difficulty: "avancado",
                    status: "locked"
                }
            ]
        }
    ]
};

// Global variables
let currentUser = null;
let selectedAnswers = {};
let userProgress = {};
let currentVideoLesson = null;

// Quiz correct answers
const correctAnswers = {
    1: 'b', // Olhos de peixe
    2: 'c', // Pressionando a testa contra a testa
    3: 'b', // Viajante caranguejo dançante
    4: 'c', // Perto do porto
    5: 'c'  // Deixar os momentos estranhos grudarem como sal na pele
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing Falandou application...');
    initializeApp();
});

function initializeApp() {
    console.log('Initializing Falandou application...');
    
    // Set up login functionality
    setupLogin();
    
    // Set up logout functionality
    setupLogout();
    
    // Set up expired plan logout functionality
    setupExpiredPlanLogout();
    
    // Initialize tab navigation
    initializeTabNavigation();
    
    // Initialize quiz functionality
    initializeQuiz();
    
    // Initialize estudos functionality
    initializeEstudos();
    
    // Initialize course functionality
    initializeCourse();
    
    console.log('App initialized successfully');
}

function setupLogin() {
    console.log('Setting up login functionality...');
    
    const loginForm = document.getElementById('loginForm');
    
    if (!loginForm) {
        console.error('Login form not found');
        return;
    }
    
    // Form submission handler
    loginForm.addEventListener('submit', function(e) {
        console.log('Form submitted');
        e.preventDefault();
        e.stopPropagation();
        handleLogin();
    });
    
    console.log('Login form setup complete');
}

function handleLogin() {
    console.log('handleLogin called');
    
    try {
        // Clear any previous errors
        hideLoginError();
        
        const registrationInput = document.getElementById('registration');
        const passwordInput = document.getElementById('password');
        
        if (!registrationInput || !passwordInput) {
            console.error('Input elements not found');
            showLoginError('Erro no formulário de login.');
            return;
        }
        
        const registration = registrationInput.value.trim();
        const password = passwordInput.value.trim();
        
        console.log('Login attempt for registration:', registration);
        
        // Validate inputs
        if (!registration) {
            showLoginError('Por favor, preencha o número de matrícula.');
            registrationInput.focus();
            return;
        }
        
        if (!password) {
            showLoginError('Por favor, preencha a senha.');
            passwordInput.focus();
            return;
        }
        
        // Find user in database
        const user = studentsDatabase.find(student => 
            student.registration_number === registration && student.password === password
        );
        
        console.log('User search result:', user ? 'Found user: ' + user.name : 'Not found');
        
        if (user) {
            console.log('Login successful for:', user.name);
            currentUser = user;
            
            // Check plan status after successful login
            if (user.plan_status === 'expired') {
                console.log('User plan is expired, showing expired plan screen');
                showExpiredPlanScreen();
            } else {
                console.log('User plan is active, showing main app');
                initializeUserProgress();
                showMainApp();
                populateUserData();
                populateCourseContent();
            }
        } else {
            console.log('Login failed - invalid credentials');
            showLoginError('Número de matrícula ou senha incorretos.');
            passwordInput.value = '';
            registrationInput.focus();
        }
        
    } catch (error) {
        console.error('Error in handleLogin:', error);
        showLoginError('Erro interno. Tente novamente.');
    }
}

function setupLogout() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            handleLogout();
        });
    }
}

function setupExpiredPlanLogout() {
    const logoutFromExpiredBtn = document.getElementById('logoutFromExpiredBtn');
    if (logoutFromExpiredBtn) {
        logoutFromExpiredBtn.addEventListener('click', function(e) {
            e.preventDefault();
            handleLogout();
        });
    }
}

function handleLogout() {
    console.log('Logout initiated');
    currentUser = null;
    selectedAnswers = {};
    userProgress = {};
    currentVideoLesson = null;
    resetQuiz();
    closePdfViewer();
    closeVideoModal();
    showLoginScreen();
    clearLoginForm();
}

function showExpiredPlanScreen() {
    console.log('Showing expired plan screen');
    
    const loginScreen = document.getElementById('loginScreen');
    const expiredPlanScreen = document.getElementById('expiredPlanScreen');
    const mainApp = document.getElementById('mainApp');
    
    if (loginScreen) loginScreen.classList.add('hidden');
    if (mainApp) mainApp.classList.add('hidden');
    if (expiredPlanScreen) {
        expiredPlanScreen.classList.remove('hidden');
        console.log('Expired plan screen displayed successfully');
    } else {
        console.error('Could not find expired plan screen element');
    }
}

function showMainApp() {
    console.log('Showing main application');
    
    const loginScreen = document.getElementById('loginScreen');
    const expiredPlanScreen = document.getElementById('expiredPlanScreen');
    const mainApp = document.getElementById('mainApp');
    
    if (loginScreen) loginScreen.classList.add('hidden');
    if (expiredPlanScreen) expiredPlanScreen.classList.add('hidden');
    if (mainApp) {
        mainApp.classList.remove('hidden');
        console.log('Main app displayed successfully');
    } else {
        console.error('Could not find main app element');
    }
}

function showLoginScreen() {
    const loginScreen = document.getElementById('loginScreen');
    const expiredPlanScreen = document.getElementById('expiredPlanScreen');
    const mainApp = document.getElementById('mainApp');
    
    if (expiredPlanScreen) expiredPlanScreen.classList.add('hidden');
    if (mainApp) mainApp.classList.add('hidden');
    if (loginScreen) {
        loginScreen.classList.remove('hidden');
        console.log('Login screen displayed');
    }
}

function showLoginError(message) {
    console.log('Showing login error:', message);
    const loginError = document.getElementById('loginError');
    if (loginError) {
        loginError.textContent = message;
        loginError.classList.remove('hidden');
    }
}

function hideLoginError() {
    const loginError = document.getElementById('loginError');
    if (loginError) {
        loginError.classList.add('hidden');
        loginError.textContent = '';
    }
}

function clearLoginForm() {
    const registrationInput = document.getElementById('registration');
    const passwordInput = document.getElementById('password');
    
    if (registrationInput) registrationInput.value = '';
    if (passwordInput) passwordInput.value = '';
    hideLoginError();
}

function populateUserData() {
    if (!currentUser) {
        console.error('No current user to populate data for');
        return;
    }
    
    console.log('Populating user data for:', currentUser.name);
    
    try {
        // Header
        const userName = document.getElementById('userName');
        if (userName) {
            userName.textContent = currentUser.name;
        }
        
        // Dashboard
        const welcomeMessage = document.getElementById('welcomeMessage');
        const credits25 = document.getElementById('credits25');
        const credits50 = document.getElementById('credits50');
        const planExpiry = document.getElementById('planExpiry');
        
        if (welcomeMessage) {
            welcomeMessage.textContent = `Olá, ${currentUser.name}! Que alegria ter você por aqui.`;
        }
        if (credits25) {
            credits25.textContent = currentUser.credits['25_min_classes'];
        }
        if (credits50) {
            credits50.textContent = currentUser.credits['50_min_classes'];
        }
        if (planExpiry) {
            planExpiry.textContent = formatDate(currentUser.plan_expiry);
        }
        
        // Profile
        const profileName = document.getElementById('profileName');
        const profileEmail = document.getElementById('profileEmail');
        const profileRegistration = document.getElementById('profileRegistration');
        const profilePlanStatus = document.getElementById('profilePlanStatus');
        const profilePlanExpiry = document.getElementById('profilePlanExpiry');
        
        if (profileName) profileName.textContent = currentUser.name;
        if (profileEmail) profileEmail.textContent = currentUser.email;
        if (profileRegistration) profileRegistration.textContent = currentUser.registration_number;
        if (profilePlanStatus) profilePlanStatus.textContent = currentUser.plan_status === 'active' ? 'Ativo' : 'Inativo';
        if (profilePlanExpiry) profilePlanExpiry.textContent = formatDate(currentUser.plan_expiry);
        
        // Schedule
        populateSchedule();
        
        console.log('User data populated successfully');
    } catch (error) {
        console.error('Error populating user data:', error);
    }
}

function populateSchedule() {
    const scheduleList = document.getElementById('scheduleList');
    if (!scheduleList || !currentUser) return;
    
    scheduleList.innerHTML = '';
    
    if (!currentUser.weekly_schedule || currentUser.weekly_schedule.length === 0) {
        scheduleList.innerHTML = '<p>Nenhuma aula agendada para esta semana.</p>';
        return;
    }
    
    currentUser.weekly_schedule.forEach(schedule => {
        const scheduleItem = document.createElement('div');
        scheduleItem.className = 'schedule-item';
        scheduleItem.innerHTML = `
            <div class="schedule-info">
                <h4>${schedule.topic}</h4>
                <div class="schedule-details">
                    ${schedule.day}, ${schedule.date} às ${schedule.time} (${schedule.timezone})<br>
                    Professor: ${schedule.professor} • Duração: ${schedule.duration}
                </div>
            </div>
            <div class="schedule-status">
                <span class="status status--info">${schedule.status === 'scheduled' ? 'Agendada' : schedule.status}</span>
                <button class="join-class-btn">
                    <span class="meet-icon">📹</span>
                    Entrar na Aula
                </button>
            </div>
        `;
        
        // Add click event to join class button
        const joinBtn = scheduleItem.querySelector('.join-class-btn');
        if (joinBtn && schedule.meetLink) {
            joinBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                joinGoogleMeet(schedule.meetLink, schedule.topic);
            });
        }
        
        // Make entire schedule item clickable as well
        scheduleItem.addEventListener('click', function() {
            if (schedule.meetLink) {
                joinGoogleMeet(schedule.meetLink, schedule.topic);
            }
        });
        
        scheduleList.appendChild(scheduleItem);
    });
}

function joinGoogleMeet(meetLink, classTitle) {
    console.log('Joining Google Meet:', meetLink, 'for class:', classTitle);
    
    try {
        // Open Google Meet in a new tab
        window.open(meetLink, '_blank');
        
        // Optional: Show a confirmation or feedback to the user
        console.log(`Abrindo Google Meet para a aula: ${classTitle}`);
        
    } catch (error) {
        console.error('Error opening Google Meet:', error);
        alert('Erro ao abrir o Google Meet. Verifique sua conexão e tente novamente.');
    }
}

function formatDate(dateString) {
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR');
    } catch (error) {
        return dateString;
    }
}

function initializeTabNavigation() {
    console.log('Initializing tab navigation');
    
    const navTabs = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            console.log('Tab clicked:', targetTab);
            
            // Remove active class from all tabs and contents
            navTabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
                console.log('Switched to tab:', targetTab);
                
                // If switching to course tab, update progress
                if (targetTab === 'curso') {
                    updateCourseProgress();
                }
            }
        });
    });
}

function initializeQuiz() {
    console.log('Initializing quiz functionality');
    
    try {
        const optionButtons = document.querySelectorAll('.option-btn');
        const checkAnswersBtn = document.getElementById('checkAnswers');
        const resetQuizBtn = document.getElementById('resetQuiz');
        
        // Option button click handlers
        optionButtons.forEach(button => {
            button.addEventListener('click', function() {
                const questionNumber = this.getAttribute('data-question');
                const answer = this.getAttribute('data-answer');
                
                if (!questionNumber || !answer) return;
                
                // Remove selected class from all options in this question
                const questionOptions = document.querySelectorAll(`[data-question="${questionNumber}"]`);
                questionOptions.forEach(option => option.classList.remove('selected'));
                
                // Add selected class to clicked option
                this.classList.add('selected');
                
                // Store selected answer
                selectedAnswers[questionNumber] = answer;
                
                console.log('Answer selected for question', questionNumber, ':', answer);
            });
        });
        
        // Check answers button
        if (checkAnswersBtn) {
            checkAnswersBtn.addEventListener('click', function(e) {
                e.preventDefault();
                checkQuizAnswers();
            });
        }
        
        // Reset quiz button
        if (resetQuizBtn) {
            resetQuizBtn.addEventListener('click', function(e) {
                e.preventDefault();
                resetQuiz();
            });
        }
        
        console.log('Quiz initialized with', optionButtons.length, 'option buttons');
    } catch (error) {
        console.error('Error initializing quiz:', error);
    }
}

function checkQuizAnswers() {
    try {
        const totalQuestions = Object.keys(correctAnswers).length;
        let correctCount = 0;
        
        console.log('Checking quiz answers. Selected answers:', selectedAnswers);
        
        // Check each answer and apply styling
        Object.keys(correctAnswers).forEach(questionNumber => {
            const correctAnswer = correctAnswers[questionNumber];
            const userAnswer = selectedAnswers[questionNumber];
            
            // Get all option buttons for this question
            const questionOptions = document.querySelectorAll(`[data-question="${questionNumber}"]`);
            
            questionOptions.forEach(option => {
                const optionAnswer = option.getAttribute('data-answer');
                
                // Clear previous styling
                option.classList.remove('selected', 'correct', 'incorrect');
                
                if (optionAnswer === correctAnswer) {
                    option.classList.add('correct');
                } else if (optionAnswer === userAnswer && userAnswer !== correctAnswer) {
                    option.classList.add('incorrect');
                }
            });
            
            // Count correct answers
            if (userAnswer === correctAnswer) {
                correctCount++;
            }
        });
        
        // Calculate score and XP
        const score = Math.round((correctCount / totalQuestions) * 100);
        const xpEarned = correctCount * 20;
        
        // Show results
        showQuizResults(correctCount, totalQuestions, score, xpEarned);
        
        // Disable option buttons
        const allOptionButtons = document.querySelectorAll('.option-btn');
        allOptionButtons.forEach(button => {
            button.disabled = true;
            button.style.cursor = 'not-allowed';
        });
        
        // Hide check button, show reset button
        const checkAnswersBtn = document.getElementById('checkAnswers');
        const resetQuizBtn = document.getElementById('resetQuiz');
        
        if (checkAnswersBtn) checkAnswersBtn.style.display = 'none';
        if (resetQuizBtn) resetQuizBtn.style.display = 'inline-flex';
        
        console.log('Quiz results:', correctCount, '/', totalQuestions, '- XP:', xpEarned);
    } catch (error) {
        console.error('Error checking quiz answers:', error);
    }
}

function showQuizResults(correct, total, score, xp) {
    const resultsDiv = document.getElementById('quizResults');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const xpEarned = document.getElementById('xpEarned');
    
    if (scoreDisplay) {
        scoreDisplay.textContent = `Você acertou ${correct} de ${total} perguntas (${score}%)`;
    }
    if (xpEarned) {
        xpEarned.textContent = `🌟 XP Ganho: ${xp} pontos`;
    }
    if (resultsDiv) {
        resultsDiv.classList.remove('hidden');
    }
}

function resetQuiz() {
    try {
        // Clear selected answers
        selectedAnswers = {};
        
        // Remove all styling from option buttons
        const allOptionButtons = document.querySelectorAll('.option-btn');
        allOptionButtons.forEach(button => {
            button.classList.remove('selected', 'correct', 'incorrect');
            button.disabled = false;
            button.style.cursor = 'pointer';
        });
        
        // Hide results
        const resultsDiv = document.getElementById('quizResults');
        if (resultsDiv) {
            resultsDiv.classList.add('hidden');
        }
        
        // Show check button, hide reset button
        const checkAnswersBtn = document.getElementById('checkAnswers');
        const resetQuizBtn = document.getElementById('resetQuiz');
        
        if (checkAnswersBtn) checkAnswersBtn.style.display = 'inline-flex';
        if (resetQuizBtn) resetQuizBtn.style.display = 'none';
        
        console.log('Quiz reset successfully');
    } catch (error) {
        console.error('Error resetting quiz:', error);
    }
}

function initializeEstudos() {
    console.log('Initializing estudos functionality');
    
    try {
        // Initialize category tabs
        initializeCategoryTabs();
        
        // Initialize material buttons
        initializeMaterialButtons();
        
        // Initialize PDF viewer
        initializePdfViewer();
        
        console.log('Estudos functionality initialized successfully');
    } catch (error) {
        console.error('Error initializing estudos:', error);
    }
}

function initializeCategoryTabs() {
    const categoryTabs = document.querySelectorAll('.category-tab');
    const materialCategories = document.querySelectorAll('.material-category');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetCategory = this.getAttribute('data-category');
            console.log('Category tab clicked:', targetCategory);
            
            // Remove active class from all category tabs and content
            categoryTabs.forEach(t => t.classList.remove('active'));
            materialCategories.forEach(category => category.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding category
            this.classList.add('active');
            const targetCategoryContent = document.getElementById(targetCategory);
            if (targetCategoryContent) {
                targetCategoryContent.classList.add('active');
                console.log('Switched to category:', targetCategory);
            }
        });
    });
}

function initializeMaterialButtons() {
    const materialButtons = document.querySelectorAll('.material-btn');
    console.log('Found', materialButtons.length, 'material buttons');
    
    materialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const fileId = this.getAttribute('data-file-id');
            const materialTitle = this.closest('.material-item').querySelector('.material-info h4').textContent;
            
            console.log('Material button clicked:', materialTitle, 'File ID:', fileId);
            
            if (fileId) {
                openPdfViewer(fileId, materialTitle);
            }
        });
    });
}

function initializePdfViewer() {
    const closePdfBtn = document.getElementById('closePdf');
    
    if (closePdfBtn) {
        closePdfBtn.addEventListener('click', function() {
            console.log('Close PDF button clicked');
            closePdfViewer();
        });
    }
    
    // Close PDF viewer with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const pdfViewer = document.getElementById('pdfViewer');
            if (pdfViewer && !pdfViewer.classList.contains('hidden')) {
                console.log('Closing PDF viewer with Escape key');
                closePdfViewer();
            }
        }
    });
}

function openPdfViewer(fileId, title) {
    console.log('Opening PDF viewer for:', title, 'File ID:', fileId);
    
    try {
        const pdfViewer = document.getElementById('pdfViewer');
        const pdfTitle = document.getElementById('pdfTitle');
        const pdfFrame = document.getElementById('pdfFrame');
        
        if (!pdfViewer || !pdfFrame) {
            console.error('PDF viewer elements not found');
            return;
        }
        
        // Set title
        if (pdfTitle) {
            pdfTitle.textContent = title || 'Documento PDF';
        }
        
        // Construct Google Drive preview URL
        const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
        console.log('Loading PDF from URL:', previewUrl);
        
        // Set iframe source
        pdfFrame.src = previewUrl;
        
        // Show PDF viewer
        pdfViewer.classList.remove('hidden');
        
        // Prevent body scrolling
        document.body.style.overflow = 'hidden';
        
        console.log('PDF viewer opened successfully');
    } catch (error) {
        console.error('Error opening PDF viewer:', error);
    }
}

function closePdfViewer() {
    console.log('Closing PDF viewer');
    
    try {
        const pdfViewer = document.getElementById('pdfViewer');
        const pdfFrame = document.getElementById('pdfFrame');
        
        if (pdfViewer) {
            pdfViewer.classList.add('hidden');
        }
        
        if (pdfFrame) {
            pdfFrame.src = '';
        }
        
        // Restore body scrolling
        document.body.style.overflow = '';
        
        console.log('PDF viewer closed successfully');
    } catch (error) {
        console.error('Error closing PDF viewer:', error);
    }
}

// Course functionality
function initializeCourse() {
    console.log('Initializing course functionality');
    
    try {
        // Initialize video modal
        initializeVideoModal();
        
        console.log('Course functionality initialized successfully');
    } catch (error) {
        console.error('Error initializing course:', error);
    }
}

function initializeUserProgress() {
    // Initialize user progress - for demo purposes, some lessons are unlocked
    userProgress = {
        completedLessons: [],
        unlockedLessons: ['lesson1', 'lesson2'] // First two lessons unlocked by default
    };
}

function populateCourseContent() {
    console.log('Populating course content');
    
    const courseModulesContainer = document.getElementById('courseModules');
    if (!courseModulesContainer) return;
    
    courseModulesContainer.innerHTML = '';
    
    courseData.modules.forEach(module => {
        const moduleElement = createModuleElement(module);
        courseModulesContainer.appendChild(moduleElement);
    });
    
    updateCourseProgress();
}

function createModuleElement(module) {
    const moduleDiv = document.createElement('div');
    moduleDiv.className = 'course-module';
    moduleDiv.innerHTML = `
        <div class="module-header">
            <h3>${module.icon} ${module.title}</h3>
            <p>${module.description}</p>
        </div>
        <div class="module-lessons">
            <div class="lesson-list" id="lessons-${module.id}">
                ${module.lessons.map(lesson => createLessonHTML(lesson)).join('')}
            </div>
        </div>
    `;
    
    // Add event listeners to lesson items
    const lessonItems = moduleDiv.querySelectorAll('.lesson-item');
    lessonItems.forEach(item => {
        item.addEventListener('click', function() {
            const lessonId = this.getAttribute('data-lesson-id');
            const lesson = findLessonById(lessonId);
            if (lesson && !this.classList.contains('locked')) {
                openVideoModal(lesson);
            }
        });
    });
    
    return moduleDiv;
}

function createLessonHTML(lesson) {
    const isCompleted = userProgress.completedLessons.includes(lesson.id);
    const isUnlocked = userProgress.unlockedLessons.includes(lesson.id) || isCompleted;
    const status = isCompleted ? 'completed' : (isUnlocked ? 'available' : 'locked');
    
    let icon = '▶️';
    if (isCompleted) icon = '✅';
    else if (!isUnlocked) icon = '🔒';
    
    return `
        <div class="lesson-item ${status}" data-lesson-id="${lesson.id}">
            <div class="lesson-icon ${status}">
                ${icon}
            </div>
            <div class="lesson-info">
                <h4>${lesson.title}</h4>
                <p>${lesson.description}</p>
                <div class="lesson-meta">
                    <span>⏱️ ${lesson.duration}</span>
                    <span class="difficulty-badge ${lesson.difficulty}">${lesson.difficulty}</span>
                </div>
            </div>
        </div>
    `;
}

function findLessonById(lessonId) {
    for (let module of courseData.modules) {
        const lesson = module.lessons.find(l => l.id === lessonId);
        if (lesson) return lesson;
    }
    return null;
}

function initializeVideoModal() {
    const closeModalBtn = document.getElementById('closeVideoModal');
    const markCompleteBtn = document.getElementById('markCompleteBtn');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeVideoModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeVideoModal);
    }
    
    if (markCompleteBtn) {
        markCompleteBtn.addEventListener('click', function() {
            if (currentVideoLesson) {
                markLessonAsCompleted(currentVideoLesson.id);
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const videoModal = document.getElementById('videoModal');
            if (videoModal && !videoModal.classList.contains('hidden')) {
                closeVideoModal();
            }
        }
    });
}

function openVideoModal(lesson) {
    console.log('Opening video modal for lesson:', lesson.title);
    
    const videoModal = document.getElementById('videoModal');
    const videoTitle = document.getElementById('modalVideoTitle');
    const videoDescription = document.getElementById('modalVideoDescription');
    const videoDuration = document.getElementById('modalVideoDuration');
    const videoDifficulty = document.getElementById('modalVideoDifficulty');
    const videoFrame = document.getElementById('videoFrame');
    const markCompleteBtn = document.getElementById('markCompleteBtn');
    
    if (!videoModal || !videoFrame) return;
    
    currentVideoLesson = lesson;
    
    // Set lesson information
    if (videoTitle) videoTitle.textContent = lesson.title;
    if (videoDescription) videoDescription.textContent = lesson.description;
    if (videoDuration) videoDuration.textContent = lesson.duration;
    if (videoDifficulty) {
        videoDifficulty.textContent = lesson.difficulty;
        videoDifficulty.className = `difficulty-badge ${lesson.difficulty}`;
    }
    
    // Set video URL
    const embedUrl = `https://www.youtube.com/embed/${lesson.videoId}?autoplay=1&rel=0`;
    videoFrame.src = embedUrl;
    
    // Update complete button
    const isCompleted = userProgress.completedLessons.includes(lesson.id);
    if (markCompleteBtn) {
        if (isCompleted) {
            markCompleteBtn.textContent = 'Aula Concluída ✓';
            markCompleteBtn.disabled = true;
            markCompleteBtn.classList.add('btn--secondary');
            markCompleteBtn.classList.remove('btn--primary');
        } else {
            markCompleteBtn.textContent = 'Marcar como Concluído';
            markCompleteBtn.disabled = false;
            markCompleteBtn.classList.add('btn--primary');
            markCompleteBtn.classList.remove('btn--secondary');
        }
    }
    
    // Show modal
    videoModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    console.log('Closing video modal');
    
    const videoModal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    
    if (videoModal) {
        videoModal.classList.add('hidden');
    }
    
    if (videoFrame) {
        videoFrame.src = '';
    }
    
    currentVideoLesson = null;
    document.body.style.overflow = '';
}

function markLessonAsCompleted(lessonId) {
    console.log('Marking lesson as completed:', lessonId);
    
    if (!userProgress.completedLessons.includes(lessonId)) {
        userProgress.completedLessons.push(lessonId);
        
        // Unlock next lesson
        unlockNextLesson(lessonId);
        
        // Update UI
        updateCourseProgress();
        populateCourseContent();
        
        // Update complete button
        const markCompleteBtn = document.getElementById('markCompleteBtn');
        if (markCompleteBtn) {
            markCompleteBtn.textContent = 'Aula Concluída ✓';
            markCompleteBtn.disabled = true;
            markCompleteBtn.classList.add('btn--secondary');
            markCompleteBtn.classList.remove('btn--primary');
        }
        
        console.log('Lesson marked as completed successfully');
    }
}

function unlockNextLesson(completedLessonId) {
    const allLessons = courseData.modules.flatMap(module => module.lessons);
    const currentIndex = allLessons.findIndex(lesson => lesson.id === completedLessonId);
    
    if (currentIndex !== -1 && currentIndex < allLessons.length - 1) {
        const nextLesson = allLessons[currentIndex + 1];
        if (!userProgress.unlockedLessons.includes(nextLesson.id)) {
            userProgress.unlockedLessons.push(nextLesson.id);
            console.log('Unlocked next lesson:', nextLesson.id);
        }
    }
}

function updateCourseProgress() {
    const totalLessons = courseData.modules.reduce((total, module) => total + module.lessons.length, 0);
    const completedCount = userProgress.completedLessons.length;
    const progressPercentage = totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0;
    
    const completedLessonsSpan = document.getElementById('completedLessons');
    const totalLessonsSpan = document.getElementById('totalLessons');
    const progressFill = document.getElementById('progressFill');
    
    if (completedLessonsSpan) {
        completedLessonsSpan.textContent = completedCount;
    }
    if (totalLessonsSpan) {
        totalLessonsSpan.textContent = totalLessons;
    }
    if (progressFill) {
        progressFill.style.width = `${progressPercentage}%`;
    }
    
    console.log(`Course progress: ${completedCount}/${totalLessons} (${progressPercentage.toFixed(1)}%)`);
}

// Global error handler for debugging
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
});

console.log('JavaScript loaded successfully');