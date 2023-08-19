var center=document.querySelector("#centerbox")
var btn=document.querySelector("#button")
var arrow=document.querySelector(".ri-arrow-up-fill")
var a=0
btn.addEventListener("click",function(){
    if(a==0)
    {
        center.style.top="-8%"
        btn.style.top="-1%"
        arrow.style.transform="rotate(180deg)"
        a=1
    }
    else
    {
        center.style.top="0%"
        btn.style.top="6%"
        arrow.style.transform="rotate(0)"
        a=0
    }
})

var swiper=document.querySelector(".swiper")
var scrl=document.querySelector("#scroll")
swiper.addEventListener("mouseenter",function(){
  scrl.style.scale=1
})

swiper.addEventListener("mouseleave",function(){
  scrl.style.scale=0
})

swiper.addEventListener("mousemove",function(dets){
  scrl.style.left=`${dets.x-45}px`
  scrl.style.top=`${dets.y-20}px`
})

var swiper = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });


  var swiper = new Swiper(".mySwiper6", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });




  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("body"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "body" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("body", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("body").style.transform ? "transform" : "fixed"
});





