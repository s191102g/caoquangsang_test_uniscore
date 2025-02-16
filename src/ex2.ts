export function twoSum(nums: number[], target: number): number[][] {
    const result: number[][] = [];
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const plusNum = target - nums[i];
        console.log(map);
        
        if(map.has(plusNum)){
            for (const element of map.get(plusNum)) {
                result.push([i, element])
            }
            
        }

        if(!map.has(nums[i])){
            map.set(nums[i], [])
        }
        map.get(nums[i]).push(i)
    }
    return result;
}
// console.log(twoSum([3,2,4,3,3], 6));
