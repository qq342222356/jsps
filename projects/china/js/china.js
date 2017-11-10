{
    let img=document.querySelectorAll(".dat li");
    console.log(img);
    let dian=document.querySelectorAll(".lunbodian .dian");
    console.log(dian);
    let big=document.querySelector(".banner-img");
    // let dtu=document.querySelector(".dian");
    let lefts=document.querySelector(".banner-img .prev");
    let rights=document.querySelector(".banner-img .next");
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


{
    let jz = document.querySelector(".jingzhong");
    let jzxs = document.querySelector(".jz");
    let lbz = document.querySelectorAll(".lbz #lb");
    let fk = document.querySelectorAll("#liebiao a");
    let ck = document.querySelector(".tc");
    let left = document.querySelector("#huadong .huadong-box");
    let right = document.querySelector("#huadong .huadong-box1");
    let zt = document.querySelector(".yc");
    // let flg = true;
    console.log(ck);
    jz.onclick = function () {
        jzxs.style.display = "block";
    };
    fk.forEach(function (ele, index) {
        ele.onmouseover = function () {
            lbz[index].style.display = "block";
        };
        ele.onmouseout = function () {
            lbz[index].style.display = "none";
        }
    });
    let dir = "r";
    let now = 4;
    let time = setInterval(hdFn,4000);
    function hdFn() {
        if (dir === "r") {
            now++;
            ck.style.transition = "all 2s";
            ck.style.marginLeft = now * -295 + "px";
        }else if (dir === "l") {
            now--;
            ck.style.transition = "all 2s";
            ck.style.marginLeft = now * -295 + "px";
        }
    }
    ck.addEventListener("transitionend", function () {
        flg = true;
        if (now === 12) {
            now = 4;
            ck.style.transition = "none";
            ck.style.marginLeft = "-1180px";
        }
        if (now === 0) {
            now = 8;
            ck.style.transition = "none";
            ck.style.marginLeft = "-2360px";
        }
    });
    flg=true;
    left.onclick = function () {
        dir = "l";
        if (flg) {
            flg = false;
            hdFn();
        }
    };
    right.onclick = function () {
        dir = "r";
        if (flg) {
            flg = false;
            hdFn();
        }
    };
    zt.onmouseover = function () {
        clearInterval(time);
    };
    window.addEventListener("blur", function () {
        clearInterval(time);
    });
    zt.onmouseout = function () {
        time = setInterval(hdFn,4000);
    };
    window.addEventListener("focus", function () {
        time = setInterval(hdFn,4000);
    });
}


{
    let kh=document.querySelector(".dakh");
    let leftq=document.querySelector("#gg .prev");
    let rightq=document.querySelector("#gg .next");
    let qx=document.querySelector("#gg");
    let now=1;
    let st=setInterval(moves,3000);
    function moves(dir="r"){
        if(dir==="r"){
            now++;
            kh.style.marginLeft=now*-500+"px";
            if(now===5){
                now=1;
                kh.style.marginLeft=now*-500+"px";
            }
        }else if(dir==="l"){
            now--;
            kh.style.marginLeft=now*-500+"px";
            if(now===0){
                now=4;
                kh.style.marginLeft=now*-500+"px";
            }
        }
    }
    leftq.onclick=function () {
        dir="r";
        moves(dir);
    };
    rightq.onclick=function () {
        dir="l";
        moves(dir);
    };
    qx.onmouseover=function () {
        clearInterval(st);
    };
    qx.onmouseout=function () {
        st=setInterval(move,3000);
    }
}



