#📘 Assignment 4 – TypeScript (Understanding Document)
🔷 1. Objective of Assignment

The purpose of this assignment is to understand how to:

Work with complex JSON data
Perform array operations
Modify object properties
Extract and transform data using TypeScript
🔷 2. Data Structure Explanation

The main variable is:

fields = {
  Dimensions: [],
  Measures: [],
  Details: [],
  Hierarchies: []
}
📌 Meaning:
Dimensions → descriptive data (City, Country, Date)
Measures → numerical data (Sales, Profit)
Details → extra descriptive fields
Hierarchies → empty (not used here)

Each item inside these arrays is an object (field).

🔷 3. Key Concepts Used
✅ A. Combining Arrays
let fieldList = [...fields.Details, ...fields.Measures, ...fields.Dimensions, ...fields.Hierarchies];

👉 Concept: Spread Operator

Combines multiple arrays into one
Makes processing easier
✅ B. Filtering Data
fieldList.filter(item => item.calculatedFieldKey);

👉 Concept: filter()

Selects only those items that match a condition
✅ C. Finding and Removing Data
findIndex() → find position  
splice() → remove item

👉 Used to remove "Discount" from list

✅ D. Updating Object Values
if (item.entityName === "City")

👉 Used to:

Change isNumericDataType
Change dataType
✅ E. Looping Through Data
forEach()

👉 Runs loop on each element
👉 Used for updates and checks

✅ F. Working with Nested Arrays
flatMap()

👉 Extracts inner arrays (variables) and flattens them

✅ G. Storing Index Values
dataIndex.push(i);

👉 Stores positions of specific items
👉 Helps in later operations

✅ H. Checking Index Presence
dataIndex.includes(i)

👉 Checks whether index exists
👉 Used to print specific values

✅ I. Renaming Object Keys
item.datasetKey = item.datasetId;
delete item.datasetId;

👉 Used to rename keys manually

✅ J. Updating Nested Objects
item.mappingDetails.unMappedLocationCount = 5;

👉 Modifies inner object values

✅ K. Filtering + Transforming Data
filter() + map()

👉 First select required data
👉 Then modify it

🔷 4. Important Functions Summary
Function	Purpose
filter()	Select specific data
map()	Modify data
forEach()	Loop through array
findIndex()	Find position
splice()	Remove element
flatMap()	Flatten nested arrays
🔷 5. Flow of the Assignment
Create data (fields)
Combine all arrays → fieldList
Extract calculated fields
Remove unwanted data (Discount)
Update specific values (City)
Extract nested variables
Store indexes based on condition
Use indexes to print data
Rename keys
Update geographical data
Filter and transform numerical data
🔷 6. Real-World Use

These concepts are used in:

API data processing
Dashboard development
Backend services
Data analytics
Database operations
🔷 7. Final Learning

This assignment teaches:

✔ How to handle real-world JSON data
✔ How to clean and transform data
✔ How to extract useful information
✔ How to think logically in coding
