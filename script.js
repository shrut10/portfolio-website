const projectsContainer = document.getElementById('projects');

async function fetchProjects() {
  const username = 'shrut10';
  const response = await fetch(`https://api.github.com/users/shrut10/repos?sort=created`);
  const projects = await response.json();
  return projects;
}

async function displayProjects() {
  const projects = await fetchProjects();
  projectsContainer.innerHTML = '';

  projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.classList.add('project');

    const projectName = document.createElement('h2');
    projectName.textContent = project.name;

    const projectDescription = document.createElement('p');
    projectDescription.textContent = project.description;

    const projectLink = document.createElement('a');
    projectLink.href = project.html_url;
    projectLink.textContent = 'View on GitHub';

    projectItem.appendChild(projectName);
    projectItem.appendChild(projectDescription);
    projectItem.appendChild(projectLink);

    projectsContainer.appendChild(projectItem);
  });
}

displayProjects();
