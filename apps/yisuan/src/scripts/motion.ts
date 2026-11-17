import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 1080px)").matches;

function boot() {
  const root = document.documentElement;
  const loader = document.querySelector<HTMLElement>("[data-loader]");
  if (loader && root.classList.contains("booting") && !reduce) {
    const roll = loader.querySelector<HTMLElement>("[data-roll]");
    let step = 0;
    const timer = window.setInterval(() => {
      step += 1;
      if (roll) roll.style.transform = `translateY(${-step * 1.4}em)`;
      if (step >= 2) window.clearInterval(timer);
    }, 320);
    window.setTimeout(() => {
      loader.classList.add("is-done");
      root.classList.remove("booting");
      try {
        sessionStorage.setItem("ys-seen", "1");
      } catch {
        /* private mode */
      }
      window.setTimeout(() => loader.remove(), 650);
    }, 1400);
  } else {
    loader?.remove();
    root.classList.remove("booting");
  }

  const curtain = document.querySelector<HTMLElement>("[data-curtain]");
  if (curtain && !reduce && !root.classList.contains("booting")) {
    requestAnimationFrame(() => curtain.classList.add("is-open"));
    window.setTimeout(() => curtain.remove(), 900);
  } else {
    curtain?.remove();
  }

  const header = document.querySelector<HTMLElement>("[data-header]");
  let last = window.scrollY;
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      header?.classList.toggle("is-hide", y > last && y > 90);
      last = y;
    },
    { passive: true },
  );

  const menu = document.querySelector<HTMLElement>("[data-menu]");
  document.querySelector("[data-burger]")?.addEventListener("click", () => {
    const open = menu?.classList.toggle("is-open");
    document.body.style.overflow = open ? "hidden" : "";
  });

  const drawer = document.querySelector<HTMLElement>("[data-drawer]");
  const toggleDrawer = (open?: boolean) => {
    const next = open ?? !drawer?.classList.contains("is-open");
    drawer?.classList.toggle("is-open", next);
  };
  document.querySelectorAll("[data-open-contact]").forEach((node) => {
    node.addEventListener("click", (event) => {
      event.preventDefault();
      menu?.classList.remove("is-open");
      document.body.style.overflow = "";
      toggleDrawer(true);
    });
  });
  document.querySelector("[data-close-contact]")?.addEventListener("click", () => toggleDrawer(false));

  const search = document.querySelector<HTMLInputElement>("[data-faq-filter]");
  if (search) {
    const apply = () => {
      const q = search.value.trim().toLowerCase();
      document.querySelectorAll<HTMLElement>("[data-q]").forEach((item) => {
        item.hidden = q.length > 0 && !(item.dataset.q ?? "").toLowerCase().includes(q);
      });
    };
    const preset = new URLSearchParams(location.search).get("q");
    if (preset) search.value = preset;
    search.addEventListener("input", apply);
    apply();
  }

  const lens = document.querySelector<HTMLElement>("[data-lens]");
  const hole = lens?.querySelector<HTMLElement>("[data-hole]");
  const color = lens?.querySelector<HTMLElement>("[data-color]");
  if (lens && hole && color && fine && !reduce) {
    lens.addEventListener("mousemove", (event) => {
      const box = lens.getBoundingClientRect();
      const x = event.clientX - box.left;
      const y = event.clientY - box.top;
      hole.style.left = `${x}px`;
      hole.style.top = `${y}px`;
      color.style.transform = `translate(${-x + hole.clientWidth / 2}px, ${-y + hole.clientHeight / 2}px)`;
    });
  }

  if (reduce) return;

  if (fine) {
    const cursor = document.querySelector<HTMLElement>("[data-cursor]");
    if (cursor) {
      let cx = 0;
      let cy = 0;
      let tx = 0;
      let ty = 0;
      window.addEventListener("mousemove", (event) => {
        tx = event.clientX;
        ty = event.clientY;
        cursor.style.visibility = "visible";
        const hot = (event.target as HTMLElement | null)?.closest("[data-hot]");
        cursor.classList.toggle("is-violet", Boolean(hot));
      });
      const follow = () => {
        cx += (tx - cx) * 0.22;
        cy += (ty - cy) * 0.22;
        cursor.style.transform = `translate(${cx}px, ${cy}px)`;
        requestAnimationFrame(follow);
      };
      follow();
    }

    const preview = document.querySelector<HTMLElement>("[data-name-float]");
    const previewImg = preview?.querySelector("img");
    document.querySelectorAll<HTMLElement>("[data-name]").forEach((row) => {
      row.addEventListener("mouseenter", (event) => {
        const src = row.dataset.img;
        if (!preview || !previewImg || !src) return;
        previewImg.src = src;
        preview.classList.add("is-on");
        preview.style.left = `${event.clientX + 24}px`;
        preview.style.top = `${event.clientY - 40}px`;
      });
      row.addEventListener("mousemove", (event) => {
        if (!preview) return;
        preview.style.left = `${event.clientX + 24}px`;
        preview.style.top = `${Math.max(12, event.clientY - 40)}px`;
      });
      row.addEventListener("mouseleave", () => preview?.classList.remove("is-on"));
    });

    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ lerp: 0.09 });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    document.querySelectorAll<HTMLElement>("[data-x]").forEach((row) => {
      gsap.fromTo(
        row,
        { x: row.dataset.x || 0 },
        {
          x: 0,
          ease: "none",
          scrollTrigger: { trigger: row, start: "top 90%", end: "top 45%", scrub: true },
        },
      );
    });

    document.querySelectorAll<HTMLElement>("[data-float]").forEach((node) => {
      gsap.to(node, {
        y: "-28vh",
        ease: "none",
        scrollTrigger: { trigger: node.parentElement, start: "top bottom", end: "bottom top", scrub: true },
      });
    });

    document.querySelectorAll<HTMLElement>("[data-pin]").forEach((section) => {
      const track = section.querySelector<HTMLElement>("[data-track]");
      if (!track) return;
      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth + 48);
      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });
    });

    document.querySelectorAll<HTMLElement>("[data-drift]").forEach((node, index) => {
      gsap.to(node, {
        y: `${-18 - index * 10}vh`,
        ease: "none",
        scrollTrigger: { trigger: node.parentElement, start: "top bottom", end: "bottom top", scrub: true },
      });
    });
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.transform = "none";
            (entry.target as HTMLElement).style.opacity = "1";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    document.querySelectorAll<HTMLElement>("[data-x]").forEach((row) => {
      row.style.opacity = "0";
      row.style.transform = "translateY(24px)";
      row.style.transition = "opacity .6s ease, transform .6s ease";
      observer.observe(row);
    });
  }
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
