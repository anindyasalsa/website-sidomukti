function showSection(id) {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => sec.classList.remove("active"));

  document.getElementById(id).classList.add("active");

  const hero = document.getElementById("hero");
  if (hero) {
    hero.style.display = (id === "home") ? "flex" : "none";
  }

  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => link.classList.remove("active"));

  const activeLink = document.querySelector(`nav a[href="#${id}"]`);
  if (activeLink) activeLink.classList.add("active");
}

const desa = ["Sidomukti", "Krandegan", "Geblog", "Kluwihan", "Tegalsari", "Gerpetung"];

const laki = [899, 236, 412, 742, 540, 239];
const perempuan = [864, 220, 408, 696, 478, 241];

new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels: desa,
    datasets: [
      {
        label: "Laki-laki",
        data: laki,
        backgroundColor: "rgba(54, 162, 235, 0.7)"
      },
      {
        label: "Perempuan",
        data: perempuan,
        backgroundColor: "rgba(255, 99, 132, 0.7)"
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});

const totalLaki = laki.reduce((a, b) => a + b, 0);
const totalPerempuan = perempuan.reduce((a, b) => a + b, 0);

new Chart(document.getElementById("pieChart"), {
  type: "pie",
  data: {
    labels: ["Laki-laki", "Perempuan"],
    datasets: [
      {
        data: [totalLaki, totalPerempuan],
        backgroundColor: [
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 99, 132, 0.7)"
        ]
      }
    ]
  },
  options: {
    responsive: true
  }
});

const slides = document.querySelector('.slides');

slides.addEventListener('mouseover', () => {
  slides.style.animationPlayState = 'paused';
});
slides.addEventListener('mouseout', () => {
  slides.style.animationPlayState = 'running';
});


  let currentSlide = 0;
  const slide = document.querySelectorAll(".hero-slide");

  function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  setInterval(showNextSlide, 4000); 

  