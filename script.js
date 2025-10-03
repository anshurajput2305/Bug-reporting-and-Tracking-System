function uploadResume() {
  let input = document.getElementById("resumeInput");
  let file = input.files[0];

  if (!file) {
    alert("Please select a resume file first!");
    return;
  }

  // Mock job results (later replace with backend API)
  let jobs = [
    { title: "Software Engineer", score: 85 },
    { title: "Data Scientist", score: 78 },
    { title: "Business Analyst", score: 70 }
  ];

  let jobList = document.getElementById("jobList");
  jobList.innerHTML = ""; // clear previous results

  jobs.forEach(job => {
    let li = document.createElement("li");
    li.textContent = `${job.title} – Match: ${job.score}%`;
    jobList.appendChild(li);
  });
}
