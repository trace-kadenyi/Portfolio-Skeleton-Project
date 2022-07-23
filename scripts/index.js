// Open menu bar
const openMenuBar = () => {
  const menuBar = document.getElementById('the-menu-bar');
  const menuBarOverlay = document.getElementById('menu-bar-overlay');
  menuBar.addEventListener('click', () => {
    menuBarOverlay.style.display = 'block';
  });
};
openMenuBar();

// Close menu bar
function closeMenuBar() {
  document.getElementById('menu-bar-overlay').style.display = 'none';
}

// Open mobile menu options
const menuOptions = document.querySelectorAll('.menu-options');
const mobileMenuOpts = () => {
  menuOptions.forEach((menuOption) => {
    menuOption.addEventListener('click', () => {
      closeMenuBar();
    });
  });
};
mobileMenuOpts();

// Create and Display Projects Section

const workSection = [{
  id: 1,
  title: 'Webpack To-Do List',
  description: 'A to-do list created using webpack. It allows the user to add, remove, edit, check, and delete tasks from the list. All the information is saved on local storage.',
  popup_description: 'The to-do list is setup using webpack with all the contents being displayed through the dist folder. It allows the user to add items through the input section. Moroever, the user can also remove and edit items using the options available on the right side of the app. All the data is saved in local storage including the checked items.',
  featured_image: 'images/todo1.PNG',
  alt_message: 'My_Todo_Project',
  overview: ['CANOPY', 'Full Stack Dev', 2022],
  overview_image: 'images/circle.svg',
  technologies: ['html', 'css', 'javaScript'],
  liveVersion: 'https://track92.github.io/Webpack-Project--To-Do-List/',
  liveSource: 'https://github.com/TracK92/Webpack-Project--To-Do-List.git',
},
{
  id: 2,
  class: 'OneProjectReverse',
  title: 'React To-Do List',
  description: 'A to-do list created using Reactjs. It allows the user to enter the activity, time and date, check completed and delete tasks.',
  popup_description: 'The to-do list is a reactjs project that comprises an array of objects that allows the user to fill in the available form with the activity, date and time. Items can be added, removed and checked, with all this information being saved to local storage.',
  featured_image: 'images/react-todo.png',
  alt_message: 'My_react-to-do_Project',
  overview: ['CANOPY', 'Full Stack Dev', 2022],
  overview_image: 'images/circle.svg',
  technologies: ['html', 'css', 'reactjs'],
  liveVersion: 'https://track92.github.io/My-To-Do-List/',
  liveSource: 'https://github.com/TracK92/My-To-Do-List.git',
},
{
  id: 3,
  title: 'Tonic',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  popup_description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque sunt eaque tempore iure sed nobis mollitia temporibus id? Praesentium dolor trat inventore, quas magnam repellendus deserunt id sequi aliquid nisi iste. cessitatibus.',
  featured_image: 'images/tonic-project.png',
  alt_message: 'My_Tonic_Project',
  overview: ['CANOPY', 'Full Stack Dev', 2022],
  overview_image: 'images/circle.svg',
  technologies: ['html', 'css', 'javaScript'],
  liveVersion: 'https://track92.github.io/Portfolio-Skeleton-Project/',
  liveSource: 'https://github.com/TracK92/Portfolio-mobile-version-skeleton.git',
},
{
  id: 4,
  class: 'OneProjectReverse',
  title: 'Multi-Post Stories',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  popup_description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque sunt eaque tempore iure sed nobis mollitia temporibus id? Praesentium dolor trat inventore, quas magnam repellendus deserunt id sequi aliquid nisi iste. cessitatibus.',
  featured_image: 'images/multi_stories_two.png',
  alt_message: 'My_Multi_Stories_Project',
  overview: ['CANOPY', 'Full Stack Dev', 2022],
  overview_image: 'images/circle.svg',
  technologies: ['html', 'css', 'javaScript'],
  liveVersion: 'https://track92.github.io/Portfolio-Skeleton-Project/',
  liveSource: 'https://github.com/TracK92/Portfolio-mobile-version-skeleton.git',
},
];
// Create Project Section
function CreateProject(element) {
  const worksSect = document.querySelector('#portfolio-sect');
  worksSect.classList.add('works-sect');

  const projects = document.createElement('div');
  projects.classList.add('projects');
  worksSect.appendChild(projects);

  const projectOne = document.createElement('div');
  projectOne.classList.add('oneProject');
  projects.appendChild(projectOne);

  const articles = document.createElement('div');
  articles.classList.add('articles', `${element.class}`);
  projectOne.appendChild(articles);

  const articleOne = document.createElement('article');
  articleOne.classList.add('article-one');
  articleOne.innerHTML = `<img class='main-img' src="${element.featured_image}" alt="${element.alt_message}">`;
  articles.appendChild(articleOne);

  const articleTwo = document.createElement('article');
  articleTwo.classList.add('article-two');
  articles.appendChild(articleTwo);

  const headingTwo = document.createElement('h2');
  headingTwo.classList.add('tonic');
  headingTwo.innerHTML = `${element.title}`;
  articleTwo.appendChild(headingTwo);

  const description = document.createElement('div');
  description.classList.add('description');
  articleTwo.appendChild(description);

  const headingFive = document.createElement('h5');
  headingFive.classList.add('descript');
  headingFive.innerHTML = `${element.overview[0]}`;
  description.appendChild(headingFive);

  const unorderedList = document.createElement('ul');
  description.appendChild(unorderedList);

  const listOne = document.createElement('li');
  listOne.innerHTML = `<img src="${element.overview_image}" alt="circle">`;
  unorderedList.appendChild(listOne);

  const listTwo = document.createElement('li');
  listTwo.innerHTML = `${element.overview[1]}`;
  unorderedList.appendChild(listTwo);

  const listThree = document.createElement('li');
  listThree.innerHTML = `<img src="${element.overview_image}" alt="circle">`;
  unorderedList.appendChild(listThree);

  const listFour = document.createElement('li');
  listFour.innerHTML = `${element.overview[2]}`;
  unorderedList.appendChild(listFour);

  const textSect = document.createElement('div');
  textSect.classList.add('text-sect');
  articleTwo.appendChild(textSect);

  const textDescription = document.createElement('p');
  textDescription.classList.add('text-description');
  textDescription.innerHTML = `${element.description}`;
  textSect.appendChild(textDescription);

  const languages = document.createElement('div');
  languages.classList.add('languages');
  articleTwo.appendChild(languages);

  const unorderedListTwo = document.createElement('ul');
  languages.appendChild(unorderedListTwo);

  const listLanguagesOne = document.createElement('li');
  listLanguagesOne.innerHTML = `${element.technologies[0]}`;
  unorderedListTwo.appendChild(listLanguagesOne);

  const listLanguagesTwo = document.createElement('li');
  listLanguagesTwo.innerHTML = `${element.technologies[1]}`;
  unorderedListTwo.appendChild(listLanguagesTwo);

  const listLanguagesThree = document.createElement('li');
  listLanguagesThree.innerHTML = `${element.technologies[2]}`;
  unorderedListTwo.appendChild(listLanguagesThree);

  const seeProjectOption = document.createElement('div');
  articleTwo.appendChild(seeProjectOption);

  const seeProjectBtn = document.createElement('button');
  seeProjectBtn.classList.add('see_project');
  seeProjectBtn.id = `${element.id}`;
  seeProjectBtn.innerHTML = 'See Project';
  seeProjectOption.appendChild(seeProjectBtn);
}
const displayProject = () => {
  workSection.forEach((element) => CreateProject(element));
};
displayProject();

// POPUP WINDOWS
const checkProjects = document.querySelectorAll('.see_project');
const mobilePopup = document.querySelector('.mobile-popup-window');
const desktopPopup = document.querySelector('.desktop-popup-window');
const projectImage = document.querySelector('.mobile-projects');
const desktopProjectImage = document.querySelector('.desktop-projects');

function addPopupImage(seeProjectId) {
  const foundProject = workSection.filter(
    (element) => element.id === seeProjectId,
  )[0];
    // mobile popup
  projectImage.innerHTML = `<div class="oneProject project1">
        <div class="popup-header">
          <h2 class="tonic popupheading">${foundProject.title}</h2>
          <img class="menu-icon popup-icon close-modal" src="./images/popup-icon.svg" alt="close-popup-bar"/>
        </div>
        <div class="description">
          <h5 class="descript">CANOPY</h5>
          <ul>
            <li>
              <img src="images/circle.svg" alt="circle" />
            </li>
            <li>Full Stack Dev</li>
            <li>
              <img src="images/circle.svg" alt="circle" />
            </li>
            <li>2022</li>
          </ul>
        </div>
        <div class="project-img">
          <img class="main-img" src="${foundProject.featured_image}" alt="${foundProject.alt_message}">
        </div>
        <div class="text-sect-popup mobile-text-sect">
          <p class="text-description mobile-text-sect">${foundProject.popup_description}</p>
        </div>
        <div class="languages languages-popup">
          <ul>
            <li>html</li>
            <li>css</li>
            <li>javaScript</li>
          </ul>
        </div>
        <div>
          <a href="${foundProject.liveVersion}" target="_blank" class="see_project-popup see_live">See Live <img
          src="images/see-live-icon.svg" alt="see-live-icon" /></a>
          <a href="${foundProject.liveSource}" target="_blank" class="see_project-popup see_source">See Source <img
          src="images/see-source-icon.svg" alt="see-source-github-icon" /></a>
        </div>
      </div>`;
  // desktop popup
  desktopProjectImage.innerHTML = `
  <div class="oneProject-desktop-popup">
        <div class="popup-header">
          <h2 class="desktopPopupheading">${foundProject.title}</h2>
          <img class="menu-icon popup-icon close-modal" src="./images/popup-icon.svg" alt="close-popup-bar"/>
        </div>
        <div class="description">
          <h5 class="descript">CANOPY</h5>
          <ul>
            <li>
              <img src="images/circle.svg" alt="circle" />
            </li>
            <li>Full Stack Dev</li>
            <li>
              <img src="images/circle.svg" alt="circle" />
            </li>
            <li>2022</li>
          </ul>
        </div>
        <div class="desktop-project-img">
          <img class="desktop-img-popup" src="${foundProject.featured_image}" alt="${foundProject.alt_message}">
        </div>
        <article class="desktop-popup-segment">
          <div class="first-segment">
            <div class="text-sect-popup">
              <p class="text-description-popup">${foundProject.popup_description}</p>
            </div>
          </div>
          <div class="second-segment">
            <div class="languages-popup">
              <ul class="languages-popup-list-container">
                <li class="languages-popup-list">html</li>
                <li class="languages-popup-list">css</li>
                <li class="languages-popup-list">javaScript</li>
                <li class="languages-popup-list">github</li>
              </ul>
            </div>
            <div class="see-project-desktop-version">
              <a href="${foundProject.liveVersion}" target="_blank" class="see-project-desktop-popup see_live">See Live <img
                  src="images/see-live-icon.svg" alt="see-live-icon" /></a>
              <a href="${foundProject.liveSource}" target="_blank" class="see-project-desktop-popup see_source">See Source <img
                  src="images/see-source-icon.svg" alt="see-source-github-icon" /></a>
            </div>
          </div>
        </article>
      </div>`;
  // close popups
  const close = document.querySelectorAll('.close-modal');
  close.forEach((closebtn) => {
    closebtn.addEventListener('click', () => {
      mobilePopup.style.display = 'none';
      desktopPopup.style.display = 'none';
    });
  });
}

// Open Popup Windows
const viewProjectDetails = () => {
  checkProjects.forEach((singleProject) => {
    singleProject.addEventListener('click', () => {
      if (Number(singleProject.id) === 1) {
        mobilePopup.style.display = 'block';
        desktopPopup.style.display = 'block';
        addPopupImage(Number(singleProject.id));
      } else if (Number(singleProject.id) === 2) {
        mobilePopup.style.display = 'block';
        desktopPopup.style.display = 'block';
        addPopupImage(Number(singleProject.id));
      } else if (Number(singleProject.id) === 3) {
        mobilePopup.style.display = 'block';
        desktopPopup.style.display = 'block';
        addPopupImage(Number(singleProject.id));
      } else if (Number(singleProject.id) === 4) {
        mobilePopup.style.display = 'block';
        desktopPopup.style.display = 'block';
        addPopupImage(Number(singleProject.id));
      }
    });
  });
};
viewProjectDetails();