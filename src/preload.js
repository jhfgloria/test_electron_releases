init();

function init() {
  window.desktopIntegration = { a: 1 };
  // window.desktopIntegration = {
  //   attach objects or functions to window
  // };
  attachIPCListeners();
}

function attachIPCListeners() {
  // attach all IPC listeners to window
  // ipc.on('randomMessage', () => {
  //   window.desktopIntegration.randomCallback();
  // });
}