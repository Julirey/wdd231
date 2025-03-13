const courseList = document.getElementById("course-list");
const totalCreditsElement = document.getElementById("credits");

const courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming.",
    technology: ["HTML", "CSS"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce the notion of classes and objects, encapsulation, inheritance, and polymorphism.",
    technology: ["C#"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience in Web Fundamentals and programming.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course focuses on user experience, accessibility, compliance, and performance optimization.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
];

// Get total credits
function getTotalCredits(courses) {
  const totalCredits = courses.reduce((total, course) => total + course.credits, 0);
  return totalCredits;
}

// Display Courses
function displayCourses(option = "All") {
  courseList.innerHTML = "";

  const filteredCourses = courses.filter((course) => option === "All" || course.subject === option);
  filteredCourses.forEach((course) => {
    const courseElement = document.createElement("p");
    courseElement.textContent = `${course.subject} ${course.number}`;

    if (course.completed) {
      courseElement.classList.add("completed");
    }

    courseList.appendChild(courseElement);
  });
  totalCreditsElement.textContent = `The total number of credits is: ${getTotalCredits(filteredCourses)}`;
}


// Assign Event Listeners
document.querySelectorAll(".filter-options button").forEach((button) => {
  button.addEventListener("click", () => {
    // Ensure only the latest option is highlighted
    document.querySelectorAll(".filter-options button").forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");
    
    const option = button.textContent;
    displayCourses(option);
  });
});

// First load
document.addEventListener("DOMContentLoaded", () => {
  displayCourses();
});
