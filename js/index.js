




//window.addEventListener("load", async () => {

//try {
//  //peticion a la API
//  const response = await fetch(
//   "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
//);
//const data = await response.json();
//const container = document.querySelector("div.projects-container");
////el contenido viene en orden DESC, con reverse le cambia el orden a ASC
////const articles = data.reverse().slice(0, 3).map(jsonProjectToHtmlArticle);
////*esta es la versión que conozco para mapear elementos de un array
////aunque la anterior (comentada) parece muy avanzada e interesante*/
//const articles = data.reverse().slice(0, 3).map(project => {
// return jsonProjectToHtmlArticle(project);
//});
//container.innerHTML = "";
//articles.forEach((article) => container.appendChild(article));
//} catch (error) {
//console.log(error);
//} finally {
//document.querySelector("section.recent-projects").removeAttribute("hidden");
//}

//});


/*
function jsonProjectToHtmlArticle(project) {
  const article = document.createElement("article");
  article.className = "project-card";
  const wrapper = createProjectWrapperAnchor(project);
  article.appendChild(wrapper);
  return article;
}

function createProjectWrapperAnchor(project) {
  const wrapperAnchor = document.createElement("a");
  wrapperAnchor.className = "project-wrapper";
  wrapperAnchor.href = `./html/projects.html?id=${project.uuid}`;

  const imgElement = document.createElement("img");
  imgElement.className = "img-project";
  imgElement.src = project.image;
  imgElement.alt = project.name;
  //imgElement.setAttribute("src", project.image);
  //imgElement.setAttribute("alt", project.name);
  wrapperAnchor.appendChild(imgElement);

  const divInnerCard = createProjectInnerCard(project);
  wrapperAnchor.appendChild(divInnerCard);
  return wrapperAnchor;
}
*/





window.addEventListener("load", async () => {
  try {
    const response = await fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects");
    const data = await response.json();
    const articles = data.reverse().slice(0, 3).map((project) => {
      return jsonProjectToHtmlArticle(project);
    });
    console.log(articles)
    const container = document.querySelector(".projects-container");
    container.innerHTML = "";
    articles.forEach((article) => {
      container.appendChild(article);
    });
  } catch (error) {
    console.log(error);
  } finally {
    document.querySelector(".recent-projects").removeAttribute("hidden");
  }
});
  
function jsonProjectToHtmlArticle(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  const wrapper = createProjectWrapperAnchor(project);
  article.appendChild(wrapper);

  return article;
}
  


function createProjectWrapperAnchor(project){
const anchorWrapper =document.createElement('a');
anchorWrapper.className="project-wrapper";
anchorWrapper.href=`./html/projects.html?id=${project.uuid}`;
const img=document.createElement("img");
img.className="img-project";
img.src=project.image;
img.alt=project.name;
anchorWrapper.appendChild(img);
anchorWrapper.appendChild(createProjectInnerCard(project));
return anchorWrapper;
}


function createProjectInnerCard(project) {
  const divInnerCard = document.createElement("div");
  divInnerCard.className = "project-inner-card";

  const h4Element = document.createElement("h4");
  h4Element.className = "project-title";
  h4Element.innerHTML = project.name;
  divInnerCard.appendChild(h4Element);

  const pElement = document.createElement("p");
  pElement.className = "project-description";
  pElement.innerHTML = project.description;
  divInnerCard.appendChild(pElement);

  const learnMoreLink = document.createElement("a");
  learnMoreLink.className = "learn-more";
  learnMoreLink.href = `./html/projects.html?id=${project.uuid}`;
  const learnMoreLinkP = document.createElement("p");
  learnMoreLinkP.innerHTML = "Learn more";
  learnMoreLink.appendChild(learnMoreLinkP);
  divInnerCard.appendChild(learnMoreLink);
  return divInnerCard;
}


function createProjectInnerCard(project){
  const div=document.createElement("div");
  div.className="project-inner-card";
  const h4=document.createElement("h4");
  h4.className="project-title";
  h4.innerHTML=project.name;
  div.appendChild(h4);
  const p=document.createElement("p");
  p.className="project-description";
  p.innerHTML=project.description;
  div.appendChild(p);
  const a = document.createElement("a");
  a.className="learn-more";
  a.href=`./html/projects.html?id= ${project.uuid}`;
  const pLearn=document.createElement("p");
  p.innerHTML="Learn more";
  a.appendChild(p);
  div.appendChild(a);
  return div;
}
  