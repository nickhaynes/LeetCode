public class Solution {
    public int MaxArea(int[] height) {
        int left = 0, right = height.Length - 1;
        int result = 0;
        
        while (left < right) {
            int water = Math.Min(height[left],height[right])*(right-left);
            result = Math.Max(result, water);
            
            if(height[left] < height[right]) {
                left += 1;
            } else {
                right -= 1;
            }
        }
        
        return result;
    }
}