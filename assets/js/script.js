let preferedColorMode = localStorage.getItem('colorMode');
console.log(preferedColorMode);

if (!preferedColorMode) {
    const prefersLightTheme = window.matchMedia("(prefers-color-scheme: light)");
    if (prefersLightTheme.matches) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    }
} else {
    if (preferedColorMode === 'dark') {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    }
}




document.querySelector('#switcherLightMode').addEventListener('click', () => {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem('colorMode','light');
    console.log(localStorage.getItem('colorMode'));
});

document.querySelector('#switcherDarkMode').addEventListener('click', () => {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    localStorage.setItem('colorMode','dark');
    console.log(localStorage.getItem('colorMode'));
})