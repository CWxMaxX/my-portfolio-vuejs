export const scrollToId = (navId) => {
    const aboutSection = document.getElementById(navId)
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: 'smooth'
      })
    }
  }