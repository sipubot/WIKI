--https://leetcode.com/problems/recyclable-and-low-fat-products/submissions/
# Write your MySQL query statement below
select product_id
from Products
where 1=1
and low_fats = 'Y'
and recyclable = 'Y'