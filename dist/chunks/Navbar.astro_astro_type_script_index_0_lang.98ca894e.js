const t=document.querySelector("nav");"sticky"in t.dataset&&new IntersectionObserver(([e])=>e.target.classList.toggle("sticked",e.intersectionRatio<1),{threshold:[1]}).observe(t);
