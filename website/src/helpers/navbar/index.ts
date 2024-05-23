export function hideOnScroll(navbar: HTMLDivElement) {
    let previousScroll = window.scrollY;
    window.addEventListener("scroll", () => {
      let currentScroll = window.scrollY;
  
      if (navbar) {
        if (previousScroll >= currentScroll) {
          navbar.style.top = "0";
        } else {
          navbar.style.top = "-100px";
        }
      }
  
      previousScroll = currentScroll;
    });
  }