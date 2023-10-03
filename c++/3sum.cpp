
//This C++ program aims to find all unique triplets in an input array nums such that their sum is equal to zero. It uses a two-pointer approach and a map to avoid duplicates. The program follows these steps:

//Sort the input array nums in ascending order.
//Iterate through the array with a fixed first element.
//Use two pointers to find the remaining two elements that sum to zero.
//If a triplet with a sum of zero is found, store it in a map to avoid duplicates.
//After processing all elements, convert the unique triplets from the map into a vector.
//Return the vector containing unique triplets as the result.
//In essence, this program efficiently solves the 3Sum problem by finding all unique triplets that sum to zero in the given input array.



#include <map>
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {

        map<vector<int>,int> result;
        vector<vector<int>> ans;
        sort(nums.begin(), nums.end());
        for(int i=0;i<nums.size()-2;i++){
            int left=i+1;
            int right=nums.size()-1;

            while(left<right){
                int sum=nums[i]+nums[left]+nums[right];

                if(sum==0){
                    vector<int> ans;
                    ans.push_back(nums[i]);
                    ans.push_back(nums[left]);
                    ans.push_back(nums[right]);
                    result[ans]++;
                    left++;
                    right--;
                }
                else if(sum<0){
                    left++;
                }
                else{
                    right--;
                }
            }
        }

        for(auto i=result.begin();i!=result.end();i++){
            ans.push_back(i->first);
        }
        return ans;
        
    }
};
