const Indices = () => {
  const nums = [3, 2, 4];
  const target = 6;

  const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
    return null;
  };

  console.log("nums:", nums);
  console.log("target:", target);
  console.log("result:", twoSum(nums, target));

  return <div>hello</div>;
};

export default Indices;
