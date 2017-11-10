{

    let Top = document.querySelector("#fh");
    let by=document.querySelector("body");
    Top.onclick = function(){
        document.documentElement.scrollTop = document.body.scrollTop =0;
    }

}

// {
//
//     let dingbu=document.querySelector(".tbyc");
//     let cel=document.querySelector(".cl");
//     let e=document.querySelectorAll(".e");
//     console.log(e);
//     let liebiao=document.querySelectorAll(".cl .content");
//     let zb=document.querySelector("#zhibo");
//    window.onscroll=function(){
//        let st=document.body.scrollTop===0? document.documentElement:document.body;
//        let obj=st.scrollTop;
//         if(obj>800){
//             dingbu.style.top="0";
//         }else{
//             dingbu.style.top="-40px";
//         }
//     };
//     window.addEventListener("scroll",function () {
//         let st=document.body.scrollTop===0? document.documentElement:document.body;
//         let obj=st.scrollTop;
//         if(obj>800){
//             cel.style.cssText="width:30px;height:180px";
//         }else{
//             cel.style.cssText="width:0;height:0";
//         }
//         for(let i=0;i<e.length;i++){
//             if(obj>e[i].offsetTop){
//                 for(let i=0;i<liebiao.length;i++){
//                     liebiao[i].classList.remove("active");
//                 }
//                    liebiao[i].classList.add("active");
//             }
//         }
//     });
//
//
//     console.log(liebiao);
//     window.addEventListener("scroll",function () {
//         let st=document.body.scrollTop===0? document.documentElement:document.body;
//         let obj=st.scrollTop;
//         liebiao.forEach(function(ele,index) {
//             ele.onclick=function () {
//                 let ot=e[index].offsetTop;
//                animate(st,{scrollTop:ot - 60},1000);
//             }
//         })
//     });
//
//
//
//
// }
let obj;
    let cl=document.querySelector(".cl");
    let ceh=document.querySelectorAll(".cl .content");
    let neirong=document.querySelectorAll(".e");
    let fc=document.querySelector(".tbyc");
    console.log(neirong);
{
    window.onscroll=function () {
    let obj=document.body.scrollTop===0?document.documentElement:document.body;
    let st=obj.scrollTop;
    if(st>500){
        cl.style.cssText="width:33px;height:250px";
    }else{
        cl.style.cssText="width:0;height:0";
    };
        window.addEventListener("scroll",function () {
            let obj=document.body.scrollTop===0?document.documentElement:document.body;
            let st=obj.scrollTop;
            for (let i = 0; i < neirong.length; i++) {
                if (st >= neirong[i].offsetTop) {
                    // console.log(neirong[i].offsetTop);
                    for (let i = 0; i < ceh.length; i++) {
                        ceh[i].classList.remove("active");
                    }
                    ceh[i].classList.add("active");
                }
            }
        });
    if(st>500){
        fc.style.top="0";
    }else{
        fc.style.top="-40px";
    };
    window.addEventListener("scroll",function () {
        ceh.forEach(function(ele,index){
            ele.onclick=function () {
                let ot=neirong[index].offsetTop;
                animate(obj,{scrollTop:ot - 60},500);
            }
        })
    })

    }
}

{
    window.addEventListener("scroll",function () {
        let obj=document.body.scrollTop===0?document.documentElement:document.body;
        let st=obj.scrollTop;
        for(let i=0;i<neirong.length;i++){
            if(st>neirong[i].offsetTop-window.innerHeight){
                let imgs=neirong[i].querySelectorAll("img");
                for(let i=0;i<imgs.length;i++){
                    imgs[i].src=imgs[i].getAttribute("data-src");
                }
            }
        }
    })




}