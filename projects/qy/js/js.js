/**
 * Created by Administrator on 2017/11/9.
 */
{
    let img=document.querySelectorAll("#bnner");
    console.log(img);
    let dian=document.querySelectorAll(".lunbodian .dian");
    console.log(dian);
    let big=document.querySelector(".tupianqv");
    // let dtu=document.querySelector(".dian");
    let lefts=document.querySelector(".tupianqv .prev");
    let rights=document.querySelector(".tupianqv .next");
    console.log(rights);
    let now=0;
    let z=20;
    let dir;
    let flag;
    let time=setInterval(movew,3000);
    function movew(dir="r") {
        if(dir==="r"){
            img[now].classList.add("leftOut");
            dian[now].classList.remove("active");
            now++;
            if(now===img.length){
                now=0;
            }
            img[now].classList.add("rightIn");
            dian[now].classList.add("active");
            img[now].style.zIndex=z++;
        }else if(dir==="l"){
            img[now].classList.add("rightOut");
            dian[now].classList.remove("active");
            now--;
            if(now===-1){
                now=img.length-1;
            }
            img[now].classList.add("leftIn");
            dian[now].classList.add("active");
            img[now].style.zIndex=z++;
        }
    }
    img.forEach(function(ele,index){
        ele.addEventListener("animationend",function () {
            flag=true;
            ele.className="";
        })
    });
    big.onmouseover=function () {
        clearInterval(time);
    };
    window.addEventListener("onblur",function () {
        clearInterval(time);
    });
    big.onmouseout=function () {
        time=setInterval(movew,3000);
    };
    window.addEventListener("onfocus",function () {
        time=setInterval(movew,3000);
    });
    dian.forEach(function(ele,index) {
        ele.onclick=function () {
            if(flag){
                flag=false;
                if(now<index){
                    img[now].classList.add("leftOut");
                    img[index].classList.add("rightIn");
                }else if(now>index){
                    img[now].classList.add("rightOut");
                    img[index].classList.add("leftIn");
                }
                img[index].style.zIndex=z++;
                dian[index].classList.add("active");
                dian[now].classList.remove("active");
                now=index;
            }
        }
    });
    flg=true;
    lefts.onclick=function () {
        dir="l";
        if(flag){
            flag=false;
            movew(dir);
        }
    };
    rights.onclick=function () {
        dir="r";
        if(flag){
            flag=false;
            movew(dir);
        }
    };
}