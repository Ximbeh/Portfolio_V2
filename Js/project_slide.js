// var currentIndex = 0;
// var projects = document.querySelectorAll('.project');
// var leftArrow = document.querySelector('.arrow-left');
// var rightArrow = document.querySelector('.arrow-right');

// leftArrow.addEventListener('click', function(event) {
//   event.preventDefault();
//   currentIndex = (currentIndex === 0) ? projects.length - 1 : currentIndex - 1;
//   toggleProjects();
// });

// rightArrow.addEventListener('click', function(event) {
//   event.preventDefault();
//   currentIndex = (currentIndex === projects.length - 1) ? 0 : currentIndex + 1;
//   toggleProjects();
// });

// function toggleProjects() {
//   projects.forEach(function(project, index) {
//     if (index === currentIndex) {
//       project.style.display = 'block';
//     } else {
//       project.style.display = 'none';
//     }
//   });
// }