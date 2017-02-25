function logBundledModule(module) {
  return (
    '<script type="text/javascript">' +
    '  (function() { '+
    '    var module = ' + module.entry + '(' + module.id + ');' +
    '    console.log("Got module", module);' +
    '  })();' +
    '</script>'
  );
}

function includeBundle(src) {
  return '<script type="text/javascript" src=' + JSON.stringify('/' + src) + '></script>';
}

module.exports = {
  includeBundle,
  logBundledModule,
}
