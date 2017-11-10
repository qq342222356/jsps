//设置cookie  time:毫秒数  key:键(调用名)  val:值  time:过期时间
//第一种方式
function setCookie(key, val, time) {
    if (time) {
        let date = new Date();
        date.setTime(date.getTime() + time);
        document.cookie = key + "=" + val + "; expires =" + date.toGMTString();
    } else {
        document.cookie = key + "=" + val;
    }
}
//第二种方式
function setCookie2(key, val, time) {
    if (time === undefined) {                                                      //判断是否设置时间
        document.cookie = key + "=" + val;                                         //设置cookit键和键值
    } else {
        let date = new Date();                                                    //获取当前时间
        date.setTime(date.getTime() + time);                                       //设置登陆时间
        document.cookie = key + "=" + val + "; expires =" + date.toGMTString();    //设置cookie显示时间
    }
}
//获取cookie
function getCookie(key) {
    let arr = document.cookie.split("; ");            //拆分cookie为arr数组
    for (let i = 0; i < arr.length; i++) {           //遍历arr数组
        let newarr = arr[i].split("=");              //拆分arr[i]为newarr数组
        if (newarr[0] === key) {                     //判断newarr[0]是否等于键(调用名)
            return newarr[1];                        //真值返回newarr数组的下标是“1”的值
        }
    }
    return null;                                   //循环完成后，假值返回null
}
//删除cookie
function delCookie(key) {
    let date = new Date();                    //获取当前时间
    date.setTime(date.getTime() - 1000);       //设置当前时间的前一秒
    document.cookie = key + "=;expires =" + date.toGMTString();   //设置过期时间
}