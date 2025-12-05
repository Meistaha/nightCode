const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const desc = document.getElementById("desc");
const tag = document.getElementById("tag");

const scrollZone = document.querySelector(".scroll-zone");

let currentIndex = 0;
let showingBg1 = true;

const slides = [
  {
    image: "img/6.jpg",
    tag: "Histoire",
    title: "Les stimulants",
    desc: "Toute histoire de reussite commence par difficultés."
  },
  {
    image: "img/2.jpg",
    tag: "Histoire",
    title: "L'injustice",
    desc: "nait de l'injustice ,se forge sous l'ombre d'empire et du roi."
  },
  {
    image: "img/13.jpg",
    tag: "Histoire",
    title: "Coupables",
    desc: "le silence devant l'injustice n'est jamais neutre ,il nourit la massacre."
  },
   {
    image: "img/4.jpg",
    tag: "Histoire",
    title: "La seul solution",
    desc: "Toutes reussite prend sa source dans le sacrifice.Il n'existe d'autre issue que la revolution"
  },
   {
    image: "img/8.jpg",
    tag: "Histoire",
    title: "La morale de l’histoire ",
    desc: "Cette expérience reste marquée comme un événement remarquable dans l’histoire, source d’inspiration pour de nombreuses autres révolutions. Et pour nous, ce n’est pas encore le moment de nous révolter contre l’injustice de notre époque?"
  },
   {
    image: "img/12.jpg",
    tag: "actuel",
    title: "Les enjeux de notre temps",
    desc: "À chaque époque, l’humanité souffre d’un nouveau tyran. Peut-être que notre forme d’asservissement aujourd’hui réside dans notre dépendance aux Big Tech, et que l’empereur n’a fait que changer de visage pour devenir ces géants technologiques."
  }
];
scrollZone.style.height = `${slides.length * 100}vh`;

bg1.style.backgroundImage = `url(${slides[0].image})`;

window.addEventListener("scroll", () => {

  const sectionTop = scrollZone.offsetTop;
  const sectionHeight = scrollZone.offsetHeight;
  const scrollPos = window.scrollY;

  if (scrollPos >= sectionTop && scrollPos <= sectionTop + sectionHeight) {

    const progress = (scrollPos - sectionTop) / sectionHeight;

    const index = Math.min(
      slides.length - 1,
      Math.floor(progress * slides.length)
    );

    if (index !== currentIndex) {

      const nextSlide = slides[index];
      if (showingBg1) {
        bg2.style.backgroundImage = `url(${nextSlide.image})`;
        bg2.style.opacity = 1;
        bg1.style.opacity = 0;
      } else {
        bg1.style.backgroundImage = `url(${nextSlide.image})`;
        bg1.style.opacity = 1;
        bg2.style.opacity = 0;
      }
      tag.innerText = nextSlide.tag;
      title.innerText = nextSlide.title;
      desc.innerText = nextSlide.desc;

      showingBg1 = !showingBg1;
      currentIndex = index;
    }
  }

});
