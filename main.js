


function smoothscroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    lerp: 0.045,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

smoothscroll();

var tl = gsap.timeline();
gsap.set(".realimg",{
  top:'45%',
  left:'51%',
  transform:"translate(-50%,-50%) scale(0)"
})
gsap.to(".realimg",{
  scale:1,
  width:"275px",
  height:'400px',
  stagger:0.2,
  duration:1,
  delay:0.8,
  ease:'power3.Out',
})

tl.from("p",{
  duration:1,
  stagger:0.3,
  delay:0.5,
  y:65,
  opacity:0,
  ease:"power4.inOut"
  })
tl.to("#loader-box",{
  y:0,
})
gsap.to("#main",{
  position:"fixed",
  duration:4,
})
tl.to("#pre-loader",{
  y:"-100%",
  ease:"power3.inOut",
  duration:2,
},"+=1")
tl.to("#main",{
  position:"static",
})

tl.from("#logo,#effect1 ,#effect2,#effect3,#effect4,.hamburger", {
  y: -100,
  duration: 1, 
  opacity: 0,
  stagger: 0.1,
});
tl.from("#move", {
  y: 80,
  duration: 0.8,
  opacity: 0,
});
gsap.from("#move1", {
  y: 80,
  duration: 1,
  delay: 0.7,
  opacity: 0,
  scrollTrigger: {
    trigger: "#move1",
    scroller: "#main",
    scrub: 1,
    start: "top 40%",
    end: "top 60%",
    pin: true,
  },
});
gsap.from("#move2", {
  y: 80,
  duration: 1,
  delay: 0.7,
  opacity: 0,
  scrollTrigger: {
    trigger: "#move2",
    scrub: 1,
    scroller: "#main",
    start: "top 40%",
    end: "top 60%",
    pin: true,
  },
});

function effect1() {
  var effect1 = document.querySelector("#effect1");
  effect1.addEventListener("mouseenter", function (dets) {
    gsap.to("#effect1 #hover", {
      duration: 0.5,
      backgroungcolor: "#000",
      y: "-2vw",
    });
  });
  effect1.addEventListener("mouseleave", function (dets) {
    gsap.to("#effect1 #hover", {
      duration: 0.3,
      backgroungcolor: "#000",
      y: "0",
    });
  });

  //effect for phone
  var menueffect1 = document.querySelector("#menueffect1");
  menueffect1.addEventListener("mouseenter", function (dets) {
    gsap.to("#menueffect1 #hover", {
      duration: 0.3,
      backgroungcolor: "#000",
      y: "-25px",
    });
  });
  menueffect1.addEventListener("mouseleave", function (dets) {
    gsap.to("#menueffect1 #hover", {
      duration: 0.3,
      backgroungcolor: "#000",
      y: "0",
    });
  });
 
}

function effect2() {
  var effect2 = document.querySelector("#effect2");
  effect2.addEventListener("mouseenter", function (dets) {
    gsap.to("#effect2 #hover2", {
      duration: 0.3,
      backgroungcolor: "#000",
      y: "-2vw",
    });
  });
  effect2.addEventListener("mouseleave", function (dets) {
    gsap.to("#effect2 #hover2", {
      duration: 0.3,
      backgroungcolor: "#000",
      y: "0",
    });
  });

  //effect for phone
  var menueffect2 = document.querySelector("#menueffect2");
  menueffect2.addEventListener("mouseenter", function (dets) {
    gsap.to("#menueffect2 #hover2", {
      duration: 0.3,
      backgroungcolor: "#000",
      y: "-25px",
    });
  });
  menueffect2.addEventListener("mouseleave", function (dets) {
    gsap.to("#menueffect2 #hover2", {
      duration: 0.3,
      backgroungcolor: "#000",
      y: "0",
    });
  });
}

function effect3() {
  var effect3 = document.querySelector("#effect3");
  effect3.addEventListener("mouseenter", function (dets) {
    gsap.to("#effect3 #hover3", {
      duration: 0.3,
      backgroungcolor: "#000",
      y: "-2vw",
    });
  });
  effect3.addEventListener("mouseleave", function (dets) {
    gsap.to("#effect3 #hover3", {
      duration: 0.3,
      backgroungcolor: "#000",
      y: "0",
    });
  });

  //effect for phone
  var menueffect3 = document.querySelector("#menueffect3");
  menueffect3.addEventListener("mouseenter", function (dets) {
    gsap.to("#menueffect3 #hover3", {
      duration: 0.3,
      backgroungcolor: "#000",
      y: "-25px",
    });
  });
  menueffect3.addEventListener("mouseleave", function (dets) {
    gsap.to("#menueffect3 #hover3", {
      duration: 0.3,
      backgroungcolor: "#000",
      y: "0",
    });
  });
}

function effect4() {
  var effect4 = document.querySelector("#effect4");
  effect4.addEventListener("mouseenter", function (dets) {
    gsap.to("#effect4 #hover4", {
      duration: 0.3,
      backgroungcolor: "#000",
      y: "-2vw",
    });
  });
  effect4.addEventListener("mouseleave", function (dets) {
    gsap.to("#effect4 #hover4", {
      duration: 0.3,
      backgroungcolor: "#000",
      y: "0",
    });
  });

  //effect for phone
  var menueffect4 = document.querySelector("#menueffect4");
  menueffect4.addEventListener("mouseenter", function (dets) {
    gsap.to("#menueffect4 #hover4", {
      duration: 0.3,
      backgroungcolor: "#000",
      y: "-25px",
    });
  });
  menueffect4.addEventListener("mouseleave", function (dets) {
    gsap.to("#menueffect4 #hover4", {
      duration: 0.3,
      backgroungcolor: "#000",
      y: "0",
    });
  });
}
effect1();
effect2();
effect3();
effect4();
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#menu");
const nav=document.querySelector("#nav")
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  nav.classList.toggle("active");

});

var Emblem = {
  init: function (el, str) {
    var element = document.querySelector(el);
    var text = str ? str : element.innerHTML;
    element.innerHTML = "";
    for (var i = 0; i < text.length; i++) {
      var letter = text[i];
      var span = document.createElement("span");
      var node = document.createTextNode(letter);
      var r = (360 / text.length) * i;
      var x = (Math.PI / text.length).toFixed(0) * i;
      var y = (Math.PI / text.length).toFixed(0) * i;
      span.appendChild(node);
      span.style.webkitTransform =
        "rotateZ(" + r + "deg) translate3d(" + x + "px," + y + "px,0)";
      span.style.transform =
        "rotateZ(" + r + "deg) translate3d(" + x + "px," + y + "px,0)";
      element.appendChild(span);
    }
  },
};

