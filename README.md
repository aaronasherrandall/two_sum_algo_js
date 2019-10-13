# two_sum_algo_js
# Two Sum Algorithm in JavaScript
This is an exhaustive guide to the Javascript solution for the **Two Sum** problem found on Leet Code here: https://leetcode.com/problems/two-sum/

## Problem:
Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

You may assume that each input would have *exactly* one solution, and you may not use the same element twice.

**Example:**
```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,

return [0, 1]
```

The obvious answer is easy to come by, but the more efficient and less obvious answer is much more complex.

#### Define Initial Algorithm
```
Given: nums: [int]
Target: int
```
For our givens, we have our array of integers which is our numbers, and our target, which is the integer we want to add up to.

```
Return: Array of indices adding to target
```
We want to return the indicies of the two numbers that add together to make that target.

#### Initial Algorithm in Psuedo Code
```
for Each num, index in nums
    for Each num2, index2 in nums
        if num + num2 = target
        return [index, index2]
        end
    end
end
```
