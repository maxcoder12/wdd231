const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const allButton = document.querySelector("#allButton");
const cseButton = document.querySelector("#cseButton");
const wddButton = document.querySelector("#wddButton");

const requiredCredits = document.querySelector("#completedCredits");

const coursesList = document.querySelector("#coursesList");

allButton.classList.add("completed-button");
courses.forEach(item =>{
    const li = document.createElement("li");
    li.classList.add("black-button");

    let name = item.subject + " " + item.number;
    let id = item.subject.toLowerCase() + item.number;

    li.textContent = name;
    li.id = id;
 
    if (item.completed === true){
        li.classList.add("completed-button");
    }
    
    coursesList.appendChild(li);
    
    let credits = 0;
    credits = courses.filter(course => course.completed).reduce((acc, course) => acc + course.credits, 0);   
    requiredCredits.textContent = credits;
});

function displayCourses(course){
    const coursesListChild = document.querySelectorAll("#coursesList li");

    switch (course){
        case "all":
            allButton.classList.add("completed-button");
            cseButton.classList.remove("completed-button");
            wddButton.classList.remove("completed-button");
            coursesListChild.forEach(item => item.style.display = "inline-block");

            let credits = 0;
            credits = courses.filter(course => course.completed).reduce((acc, course) => acc + course.credits, 0);   
            requiredCredits.textContent = credits;
            break;
        case "cse":
            cseButton.classList.add("completed-button");
            allButton.classList.remove("completed-button");
            wddButton.classList.remove("completed-button");
            coursesListChild.forEach(item =>{
                item.style.display = item.id.startsWith("cse") ? "inline-block" : "none";
            });

            let cseCredits = courses.filter(course => course.completed && course.subject === "CSE").reduce((acc, course) => acc + course.credits, 0);
            requiredCredits.textContent = cseCredits;          
            break;
        case "wdd":
            wddButton.classList.add("completed-button");
            allButton.classList.remove("completed-button");
            cseButton.classList.remove("completed-button");
            coursesListChild.forEach(item =>{
                item.style.display = item.id.startsWith("wdd") ? "inline-block" : "none";
            });
            
            
            let wddCredits = courses.filter(course => course.completed && course.subject === "WDD").reduce((acc, course) => acc + course.credits, 0);
            requiredCredits.textContent = wddCredits;
            break;
        default:
            allButton.classList.add("completed-button");
            cseButton.classList.remove("completed-button");
            wddButton.classList.remove("completed-button");
            coursesListChild.forEach(item => item.style.display = "inline-block");
            
            break;
    }
}

allButton.addEventListener("click", () => displayCourses("all"));
cseButton.addEventListener("click", () => displayCourses("cse"));
wddButton.addEventListener("click", () => displayCourses("wdd"));
