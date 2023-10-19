const settings = Object.freeze({
   nav: document.querySelector("nav"),
   mobileNav: document.querySelector("nav.mobile-nav"),
   menuIcon: document.querySelector(".menu-icon"),
   closeIcon: document.querySelector(".close-icon"),
   mobileMenuContainer: document.querySelector(".mobile-menu-container"),
   scrollThreshold: 60
});

window.addEventListener("scroll", () => {
    const { nav, mobileNav, scrollThreshold } = settings;

   if (window.scrollY > scrollThreshold) {
        nav.classList.add("scrolled");
        mobileNav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
        mobileNav.classList.remove("scrolled");
    }
});

settings.menuIcon.addEventListener("pointerdown", () => {
    const { mobileMenuContainer } = settings;

    mobileMenuContainer.classList.add("active");
})

settings.closeIcon.addEventListener("pointerdown", () => {
    const { mobileMenuContainer } = settings;

    mobileMenuContainer.classList.remove("active");
})
