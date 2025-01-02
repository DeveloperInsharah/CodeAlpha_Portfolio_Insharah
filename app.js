function homePageAnimation(){
    gsap.set(".slidesm" , {scale : 5})

var tl = gsap.timeline({
        scrollTrigger : {
            trigger : ".home",
            start : "top top",
            end : "bottom bottom",
            scrub : 1
        }
})

tl
.to(".vdodiv" ,
    {"--clip" : "0%" ,
        ease : Power2
    },'a'
)
.to(".slidesm" ,
    { scale : 1 ,
    ease : Power2
    },'a'
)
.to(".lft" ,
    { xPercent : -5 ,
    stagger : .03,
    ease : Power4
    },'b'  
)
.to(".rgt" ,
    { xPercent : 2 ,
    stagger : .03,
    ease : Power4,
    },'b'  
)

}
function realPageAnimation(){
    gsap.to(".slide" , {
        scrollTrigger : {
            trigger : ".real",
            start : "top top",
            end : "bottom bottom",
            scrub : 1,
        },
        xPercent : -200,
        ease : Power4,
    
    })
}
function paraAnimation(){
    
var clutter = "";
document.querySelector(".imp")
.textContent.split("")
.forEach(function(l){
    if(l == " ") clutter += `<span>&nbsp;</span>`
    clutter += `<span>${l}</span>`
})
document.querySelector(".imp").innerHTML = clutter

gsap.set(".imp span",{opacity:.1})
gsap.to(".imp span" , {
    scrollTrigger :{
        trigger : ".left",
        start : "top 60%",
        end : "bottom 90%",
        scrub : .2 ,
    },
    opacity: 1,
    stagger : .03,
    ease : Power4
})

}
function bodyAnimation(){
    document.querySelectorAll(".section")
.forEach(function(e){
    ScrollTrigger.create({
        trigger : e,
        start : "top 50%",
        end : "bottom 50%",
        onEnter : function(){
            document.body.setAttribute("theme" , e.dataset.color)
        },
        onEnterBack : function(){
            document.body.setAttribute("theme" , e.dataset.color)
        },
    })
})
}
var typed = new Typed('#element', {
    strings: [' Graphic Designer', 'MS Office Specialist' , 'Front-End Developer'],
    typeSpeed: 80,
  });
homePageAnimation();
realPageAnimation();
paraAnimation();
bodyAnimation();