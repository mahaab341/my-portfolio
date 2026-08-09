export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    // URL ko bina # ke update karenge (e.g., /projects)
    const newPath = id === 'home' ? '/' : `/${id}`;
    window.history.pushState({}, '', newPath);

    // Smooth scroll bhi hoga
    el.scrollIntoView({ behavior: 'smooth' });
  }
};