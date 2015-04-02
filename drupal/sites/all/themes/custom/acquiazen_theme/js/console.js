// define a fake console.log if not defined
// avoid crashing browser with no console logging
if (typeof console == "undefined") {
  window.console = {
    log: function () {}
  };
}
