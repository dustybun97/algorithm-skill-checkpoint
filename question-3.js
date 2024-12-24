/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer: Big O notation for Function findStudentById is O(n) because the function has a loop that iterates through the array member. The time complexity of the function is directly proportional to the number of members in the array.


*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer: Big O notation for Function findProductPrice is O(log n). The time complexity of the function is logarithmic because the search space is reduced by half in each iteration. As the number of products increases, the time complexity of the function grows logarithmically.


*/

/* 
Which function is more efficient and why?
Answer: Function findProductPrice is more efficient than Function findStudentById because the time complexity of findProductPrice is O(log n), which is better than O(n) for findStudentById. The binary search algorithm used in findProductPrice has a logarithmic time complexity, which is more efficient than the linear time complexity of the loop in findStudentById. As the number of elements increases, the binary search algorithm will perform better than the linear search algorithm in terms of time complexity.

*/
