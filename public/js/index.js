(function () {
  const lsThemeKey = 'theme';
  const lightThemeValue = 'light';
  const darkThemeValue = 'dark';
  const btnId = 'btn-theme';
  const iconId = 'icon-theme';
  const lightThemeIcon = 'fa-sun';
  const darkThemeIcon = 'fa-moon';

  function setThemeToLS(themeValue) {
    localStorage.setItem(lsThemeKey, themeValue);
  }

  function updateCssToLightTheme() {
    const root = document.querySelector(':root');
    const style = getComputedStyle(root);

    root.style.setProperty('--colors-text', style.getPropertyValue('--light-colors-text'));
    root.style.setProperty('--colors-page-bg', style.getPropertyValue('--light-colors-page-bg'));
    root.style.setProperty('--colors-project-card-bg', style.getPropertyValue('--light-colors-project-card-bg'));
    root.style.setProperty('--colors-user-card-bg', style.getPropertyValue('--light-colors-user-card-bg'));
    root.style.setProperty('--colors-user-image-bg-top', style.getPropertyValue('--light-colors-user-image-bg-top'));
    root.style.setProperty('--colors-user-image-bg-bottom', style.getPropertyValue('--light-colors-user-image-bg-bottom'));
    root.style.setProperty('--colors-user-tag', style.getPropertyValue('--light-colors-user-tag'));
    root.style.setProperty('--colors-user-tag-shadow', style.getPropertyValue('--light-colors-user-tag-shadow'));

    root.style.setProperty('--svg-user-card-border', style.getPropertyValue('--light-svg-user-card-border'));
  }

  function updateCssToDarkTheme() {
    const root = document.querySelector(':root');
    const style = getComputedStyle(root);

    root.style.setProperty('--colors-text', style.getPropertyValue('--dark-colors-text'));
    root.style.setProperty('--colors-page-bg', style.getPropertyValue('--dark-colors-page-bg'));
    root.style.setProperty('--colors-project-card-bg', style.getPropertyValue('--dark-colors-project-card-bg'));
    root.style.setProperty('--colors-user-card-bg', style.getPropertyValue('--dark-colors-user-card-bg'));
    root.style.setProperty('--colors-user-image-bg-top', style.getPropertyValue('--dark-colors-user-image-bg-top'));
    root.style.setProperty('--colors-user-image-bg-bottom', style.getPropertyValue('--dark-colors-user-image-bg-bottom'));
    root.style.setProperty('--colors-user-tag', style.getPropertyValue('--dark-colors-user-tag'));
    root.style.setProperty('--colors-user-tag-shadow', style.getPropertyValue('--dark-colors-user-tag-shadow'));

    root.style.setProperty('--svg-user-card-border', style.getPropertyValue('--dark-svg-user-card-border'));
  }

  function toggleTheme(theme) {
    if (theme === lightThemeValue) {
      return darkThemeValue;
    }
    return lightThemeValue;
  }

  function setThemeToStyle(theme) {
    if (theme === lightThemeValue) {
      // Set light theme css vars
      updateCssToLightTheme();
    } else {
      // Set dark theme css vars
      updateCssToDarkTheme();
    }
  }

  function setThemeIcon(theme) {
    if (theme === lightThemeValue) {
      document.getElementById(iconId).classList.replace(lightThemeIcon, darkThemeIcon);
    } else {
      document.getElementById(iconId).classList.replace(darkThemeIcon, lightThemeIcon);
    }
  }

  function changeTheme() {
    const btn = document.getElementById(btnId);
    const theme = btn.dataset.theme;

    const newTheme = toggleTheme(theme);

    btn.dataset.theme = newTheme;
    setThemeToStyle(newTheme);
    setThemeIcon(newTheme);
    setThemeToLS(newTheme);
  }

  function loadTheme() {
    const btn = document.getElementById(btnId);
    let theme = localStorage.getItem(lsThemeKey);

    if (theme == null) {
      theme = btn.dataset.theme;

      setThemeToLS(theme);
      return;
    }

    btn.dataset.theme = theme;
    setThemeToStyle(theme);
    setThemeIcon(theme);
  }

  document.getElementById(btnId).addEventListener("click", changeTheme);
  loadTheme();
})();