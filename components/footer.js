// Function to generate the footer HTML content
function generateFooter() {
  const currentYear = new Date().getFullYear();
  const links = [
    { href: "#", text: "T's & C's" },
    { href: "#", text: "Support" }
  ];

  const linksHtml = links.map(link => `<a href="${link.href}" target="_blank" class="footer-link me-4">${link.text}</a>`).join('');

  return `
    <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
      <div class="mb-2 mb-md-0">
        &copy; ${currentYear}<!--, designed by
        <a href="#" target="_blank" class="footer-link fw-bold">Buciko Codes (Pty) Ltd</a>-->
      </div>
      <div>
        ${linksHtml}
      </div>
    </div>
  `;
}

function generateSliderFooter() {
  return `
    <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
      <div class="mb-2 mb-md-0">
        Designed by
        <a href="#" target="_blank" class="footer-link fw-bold">Buciko Codes (Pty) Ltd</a>
      </div>
    </div>
  `;
}

// Insert the generated footer HTML into the element with the ID 'footer'
document.getElementById("footer").innerHTML = generateFooter();
document.getElementById("slider-footer").innerHTML = generateSliderFooter();
