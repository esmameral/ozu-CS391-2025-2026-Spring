

function createCourse(){
    var code=document.getElementById("courseCode").value;
    if(code==null||code==""){
        alert("Enter course code");
        return false;
    }
    var title=document.getElementById("courseTitle").value
    var desc=document.getElementById("desc").value
    var credit=document.getElementById("courseCredit").value
    var instructor=document.getElementById("instructor").value
    let course={code,title,desc,credit,instructor};
    console.log(course)
    return false;
}

function generateCourseCards(){
    var courses = [
    {
        code: "CS391",
        title: "Web Applications",
        desc: "To introduce the students to state-of-the-practice technologies, tools and frameworks for developing Web applications.",
        credit: 4,
        quota: 70,
        instructor: "Esma Meral"
    },
    {
        code: "CS201",
        title: "Data Structures",
        desc: "Covers the basic data structures, their implementation, and algorithmic applications.",
        credit: 3,
        quota: 60,
        instructor: "Ahmet Yılmaz"
    },
    {
        code: "CS202",
        title: "Database Systems",
        desc: "Introduction to database concepts, design, and SQL programming.",
        credit: 3,
        quota: 50,
        instructor: "Ayşe Demir"
    },
    {
        code: "CS301",
        title: "Operating Systems",
        desc: "Fundamentals of operating systems including processes, threads, and memory management.",
        credit: 4,
        quota: 45,
        instructor: "Mehmet Kaya"
    },
    {
        code: "CS302",
        title: "Computer Networks",
        desc: "Introduction to networking concepts, protocols, and network programming.",
        credit: 3,
        quota: 55,
        instructor: "Zeynep Arslan"
    },
    {
        code: "CS303",
        title: "Software Engineering",
        desc: "Software development lifecycle, project management, and design methodologies.",
        credit: 3,
        quota: 50,
        instructor: "Canan Yıldız"
    },
    {
        code: "CS304",
        title: "Artificial Intelligence",
        desc: "Introduction to AI, machine learning algorithms, and problem-solving techniques.",
        credit: 3,
        quota: 40,
        instructor: "Emre Çelik"
    },
    {
        code: "CS306",
        title: "Mobile Applications",
        desc: "Design and development of mobile applications on Android and iOS platforms.",
        credit: 3,
        quota: 50,
        instructor: "Burak Yavuz"
    },
    {
        code: "CS307",
        title: "Cyber Security",
        desc: "Introduction to security concepts, cryptography, and protecting information systems.",
        credit: 3,
        quota: 45,
        instructor: "Derya Tunç"
    }
];

var courseList=document.getElementById("courseList");
var text="<div class='row row-cols-2  row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-6'>";
for (c of courses){
    text+="<div class='col'>"
    text+="     <div class='card border-info text-bg-light h-60 m-3' style='width: 12rem;'>";
    text+=`           <div class='card-header'>${c.code} </div>`;
    text+="           <div class='card-body'>";
    text+=`           <h6 class='card-title'>${c.title}</h6>`;
    text+=`           <p class='card-text'>Credit: ${c.credit}</p>`;
    text+=`           <p class='card-text'>Quota: ${c.quota}</p>`;
    text+=`           <p class='card-text'>Instructor: ${c.instructor}</p>`;
    text+="           <a href='#' class='btn btn-primary'>Details..</a>";
    text+="           </div>";
    text+="      </div>";
    text+="</div>";
}


text+="</div>"
courseList.innerHTML=text

}