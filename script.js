function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Optional: Close modal when clicking outside of it
window.onclick = function (event) {
  document.querySelectorAll('.modal').forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};

// Nav Menu
function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('show');
}

// Projects Search Bar
function filterAllProjects(value) {
  const cards = document.querySelectorAll(".projects-grid .card");
  value = value.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const tags = Array.from(card.querySelectorAll(".tags span")).map(tag => tag.textContent.toLowerCase());
    const match = title.includes(value) || tags.some(tag => tag.includes(value));
    card.style.display = match ? "block" : "none";
  });
}

