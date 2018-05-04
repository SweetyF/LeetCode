//     height=[2,5,6,4,3,2];
//      function maxArea(height) {
//     var flag;
//     var max=height[0];
//     // 找最高值
//     for (var i=1;i<height.length;i++) {
//         if (height[i]>max){
//             max=height[i];
//             flag=i;
//         }
//     }
//          return max;
// };
// console.log(maxArea(height));

height=[2,5,6,4,3,2];
var maxArea = function(height) {
    var start=0;
    var end = height.length-1;
    var maxa = 0;
    while(start<end){
        var area = Math.min(height[start],height[end]) * (end-start);
        maxa = Math.max(area,maxa);
        if (height[start] > height[end]){
            end--;
        }
        else{
            start++;
        }
    }
    return maxa;

};
console.log(maxArea(height));
