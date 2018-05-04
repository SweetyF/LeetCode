// 针对排好序的数组进行3个数相加，和和target进行匹配
function MatchNum(nums, target) {
    for (var i = 0; i < nums.length - 2; i++) {
        var low = i + 1;
        var high = nums.length - 1;
        while (low < high) {
            var sum = nums[low] + nums[i] + nums[high];
            if (sum == target) {
                return true;
            }
            else if (sum < target) {
                low++;
            }
            else {
                high--;
            }
        }
    }
    return false;
}

var threeSumClosest = function (nums, target) {
    function sortNumber(a, b) {
        return a - b;
    }

    //进行排序，以应用MatchNum
    nums.sort(sortNumber);
    var sum = 0;
    var closest = 0;
    var ismatched = false;
    while (!ismatched) {
        //加1
        sum = target + closest;
        ismatched = MatchNum(nums, sum);
        if (ismatched) {
            break;
        }
        //减1
        sum = target - closest;
        ismatched = MatchNum(nums, sum);
        closest++;
    }

    return sum;

};
nums = [-1, 2, 1, -4,0];
var target = 1;
console.log(threeSumClosest(nums, target));