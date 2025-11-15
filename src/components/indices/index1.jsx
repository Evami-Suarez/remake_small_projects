const Indices = () => {
  const nums = [3, 2, 4];
  const target = 6;

  const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) return [i, j];
      }
    }
  };

  const result = twoSum(nums, target);
  console.log([...result]); // Should print [1, 2]
};

export default Indices;
