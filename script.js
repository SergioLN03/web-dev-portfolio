const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  project.addEventListener('mouseenter', () => {
   if (window.innerWidth > 600) {
    project.style.transform = 'scale(1.1)';
    project.style.transform = 'transform 0.3s ease';
   }
  });
  
  project.addEventListener('mouseleave', () => {
   if (window.innerWidth > 600) {
    project.style.transform = 'scale(1)';
    project.style.transform = 'transform 0.3s ease';
        }
    });
});
