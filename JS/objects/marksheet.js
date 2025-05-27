const students = [
    {
        id: 1,
        name: "Saddam Hussain",
        subjects: {
            "Computer": 80,
            "Mathematics": 80,
            "English": 80
        }
    },
    {
        id: 2,
        name: "Umer",
        subjects: {
            "Computer": 75,
            "Mathematics": 85,
            "English": 70
        }
    },
    {
        id: 3,
        name: "Anas",
        subjects: {
            "Computer": 60,
            "Mathematics": 65,
            "English": 55
        }
    }
];


function calculateTotalMarks(student) {
    let obtained_marks = 0;
    for (let subject in student.subjects) {
        obtained_marks += student.subjects[subject];
    }
    return obtained_marks;
}


function calculatePercentage(student) {
    const total_marks = 300;
    return (calculateTotalMarks(student) / total_marks) * 100;
}


function grade(student) {
    const percent = calculatePercentage(student);

    if (percent >= 90) return "A+";
    else if (percent >= 80) return "A";
    else if (percent >= 70) return "B";
    else if (percent >= 60) return "C";
    else if (percent >= 50) return "D";
    else return "F";
}


function displayMarksheet(student) {
    console.log("====================================");
    console.log("Student Name:", student.name);
    console.log("Roll Number:", student.id);
    console.log("Subjects Marks:", student.subjects);
    console.log("Obtained Marks:", calculateTotalMarks(student));
    console.log("Percentage:", calculatePercentage(student).toFixed(2) + "%");
    console.log("Grade:", grade(student));
    console.log("====================================\n");
}


students.forEach(displayMarksheet);
