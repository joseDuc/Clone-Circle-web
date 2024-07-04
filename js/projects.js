window.addEventListener("load", async () => {
    try {
        const response = await fetch(
            "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
        );
        const data = await response.json();

        const mainProjectId = getQuerystringId();
        let mainProjectIndex = data.findIndex(
            (project) => project.uuid == mainProjectId
        );

        const mainProject = data[mainProjectIndex];
        addMainProject(mainProject);

        //elimina el proyecto principal (mainProjectIndex) de la lista
        data.splice(mainProjectIndex, 1);
        //le da la vuelta a la lista argumento porque viene en orden DESC
        addOtherProjects(data.slice(0, 3).reverse());
    } catch (error) {
        console.log(error);
    }
});

function getQuerystringId() {
    //un método que he de aprender para encontrar cualquier parámetro del querystring en cualquier futura URL
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop)
    });
    return params.id;
}

function addMainProject(project) {
    if (!project) {
        return;
    }

    const article = document.createElement('article');
    const h1 = document.createElement('h1');
    const divSubTitle = document.createElement('div');
    const spanDescription = document.createElement('span');
    const spanCompleted = document.createElement('span');
    const spanData = document.createElement('span');
    const divImage = document.createElement('div');
    const img = document.createElement('img');

    h1.className = "title";
    h1.innerText = project.name;

    divSubTitle.className = "subtitle";
    spanDescription.className = "UI-design-title";
    spanDescription.innerText = project.description;

    spanCompleted.className = "completed-title";
    spanCompleted.innerHTML = "Completed on";
    spanData.className = "completed-title-data";
    spanData.innerHTML = project.completed_on;
    spanCompleted.appendChild(spanData);

    divSubTitle.append(spanDescription, spanCompleted);

    divImage.className = "project-image-section";
    img.className = "project-image"
    img.src = project.image;
    img.alt = project.name;
    divImage.appendChild(img);

    article.className = "project-description";
    article.innerText = project.content;

    const projectElement = document.getElementById("project");
    projectElement.innerHTML = "";
    projectElement.append(h1, divSubTitle, divImage, article);

    /*
     const projectHTML = `
          <h1 class="title">${project.name}</h1>
          <div class="subtitle">
          <span class="UI-design-title">${project.description}</span>
  
          <span class="completed-title">Completed on
              <span class="completed-title-data">${project.completed_on}</span>
          </span>
          </div>
          <div class="project-image-section">
          <img class="project-image" src="${project.image}" alt="${project.name} image" />
          </div>
  
          <article class="project-description">
              ${project.content}
          </article>
      `;
    const projectElement = document.getElementById("project");
    projectElement.innerHTML = projectHTML;
    */

}

function addOtherProjects(projects) {
    let articlesHTML = "";
    const container = document.querySelector(".projects-container");
    projects.forEach((project) => {
        articlesHTML += jsonProjectToOtherHtmlArticle(project);
    });
    container.innerHTML = articlesHTML;
}

function jsonProjectToOtherHtmlArticle(project) {
    if (!project) {
        return;
    }
    const projectHTML = `
          <article class="project-card">
              <a class="project-wrapper" href="../html/projects.html?id=${project.uuid}">
                  <img class="img-project" src="${project.image}" alt="${project.name} image" />
                  <div class="project-inner-card">
                  <h4 class="project-title">${project.name}</h4>
                  <p class="project-description">${project.description}</p>
                  <a class="learn-more" href="../html/projects.html?id=${project.uuid}"><p>Learn more</p></a>
                  </div>
              </a>
          </article>
      `;
    return projectHTML;
}
