const projectsTag = document.querySelector(".projects");

async function getProjects() {
	let url = "./../assets/projects.json";
	try {
		let res = await fetch(url);
		return await res.json();
	} catch (error) {
		console.log(error);
	}
}

async function renderProjects() {
	let projects = await getProjects();
	let html = "";

  projects.projects.forEach(project => {
    html += `
    <a class="project" href="${project.project}.html">
        <div class="img-container">
          <img src="../assets/cover/${project.img}.jpg" id="cover" alt="cover">
        </div>
        <h4 id="title">${project.title}</h4>
        <p id="description">${project.description}</p>
    </a>
    `;
  });

	projectsTag.innerHTML = html;
  addListeners();
}

function addListeners(){
  const projectList = document.querySelectorAll(".project");
  console.log(projectList);
  projectList.forEach(proj =>{
    proj.addEventListener('mouseover',()=>{
      proj.classList.add("img-selected");
    });

    proj.addEventListener('mouseleave',()=>{
      proj.classList.remove("img-selected");
    });

  });
}

renderProjects();
