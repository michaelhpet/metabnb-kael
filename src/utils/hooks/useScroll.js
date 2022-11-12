export default function useScroll() {
  return (path) => {
    let currentLocation = path || window.location.href;
    const hasHash = currentLocation.includes('/#');
    if (hasHash) {
      const elementId = currentLocation.slice(currentLocation.indexOf('#') + 1);
      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView({
          // block: 'center',
          behavior: 'smooth',
        });
      }
    } else {
      window.scrollTo(0, 0);
    }
  };
}
