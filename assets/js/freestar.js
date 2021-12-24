var freestar = freestar || {};

freestar.hitTime = Date.now();
freestar.queue = freestar.queue || [];
freestar.config = freestar.config || {};
freestar.debug =
  window.location.search.indexOf('fsdebug') === -1 ? false : true;
freestar.config.enabled_slots = [];

!(function (a, b) {
  var c = b.getElementsByTagName('script')[0],
    d = b.createElement('script'),
    e = 'https://a.pub.network/minehut-com';
  (e += freestar.debug ? '/qa/pubfig.min.js' : '/pubfig.min.js'),
    (d.async = !0),
    (d.src = e),
    c.parentNode.insertBefore(d, c);
})(window, document);

freestar.initCallback = function () {
  freestar.config.enabled_slots.length === 0
    ? (freestar.initCallbackCalled = false)
    : freestar.newAdSlots(freestar.config.enabled_slots);
};
