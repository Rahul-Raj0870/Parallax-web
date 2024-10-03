window.onscroll = () => {
   
    document.querySelector(".cloud").style.filter = `blur(${(scrollY / 70)}px)`;

    
    document.querySelector(".mon1").style.marginLeft = `${Math.max(-scrollY / 1, -200)}px`;
    document.querySelector(".tree").style.marginTop = `${Math.max(-scrollY / 2, -200)}px`;
    document.querySelector(".mon2").style.marginLeft = scrollY/2 + "px";

    document.querySelector(".moon").style.left = `${-scrollY / 1 + 1000}px`;
    document.querySelector(".moon").style.transform = `rotate(${Math.max(-scrollY / 1, -180)}deg)`;
    document.querySelector(".moon").style.top = `${-scrollY / 97 + 140}px`;
 
    document.querySelector(".Home h1").style.marginTop = scrollY / 1.3 + "px";

    document.querySelector(".Home h1").style.opacity = (200 - scrollY) / 200;

}