document.querySelector('.toggleTheme').addEventListener('click', event => {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  addDarkClassToHTML();
});

function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      const body = document.body;
      const moon = document.querySelector('.moon');
      const toggleTheme = document.querySelector('.toggleTheme');
      moon.classList.toggle('sun');
      toggleTheme.classList.toggle('day');
      body.classList.toggle('light');
      document.querySelector('.hero').classList.add('dark');
      document.querySelector('.themetoggle').classList.add('dark');
      document.querySelector('header').classList.add('dark');
    } else {
      document.querySelector('.hero').classList.remove('dark');
      document.querySelector('.themetoggle').classList.remove('dark');
      document.querySelector('header').classList.remove('dark');
    }
  } catch (err) {
    console.error(err);
  }
}

addDarkClassToHTML();
