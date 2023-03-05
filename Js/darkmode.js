// document.addEventListener('DOMContentLoaded', () => {
//     const darkModeSwitch = document.querySelector('.dark-mode-switch');
//     const headerdark = document.querySelector('header')
  
//     darkModeSwitch.addEventListener('click', () => {
//       document.body.classList.toggle('dark');
//       darkModeSwitch.classList.toggle('dark');
//       headerdark.classList('dark');
//     });
//   });''
document.addEventListener('DOMContentLoaded', () => {
  var checkbox = document.querySelector('#switch'); 

  checkbox.addEventListener('change', function() {
    if(this.checked) {
      transition()
      document.documentElement.setAttribute('data-theme', 'dark');
    } else{
      transition()
      document.documentElement.setAttribute('data-theme', 'light');
    }

  })

  let transition = () => {
      document.documentElement.classList.add('transition');
      window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
      }, 1000)
  }
});

  