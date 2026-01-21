const navBar = (function () {
  function show() {
    const mobileNavBar = document.querySelector("#mobileNav");
    if (mobileNavBar) mobileNavBar.showModal();
  }
  function close() {
    const mobileNavBar = document.querySelector("#mobileNav");
    if (mobileNavBar) mobileNavBar.close();
  }

  return {
    show,
    close,
  };
})();

export default navBar;
