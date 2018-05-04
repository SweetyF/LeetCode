var searchInsert = function(nums, target) {
    var l=0,r=nums.length-1,mid;
    while(l<=r){
        mid=Math.floor((l+r)/2);
        if(target==nums[mid]){
            return mid;
        }
        else if(target<nums[mid]){
            r=mid-1;
        }
        else{
            l=mid+1;
        }
    }
    return l;
};
nums = [1,3,5,7,8];
target = 4;
console.log(searchInsert(nums,target));