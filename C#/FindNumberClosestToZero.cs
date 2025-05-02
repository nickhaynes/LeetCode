public class Solution {
    public int FindClosestNumber(int[] nums) {
        int ans = 0;
        int d = int.MaxValue;
        
        foreach (int x in nums)
        {
            int temp = Math.Abs(x);
            if (temp < d)
            {
                ans = x;
                d = temp;
            } else if (temp == d)
            {
                if (x > ans)
                {
                    ans = x;
                }
            }
        }

        return ans;
    }
}