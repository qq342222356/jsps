    let content=document.querySelector(".content");
    let over=document.querySelector(".over");
    let qp=document.querySelector("canvas");
    let computer=document.querySelector(".computer");
    let agin=document.querySelector("#agin");
    let save=document.querySelector("#save");
    let zhez=document.querySelector(".zhezhao");
    let span=document.querySelector("span");
    let iscom=false;
    let zz=document.querySelector(".zhezhao1");
    let start=document.querySelector("#start");
    let start1=document.querySelector("#start1");
    let imgbox=document.querySelector(".imgbox");
    let download=document.querySelector("#download");
    let gn=document.querySelector(".gongneng");
    let gn1=document.querySelector(".gongneng1");
    let cv=qp.getContext("2d");
    let w=40;
    let dx={};
    let blank={};
    function j(x,y) {
        return x+"_"+y;
    }
    cv.beginPath();
    function line() {
        cv.clearRect(0,0,600,600);
        cv.save();
        cv.beginPath();
        cv.lineWidth=2;
        for(let i=1;i<14;i++){
            cv.moveTo(20,i*w+20);
            cv.lineTo(580,i*w+20);
            cv.moveTo(i*w+20,20);
            cv.lineTo(i*w+20,580);
        }
        cv.rect(0.5,0.5,599,599);
        cv.rect(20.5,20.5,559,559);
        cv.restore();
        cv.stroke();
    }
    line();
    function point(x,y) {
        cv.save();
        cv.translate(x*w+20,y*w+20);
        cv.beginPath();
        cv.arc(0,0,4,0,2*Math.PI);
        cv.fill();
        cv.restore();
        for (let i = 0; i < 15; i++) {
            for (let k = 0; k < 15; k++) {
                blank[j(i, k)] = true;
            }
        }
    };
    point(3,3);
    point(11,3);
    point(3,11);
    point(7,7);
    point(11,11);
    let num=0;
    start.onclick=function () {
        num++;
        gn.style.display="none";
        gn1.style.display="block";
        console.log(num);
        if(num%2===1){
        content.classList.add("show");
        start.value="暂停";
        if(num!==1) {
            zz.style.display = "block";
        }
        }else{
            start.value="开始游戏";
            zz.style.display="block";
        }
    };
    start1.onclick=function(){
        zz.style.display="none";
        start.value="暂停";
    };
    function chess(x,y,color) {
        cv.save();
        cv.fillStyle=color;
        cv.beginPath();
        cv.translate(x*w+20,y*w+20);
        cv.arc(0,0,15,0,2*Math.PI);
        cv.fill();
        cv.restore();
        dx[j(x,y)]=color;
        delete blank[j(x,y)];

    }
    let flag=true;
    qp.onclick=function (e) {
        let x=Math.round((e.offsetX-20)/w);
        let y=Math.round((e.offsetY-20)/w);
        let pos=newpos();
        console.log(pos);
        if(dx[j(x,y)]) {
            return;
        }
        if(flag){
            chess(x,y,"black");
            if(panduan(x,y,"black")===5){
                zhez.style.display="block";
                span.innerHTML="黑棋获胜"
            }
            if(iscom){
                let p=newpos();
                chess(p.x,p.y,"#fff");
                if(panduan(p.x,p.y,"#fff")===5){
                    zhez.style.display="block";
                    span.innerHTML="白棋获胜"
                }
                return;
            }
        }else{
            chess(x,y,"#fff");
            if(panduan(x,y,"#fff")===5){
                zhez.style.display="block";
                span.innerHTML="白棋获胜"
            }
        };
        flag=!flag;
        cv.restore();
        newpos();
    };
    function panduan(x,y,color) {
        let i=1;
        let row=1;
        while(dx[j(x+i,y)]===color){
            row++;
            i++;
        }
        i=1;
        while(dx[j(x-i,y)]===color){
            row++;
            i++;
        }
        let lie=1;
        i=1;
        while(dx[j(x,y+i)]===color){
            lie++;
            i++;
        }
        i=1;
        while(dx[j(x,y-i)]===color){
            lie++;
            i++;
        }
        let xie1=1;
        i=1;
        while(dx[j(x-i,y+i)]===color){
            xie1++;
            i++;
        }
        i=1;
        while(dx[j(x+i,y-i)]===color){
            xie1++;
            i++;
        }
        let xie2=1;
        i=1;
        while(dx[j(x+i,y+i)]===color){
            xie2++;
            i++;
        }
        i=1;
        while(dx[j(x-i,y-i)]===color){
            xie2++;
            i++;
        }
        console.log(row);
        console.log(lie);
        console.log(xie2);
        console.log(xie1);
        return Math.max(row,lie,xie1,xie2);
    }
    function newpos() {
        let max1=0;
        let pos1={};
        for (let i in blank){
            let x=parseInt(i.split("_")[0]);
            let y=parseInt(i.split("_")[1]);
            let length=panduan(x,y,"black");
            if(max1<length){
                max1=length;
                pos1={x,y};
            }
        }
        let max2=0;
        let pos2={};
        for (let i in blank){
            let x=parseInt(i.split("_")[0]);
            let y=parseInt(i.split("_")[1]);
            let length=panduan(x,y,"#fff");
            if(max2<length){
                max2=length;
                pos2={x,y};
            }
        }
        if(max1>max2){
            return pos1;
        }else{
            return pos2;
        }
        }
    computer.onfocus=function () {
        iscom=true;
    };
    over.onclick=function () {
        dx={};
        line();
        point();
        point(3,3);
        point(11,3);
        point(3,11);
        point(7,7);
        point(11,11);
    };
    agin.onclick=function () {
        content.classList.remove("show");
        content.classList.add("show");
        zhez.style.display="none";
        start.style.display="block";
        cv.clearRect(0,0,600,600);
        dx={};
        imgbox.innerHTML="";
        download.style.display="none";
        line();
        point(3,3);
        point(11,3);
        point(3,11);
        point(7,7);
        point(11,11);
    };

    let music=document.querySelector(".music");
    let audio=document.querySelector("audio");
    let kaiguan=true;
    music.onclick=function () {
        if(kaiguan){
            music.style.animationPlayState="paused";
            audio.pause();
        }else{
            music.style.animationPlayState="running";
            audio.play();
        }
        kaiguan=!kaiguan;
    };
    function setnum() {
        let n=1;
        for(let i in dx){
            let x=parseInt(i.split("_")[0]);
            let y=parseInt(i.split("_")[1]);
            cv.textAlign="center";
            cv.textBaseline="middle";
            cv.font="20px 微软雅黑";
            cv.save();
            if(dx[i]==="black"){
                cv.fillStyle="white";
            }else{
                cv.fillStyle="black";
            }
            cv.translate(x*w+20,y*w+20);
            cv.fillText(n++,0,0);
            cv.restore();
        }
    }
    save.onclick=function () {
        setnum();
        span.innerHTML="";
        imgbox.style.display="none";
        download.style.display="block";
        let url=qp.toDataURL();
        let newimg=new Image();
        newimg.src=url;
        imgbox.appendChild(newimg);
        download.href=url;
        download.setAttribute("download","棋谱.png")
    };　