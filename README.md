1. Course Selection and Validation: This Feature allows us to select the courses of our choosing and also allows us to validate if the total credit hours selected by us does not exceed the limit of 20 credit hours. if it does i would show us a toast.

2. Total Price Calculation: This feature allows us to calculate the prices of the selected course and also show them in the "Total Price"section

3. Toast Notifications: This Feature allows us to show warnings using popups like if the same course is selected twice it would show a warning to us. 

Q: Discuss how you managed the section in your assignment project.

A: In this project section management is a main part for keeping track of the various props that are moving from one segment to another. section management is mainly used by react built in package "useState"

1. App section:

    1. courseSelected: This section variable is used to store an array of selected courses. It is initialized as an empty array. When a user selects a course, it is added to this array, and when a course is deselected, it is removed from the array.

    2. creditHour: This section variable keeps track of the total credit hours of the selected courses. It is initialized to 0 and is updated whenever a course is selected or deselected. It is also used for credit hour validation.

    3. totalPrice: This section variable keeps track of the total price of the selected courses. It is initialized to 0 and is updated whenever a course is selected or deselected.


2. Courses Component State:

    1. courses: This section variable stores the list of available courses. It is initially an empty array but is populated with course data fetched from an external JSON file using the useEffect hook.

    2. Course Component State:

    3. isSelected: This local section variable within the Course component is used to track whether a course has been selected. It is initialized as false for each course and is toggled to true when a user selects the course.

3. CourseLogs Component State:

    1. courseSelected: This prop represents the array of selected courses and is used to display the selected courses in the component.

    2. creditHour: This prop represents the total credit hours of the selected courses and is used to display the credit hour information.

    3. totalPrice: This prop represents the total price of the selected courses and is used to display the total price information.