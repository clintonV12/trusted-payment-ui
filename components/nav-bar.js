// Define the HTML for the layout menu toggle
layoutMenuToggleHtml = `
    <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
            <i class="bx bx-menu bx-sm my-menu-toggle"></i>
        </a>
    </div>
`;

// Define the HTML for the search bar
searchBarHtml = `
    <a href="#" style="color:#fff" class="navbar-nav align-items-center" onclick="setCurrentPage('${currentPage}')">
        <div class="nav-item d-flex align-items-center">
            <i class="bx bx-refresh fs-4 lh-0"></i>
        </div>
    </a>
`;

// Define the HTML for the user dropdown
userDropdownHtml = `
    <li class="nav-item navbar-dropdown dropdown-user dropdown">
        <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
            <div class="avatar avatar-online">
                <img src="assets/img/avatars/1.jpg" alt class="w-px-40 h-auto rounded-circle" />
            </div>
        </a>
        <ul class="dropdown-menu dropdown-menu-end">
            <li>
                <a class="dropdown-item" href="#" onclick="setCurrentPage('profile')">
                    <div class="d-flex">
                        <div class="flex-shrink-0 me-3">
                            <div class="avatar avatar-online">
                                <img src="assets/img/avatars/1.jpg" alt class="w-px-40 h-auto rounded-circle" />
                            </div>
                        </div>
                        <div class="flex-grow-1">
                            <span class="fw-semibold d-block">${LOGGED_IN_PHONE}</span>
                            <small class="text-muted">Online</small>
                        </div>
                    </div>
                </a>
            </li>
            <li><div class="dropdown-divider my-divider"></div></li>
            <li>
				<a class="dropdown-item" href="#" onclick="setCurrentPage('profile')">
					<i class="bx bx-user me-2"></i><span class="align-middle">My Profile</span>
				</a>
			</li>
            <li>
                <a class="dropdown-item" href="#" onclick="setCurrentPage('notifications')">
                    <span class="d-flex align-items-center align-middle">
                        <i class="flex-shrink-0 bx bx-bell me-2"></i>
                        <span class="flex-grow-1 align-middle">Notifications</span>
                        <span class="flex-shrink-0 badge badge-center rounded-pill bg-primary w-px-20 h-px-20">${INBOX}</span>
                    </span>
                </a>
            </li>
            <li><div class="dropdown-divider my-divider"></div></li>
            <li>
				<a class="dropdown-item" href="#" onclick="logout()">
					<i class="bx bx-power-off me-2"></i>
					<span class="align-middle">Log Out</span>
				</a>
			</li>
        </ul>
    </li>
`;

// Define the complete navbar HTML
appNavBarHtml = `
    ${layoutMenuToggleHtml}
    <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
        <!-- Search -->
        ${searchBarHtml}
        <!-- /Search -->

        <ul class="navbar-nav flex-row align-items-center ms-auto">
            <!-- User -->
            ${userDropdownHtml}
            <!--/ User -->
        </ul>
    </div>
`;

// Inject the navbar HTML into the element with the ID 'layout-navbar'
document.getElementById("layout-navbar").innerHTML = appNavBarHtml;
