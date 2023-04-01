export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((thisEvent) => {
        html.removeEventListener(thisEvent, handleOutsideClick);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((thisEvent) => {
      setTimeout(() => html.addEventListener(thisEvent, handleOutsideClick));
    });
    element.setAttribute(outside, '');
  }
}
