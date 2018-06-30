var navigate = function(blockid) {
    var containers = document.getElementsByClassName("containerArea");
    Array.prototype.forEach.call(containers, function(e) {
	e.style.display = (blockid === e.id)? "block" : "none";
    });
};

var courseInfoNavigate = function(blockid) {
    var sections = document.getElementsByClassName("section");
    Array.prototype.forEach.call(sections, function(e) {
	e.style.display = (blockid === e.id)? "block" : "none";
    });
};

var practiceInfoNavigate = function(blockid) {
    var practiceBlocks = document.getElementsByClassName("practiceBlocks");
    Array.prototype.forEach.call(practiceBlocks, function(e) {
	e.style.display = (blockid === e.id)? "block" : "none";
    });
};

window.onload = function() {
    navigate("main");
};

document.getElementById("mainButton").onclick = function(e) {
    navigate("main");
};

document.getElementById("courseInfoButton").onclick = function(e) {
    navigate("courseInfo");
    courseInfoNavigate("empty");
};

document.getElementById("lessonsButton").onclick = function(e) {
    navigate("lessons");
};

document.getElementById("labsButton").onclick = function(e) {
    navigate("labs");
};

document.getElementById("projectsButton").onclick = function(e) {
    navigate("projects");
};

document.getElementById("softwareButton").onclick = function(e) {
    navigate("softwareDownload");
};

document.getElementById("quizzesButton").onclick = function(e) {
    navigate("quizzesAndPractice");
    practiceInfoNavigate("empty");
};

document.getElementById("githubButton").onclick = function(e) {
    window.location = "https://github.com/";
};

document.getElementById("coursePortalButton").onclick = function(e) {
    //console.log("TESTING!");
    window.location = "https://course-portal.herokuapp.com/";
};

document.getElementById("2ndlessonsButton").onclick = function(e) {
    navigate("lessons");
};

// For the course info section
document.getElementById("introButton").onclick = function(e) {
    courseInfoNavigate("intro");
};

document.getElementById("enrolmentButton").onclick = function(e) {
    courseInfoNavigate("enrolment");
};

document.getElementById("scheduleInfoButton").onclick = function(e) {
    courseInfoNavigate("scheduleInfo");
};

document.getElementById("gradeSchemeButton").onclick = function(e) {
    courseInfoNavigate("gradingScheme");
};

document.getElementById("labsInfoButton").onclick = function(e) {
    courseInfoNavigate("labsInfo");
};

document.getElementById("projectsInfoButton").onclick = function(e) {
    courseInfoNavigate("projectsInfo");
};

document.getElementById("testInfoButton").onclick = function(e) {
    courseInfoNavigate("testInfo");
};

document.getElementById("githubInfoButton").onclick = function(e) {
    courseInfoNavigate("githubInfo");
};

document.getElementById("coursePortalInfoButton").onclick = function(e) {
    courseInfoNavigate("coursePortalInfo");
};

document.getElementById("futureCoursesInfoButton").onclick = function(e) {
    courseInfoNavigate("futureCoursesInfo");
};
