const route = (event) => {
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: "/pages/404",
  "/": "/pages/home",
  "/login": "/pages/login",
  "/register": "/pages/register",
};

const loadNavbar = async () => {
  const navbarHtml = await fetch("../components/navbar").then((data) =>
    data.text()
  );
  document.getElementById("navbar").innerHTML = navbarHtml;
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("inner-sections").innerHTML = html;
  if (path !== "/login" || path !== "/register") {
    loadNavbar();
  }
};

window.onpopstate = handleLocation;
window.route = route;

if (window.location.pathname !== "/login" && window.location.pathname !== "/register") {
    loadNavbar();
}
handleLocation();
