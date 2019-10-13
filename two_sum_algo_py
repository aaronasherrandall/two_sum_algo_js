## nums = [2, 8 , 7, 11]
## target = 9

class Solution:
    def twoSum(self, nums, target):
        d = dict()
        for index,num in enumerate(nums):
            if d.get(num) == None:
                d[target - num] = index
            else:
                return [d.get(num), index]
