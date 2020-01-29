
// 1.请封装一个数组reduce方法

Array.prototype.myReduce = function (fn, init) {
  var len = this.length,
    pre = init,
    i = 0
  if (init == undefined) {
    pre = this[0]
    i = 1
  }
  for (var i = 0; i < len; i++) {
    pre = fn(pre, this[i], i, this)
  }
  return pre
}

var arr=[2,5,8,9]
arr.myReduce(function (pre, ele, index, arr) {
  console.log(pre, ele, index, arr)
  return pre + ele
}, 'g')


// 2.请使用冒泡和快速两种方式实现数组排序

//快排：
var quickSort = function(arr){
  if(arr.length <= 1){
      return arr;
  }
  var pivot = arr[0];
  var left = [];
  var right = [];
  for(var i = 1; i < arr.length; i++){
      if(arr[i] <= pivot){
          left.push(arr[i]);
      } else {
          right.push(arr[i]);
      }
  }
  return quickSort(left).concat(pivot).concat(quickSort(right));
}
//冒泡：
var examplearr=[8,94,15,88,55,76,21,39];
 
    function sortArr(orginArr) {
        var arr = orginArr.concat();
 
        var len = arr.length;
        for(var i = 0; i < len; ++i) {
            for(var j =0; j < len -1 - i;++j) {
                if(arr[j]>arr[j+1]) {
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp
                }
            }
        }
        return arr;
    }
    console.log(sortArr(examplearr))

    // 4.可以将数字转换成中文大写的表示，处理到万级别，例如 toChineseNum(12345)，返回 一万二千三百四十五
const toChineseNum = (num) => {
  const unit = ['', '十', '百', '千']
  const counts = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']

  const pre = Math.floor(num / 10000)
  const next = num % 10000

  let getfour = (mynum, flag = false) => {
    if (!mynum) { return '' }
    let i = 0, str = ''

    while (flag ? i < 4 : mynum > 0) {
      count = mynum % 10
      mynum = Math.floor(mynum / 10)
      str = (count ? counts[count] + unit[i] : str[0] == '零' ? '' : str.length && i ? '零' : '') + str
      i++
    }
    return str
  }

  return pre ? getfour(pre) + '万' + getfour(next, true) : getfour(num)
}
console.log(toChineseNum(59900670))
