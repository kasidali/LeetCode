/**
 * Created by kasidali on 2017/5/6.
 */
var reverse = function(x) {
    var res = 0;
    while(x){
        res = res*10 +x%10;
        x = parseInt(x/10);
    }
    if(res> Math.pow(2,31) || -res>Math.pow(2,31)){
        res = 0;
    }
    return res;
};