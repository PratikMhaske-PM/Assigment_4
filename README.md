Assignment 4 - TypeScript
Objective

The objective of this assignment is to understand how to work with complex JSON data using TypeScript. It focuses on array operations, object manipulation, and extracting meaningful data.

Data Structure

The main variable used in this assignment is fields.

It contains four arrays:

Dimensions: Stores descriptive data such as City, Country, Date
Measures: Stores numerical data such as Sales, Profit
Details: Stores additional descriptive information
Hierarchies: Empty in this assignment

Each element inside these arrays is an object with properties like:

entityName
variableType
dataType
datasetId
Concepts Used
1. Combining Arrays

All arrays are merged into a single array called fieldList using the spread operator.

Purpose:
To process all data in one place.

2. Filtering Data

The filter() function is used to extract items that contain the key calculatedFieldKey.

Purpose:
To get only calculated fields.

3. Finding and Removing Elements
findIndex() is used to locate the position of "Discount"
splice() is used to remove it

Purpose:
To delete specific unwanted data.

4. Updating Object Properties

Looping through fieldList using forEach() and updating:

isNumericDataType
dataType

Condition:
entityName should be "City"

5. Extracting Nested Data

flatMap() is used to extract the variables array from calculated fields.

Then filter() is used to get only numerical variables.

6. Storing Index Values

Loop through Dimensions and store indexes where:

Parent = "Order Date"

Stored in dataIndex array.

7. Using Index for Output

Check if index exists in dataIndex using includes().

If present, print the corresponding entityName.

8. Renaming Keys

In Measures array:

Add new key datasetKey
Assign value from datasetId
Remove datasetId
9. Updating Nested Object

Find items with:

variableType = "geographical"

Update:
unMappedLocationCount = 5

10. Filtering and Transforming Data

Filter items where:

isNumericDataType = true
dataType = float

Then update:
datasetId = subDatasetId

Store result in NumericalItems.

Functions Used
filter(): Select specific elements
map(): Transform data
forEach(): Loop through array
findIndex(): Find element position
splice(): Remove element
flatMap(): Flatten nested arrays
Flow of Execution
Create fields object
Combine arrays into fieldList
Extract calculated fields
Remove "Discount"
Update "City"
Extract numerical variables
Store indexes based on Parent
Print values using index
Rename datasetId
Update geographical data
Create NumericalItems array
Learning Outcome

After completing this assignment, you will be able to:

Work with complex data structures
Perform array and object operations
Extract and transform data efficiently
Understand real-world data handling scenarios
Conclusion

This assignment helps in building strong fundamentals of data manipulation in TypeScript. These concepts are widely used in real-world applications such as backend development, APIs, and data processing systems.
