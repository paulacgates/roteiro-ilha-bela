function showMainContent() {
    divMainContent.classList.remove("invisible");
    divStart.classList.add("invisible");
}

const tabLinks = document.querySelectorAll(".nav-link");

tabLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    tabLinks.forEach((tab) => tab.classList.remove("active"));

    link.classList.add("active");

    const tabId = link.getAttribute("href");

    const tabContents = document.querySelectorAll(".tab-pane");
    tabContents.forEach((content) =>
      content.classList.remove("show", "active")
    );

    const activeTabContent = document.querySelector(tabId);
    activeTabContent.classList.add("show", "active");
    activeTabContent.classList.remove("invisible");
  });
});

