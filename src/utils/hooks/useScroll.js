export default function useScroll() {
  return (path) => {
    let currentLocation = path || window.location.href;
    const hasHash = currentLocation.includes('/#');
    if (hasHash) {
      const elementId = `${currentLocation.substring(
        currentLocation.indexOf('#') + 1
      )}`;
      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView({
          block: 'center',
          behavior: 'smooth',
        });
      }
    }
  };
}
