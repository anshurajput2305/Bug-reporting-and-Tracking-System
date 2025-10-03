function uploadResume() {
  let input = document.getElementById("resumeInput");
  let file = input.files[0];

  if (!file) {
    alert("⚠️ Please select a resume file first!");
    return;
  }

  // Mock job recommendations (to replace with backend later)
  let jobs = [
    { title: "Software Engineer", score: 92 },
    { title: "Data Scientist", score: 85 },
    { title: "Business Analyst", score: 78 },
    { title: "Machine Learning Engineer", score: 74 }
  ];

  let jobList = document.getElementById("jobList");
  jobList.innerHTML = ""; // clear old results

  jobs.forEach(job => {
    let li = document.createElement("li");
    li.innerHTML = `<strong>${job.title}</strong> – Match: <span style="color:#667eea">${job.score}%</span>`;
    jobList.appendChild(li);
  });
}
