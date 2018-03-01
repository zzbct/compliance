/*判断对象对等性,相等返回true*/
function deepDiff (obj1, obj2) {
    var o1 = obj1 instanceof Object;
    var o2 = obj2 instanceof Object;
    if(!o1 || !o2){/*  判断不是对象  */
        return obj1 === obj2;
    }
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    for(var attr in obj1){
        var t1 = obj1[attr] instanceof Object;
        var t2 = obj2[attr] instanceof Object;
        if(t1 && t2){
            return deepDiff(obj1[attr],obj2[attr]);
        }else if(obj1[attr] !== obj2[attr]){
            return false;
        }
    }
    return true;
}
const existDiff = function (obj, arr) {
    let len = arr.length
    for(let i=0; i<len; i++) {
        obj.idx = arr[i].idx
        if (deepDiff(obj, arr[i])) {
            return true
        }
    }
    return false
}
module.exports = {existDiff}