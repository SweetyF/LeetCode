// function MatchNum(nums, target){
//     var list=new ArrayList();
//     var results = new ArrayList();
//     for (var i=0;i<nums.length-3;i++){
//         for(var j = nums.length-1;j>i+2;j--)
//         var low = i+1;
//         var high = j-1;
//         while(low<high){
//             var sum = nums[i] + nums[low] + nums[j] + nums[high];
//             if(sum = target){
//                list.add(nums[i]);
//                list.add(nums[low]);
//                list.add(nums[end]);
//                list.add(nums[high]);
//                if(!results.contrains(list)){
//                    results.add(list);
//                }
//             }
//             else if(sum > target){
//                 high--;
//             }
//             else{
//                 low++;
//             }
//         }
//     }
//     return results;
// }
var fourSum = function (nums, target) {
    function sortNumber(a, b) {
        return a - b;
    }

    //进行排序，以应用MatchNum
    nums.sort(sortNumber);
    var list = [];
    var results = [];
    for (var i = 0; i < nums.length - 3; i++) {
        for (var j = nums.length - 1; j > i + 2; j--)
             var low = i + 1;
             var high = j - 1;
        while (low < high) {
            var sum = nums[i] + nums[low] + nums[j] + nums[high];
            if (sum == target) {
                list.push(nums[i]);
                list.push(nums[low]);
                list.push(nums[end]);
                list.push(nums[high]);
                // if (!results.contrains(list)) {
                //     results.push(list);
                // }
                 results.push(list);
                 low++;
                 high--;
            }
            else if (sum > target) {
                high--;
            }
            else {
                low++;
            }
        }
    }
    return results;
    // return list;
};
// var fourSum = function (nums, target) {
//     var res = [];
//     if(nums.length < 4){
//         return res;
//     }
//     function sortNumber(a, b) {
//         return a - b;
//     }
//
//     //进行排序，利于确定指针的移动方向
//     nums.sort(sortNumber);
//     var sum = 0;
//
//     var exist = [];           //用来判断res里面是否已经有解
//     for (var i = 0; i < nums.length - 3; i++) {
//         for (var j = i + 1; j < nums.length - 2; j++) {
//
//             var low = j + 1;
//             var high = nums.length - 1;
//             while (low < high) {
//                 sum = nums[i]+nums[j]+nums[low]+nums[high];
//                 if (sum == target) {
//                     var curs = "" + nums[i] + nums[j] + nums[low] + nums[high];    //以字符串的格式保存在exist中
//                     if (exist.indexOf(curs) == -1) {                  //不存在该解，将其保存在res中
//                         res.push([nums[i], nums[j], nums[low], nums[high]]);
//                         exist.push(curs);
//                     }
//                     low++;
//                     high--;
//                 }
//                 else if (sum < target) {
//                     low++;
//                 }
//                 else {
//                     high--;
//                 }
//             }
//         }
//     }
//     return res;
//
// };

nums = [1, 0, -1, 0, -2, 2];
var target = 0;
console.log(fourSum(nums, target));