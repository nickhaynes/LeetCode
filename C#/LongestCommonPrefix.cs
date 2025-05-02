public class Solution {
    public string LongestCommonPrefix(string[] strs) {
        if (strs.Length == 0) {
            return "";
        }

        Array.Sort(strs);

        string prefix="";

        for(int i=0;i<strs[0].Length;i++) {
            char c=strs[0][i];

            for(int j=0;j<strs.Length;j++) {
                if(i>strs[j].Length||strs[j][i]!=c) {
                    return prefix;
                }
            }
            prefix += c;
        }
        return prefix;
    }
}