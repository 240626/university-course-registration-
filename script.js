const availableCourses = [
    { id: 1, name: "Web Programming", credits: 6 },
    { id: 2, name: "Computer Networks", credits: 5 },
    { id: 3, name: "Database Systems", credits: 6 },
    { id: 4, name: "Software Engineering", credits: 4 },
    { id: 5, name: "Artificial Intelligence", credits: 5 }
];

let myCourses = [];
let totalCredits = 0;

const availableContainer = document.getElementById('available-courses');
const registeredContainer = document.getElementById('registered-courses');
const totalCreditsVal = document.getElementById('total-credits-val');

function renderAvailableCourses() {
    availableCourses.forEach(course => {
        const card = document.createElement('div');
        card.classList.add('course-card');
        card.innerHTML = `
            <div>
                <span class="course-info">${course.name}</span>
                <span class="course-credits">(${course.credits} Credits)</span>
            </div>
            <button class="add-btn" onclick="addCourse(${course.id})">Add</button>
        `;
        availableContainer.appendChild(card);
    });
}

function addCourse(id) {
    const isDuplicate = myCourses.some(course => course.id === id);
    
    if (isDuplicate) {
        alert("You have already registered for this course!");
        return;
    }

    const courseToAdd = availableCourses.find(course => course.id === id);
    myCourses.push(courseToAdd);
    
    calculateCredits();
    renderRegisteredCourses();
}

function dropCourse(id) {
    myCourses = myCourses.filter(course => course.id !== id);
    calculateCredits();
    renderRegisteredCourses();
}

function calculateCredits() {
    totalCredits = myCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsVal.textContent = totalCredits;
}

function renderRegisteredCourses() {
    registeredContainer.innerHTML = "";
    myCourses.forEach(course => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${course.name} (${course.credits} Cr)</span>
            <span class="drop-btn" onclick="dropCourse(${course.id})">Drop</span>
        `;
        registeredContainer.appendChild(li);
    });
}

renderAvailableCourses();