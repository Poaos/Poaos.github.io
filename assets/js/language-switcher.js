(function () {
  var switcher = document.querySelector('.language-switcher');
  if (!switcher) return;

  var links = switcher.querySelectorAll('a[data-language-url]');
  var sections = document.querySelectorAll('.page__content #about-me, .page__content h1[id]');
  var masthead = document.querySelector('.masthead');
  var scheduled = false;

  function updateLinks() {
    var current = '';
    var offset = masthead.getBoundingClientRect().bottom + 24;

    // Both translations share section IDs, including the existing English anchors.
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top > offset) break;
      current = sections[i].id;
    }

    for (var j = 0; j < links.length; j++) {
      links[j].href = links[j].getAttribute('data-language-url') +
        (current ? '#' + encodeURIComponent(current) : '');
    }
    scheduled = false;
  }

  function scheduleUpdate() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(updateLinks);
  }

  switcher.addEventListener('click', updateLinks, true);
  switcher.addEventListener('focusin', updateLinks);
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('load', updateLinks);
  updateLinks();
}());
