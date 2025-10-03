function uploadResume() {
  const input = document.getElementById("resumeInput");
  const file = input.files[0];

  if (!file) {
    alert("⚠️ Please select a resume file first!");
    return;
  }

  // Mock job results
  const jobs = [
    { title: "Software Engineer", score: 92 },
    { title: "Data Scientist", score: 85 },
    { title: "Business Analyst", score: 78 },
    { title: "Machine Learning Engineer", score: 74 }
  ];

  const jobList = document.getElementById("jobList");
  jobList.innerHTML = "";

  jobs.forEach(job => {
    const li = document.createElement("li");
    li.className = "bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-all";
    li.innerHTML = `<strong>${job.title}</strong> – Match: <span class="text-blue-600">${job.score}%</span>`;
    jobList.appendChild(li);
  });
}
