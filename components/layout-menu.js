appMenu = `
  <div class="app-brand demo">
    <a href="#" class="app-brand-link" onclick="setCurrentPage('home')">
      <span class="app-brand-logo demo">
        ${getBrandLogo()}
      </span>
      <span class="app-brand-text demo menu-text fw-bolder ms-2">
		TrustedPay
	  </span>
    </a>
    <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
      <i class="bx bx-chevron-left bx-sm align-middle"></i>
    </a>
  </div>
  <div class="menu-inner-shadow"></div>
  <ul class="menu-inner py-1">
	<li><div class="dropdown-divider my-divider"></div></li>
    ${createMenuItem("Dashboard", "#", "bx bx-home", "home", true)}
    ${createMenuItem("Transactions", "#", "bx bx-wallet", "transactions")}
    ${createMenuItem("Cashout", "#", "bx bx-dollar-circle", "cashout")}
  	${createMenuItem("Verification", "#", "bx bx-badge-check", "verify")}
  	${createMenuItem("Notifications", "#", "bx bx-bell", "notifications")}
  	${createMenuItem("Profile", "#", "bx bx-user", "profile")}
    ${createMenuItem("Log Out", "#", "bx bx-power-off", "login")}
  </ul>
  <footer id="slider-footer" class="content-footer footer bg-footer-theme"></footer>
`;

document.getElementById("layout-menu").innerHTML = appMenu;
setActivePage();

/**
 * Creates a menu item HTML string.
 * @param {string} text - The text for the menu item.
 * @param {string} href - The link for the menu item.
 * @param {string} iconClass - The icon class for the menu item.
 * @param {string} page - Which page is being opened.
 * @param {boolean} isActive - Whether the menu item is active.
 * @returns {string} The menu item HTML string.
 */
function createMenuItem(text, href, iconClass, page, isActive = false) {
  const activeClass = isActive ? "active" : "";
  return `
    <li class="menu-item ${activeClass}" id="${page}">
      <a href="${href}" class="menu-link" onclick="setCurrentPage('${page}')">
        <i class="menu-icon tf-icons ${iconClass}"></i>
        <div data-i18n="${text}">${text}</div>
      </a>
    </li>
  `;
}

//Set active page on navigation/ layout menu
function setActivePage(){
	document.querySelector('.active').classList.remove('active');
	document.getElementById(currentPage).classList.add('active');
}
