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

### Define Initial Algorithm
```
Given: nums: [int]
Target: int
```
For our givens, we have our array of integers which is our numbers, and our target, which is the integer we want to add up to.

```
Return: Array of indices adding to target
```
We want to return the indicies of the two numbers that add together to make that target.

### Initial Algorithm in Psuedo Code
```
for Each num, index in nums
    for Each num2, index2 in nums
        if num + num2 = target
        return [index, index2]
        end
    end
end
```
- This works 100% of the time and our code will execute without any issues. However, we have a loop inside of another loop.
This means we have to run through this numbers' array. Specifically, once for every number inside of the numbers' array.
Therefore, this algorithm is a big O notation of n square, or: **O(N<sup>2</sup>)**. 

- **O(N<sup>2</sup>)** represents an algorithm whose performance is directly proportional to the square of the size of the input data set. 
This is common with algorithms that involve nested iterations over the data set. (https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/)

- This initial algorithm will therefore become exponentially slower as our array grows in size. It would be more efficient to go through the array just one time, as opposed to twice as in the initial algorithm. 

**What we need:** 
1. One for loop
2. The ability to keep track of all of the numbers we've looked at
3. The ability to keep track of the the numbers we need

### Define Modified Algorithm

```
Given: nums: [int]
Target: int
```

```
Return: Array of indices adding to target
```

### Modified Algorithm in Psuedo Code
```
prevValues = {}
for Each num, index in nums
    neededValue = target - num
    index2 = prevValues[neededValue]
    if index2 != null
        return [index2, index]
    else
        prevValues[num] = index
```

Let's look at each part of the algoritm to see what it's doing:

#### prevValues
```
prevValues = {}
for Each num, index in num
```
Our modified algorithm starts out similar to the initial algorithm. We begin by looping through all of the numbers in our array.

Instead of creating a second for loop, we create a preValues variable to store all of the previous values that we have encountered to see if we have already encountered the value that adds up to make the target.

#### neededValue
```
neededValue = target - num
```
We subtract the current number from the target to determine the neededValue; which is what the other value we need is to make up the target.

#### Check and Index
```
index2 = prevValues[neededValue]
```
Inside of prevValues, we check to see if we have encountered the neededValue.
If we have, we get it and index it in index2.

#### Return Indicies
```
if index2 != null
        return [index2, index]
```
If that index (index2) exists, then we have both indices we need to solve the problem. So, we return those indecies.

#### Store as Key of Hash
```
else
prevValues[num] = index
```
If index2 does not already exist, we store that number as the key of our hash.
The value of this hash will be index of where that number took place.
With this, we are able to re-store our array inside of a hash. 

**This gives us the ability to look up the number instantly without having to look through our entire array every time to see if the number exists.**

#### Complexity Analysis
Time complexity : O(n). We traverse the list containing nn elements only once. Each look up in the table costs only O(1) time.
Space complexity : O(n). The extra space required depends on the number of items stored in the hash table, which stores at most n elements.

#### Also, here is the solution in Python:

```
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
```
We can use get() method for dictionaries. It will return None if there is no specified key.
