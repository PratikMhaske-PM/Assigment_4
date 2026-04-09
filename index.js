"use strict";
// 1. Create fields variable which contains the sample data given below
const fields = {
    Hierarchies: [],
    Dimensions: [
        { isNumericDataType: false, entityName: "Order ID", variableType: "categorical", dataType: "text", datasetId: "1", subDatasetId: "a" },
        { isNumericDataType: false, entityName: "Order Date", variableType: "interval", dataType: "date", datasetId: "1", subDatasetId: "a" },
        { entityName: "Order Date_Year", Parent: "Order Date", datasetId: "1", variableType: "categorical", subDatasetId: "a", dataType: "int64" },
        { entityName: "Order Date_Month", Parent: "Order Date", datasetId: "1", variableType: "categorical", subDatasetId: "a", dataType: "int64" },
        { isNumericDataType: false, entityName: "Country", variableType: "categorical", dataType: "text", datasetId: "1", subDatasetId: "a" },
        { isNumericDataType: false, entityName: "City", variableType: "categorical", dataType: "text", datasetId: "1", subDatasetId: "a" },
        { isNumericDataType: false, entityName: "State", variableType: "geographical", dataType: "text", datasetId: "1", subDatasetId: "a", mappingDetails: { unMappedLocationCount: 0 } },
        {
            calculatedFieldKey: "123",
            variables: [{ entityName: "Customer Name", variableType: "categorical", dataType: "text" }],
            entityName: "Cal32",
            variableType: "categorical",
            dataType: "text"
        }
    ],
    Measures: [
        { isNumericDataType: true, entityName: "Row ID", variableType: "numerical", dataType: "integer", datasetId: "1", subDatasetId: "a" },
        { isNumericDataType: true, entityName: "Postal Code", variableType: "numerical", dataType: "float", datasetId: "1", subDatasetId: "a" },
        { isNumericDataType: true, entityName: "Sales", variableType: "numerical", dataType: "float", datasetId: "1", subDatasetId: "a" },
        { isNumericDataType: true, entityName: "Discount", variableType: "numerical", dataType: "float", datasetId: "1", subDatasetId: "a" },
        {
            calculatedFieldKey: "456",
            variables: [{ entityName: "Sales", variableType: "numerical", dataType: "float" }],
            entityName: "Cal2",
            variableType: "numerical",
            dataType: "float"
        }
    ],
    Details: [
        { isNumericDataType: false, entityName: "Category", variableType: "categorical", dataType: "text", datasetId: "1", subDatasetId: "a" },
        { isNumericDataType: false, entityName: "Product Name", variableType: "categorical", dataType: "text", datasetId: "1", subDatasetId: "a" }
    ]
};
// 2. Combined all the items from Details, Measures, Dimensions, Hierarchies into single variable named fieldList
let fieldList = [
    ...fields.Details,
    ...fields.Measures,
    ...fields.Dimensions,
    ...fields.Hierarchies
];
// 3. Filter fieldList to get the array that contains “calculatedFieldKey” key in it and save that array in variable named calculatedfields
let calculatedfields = fieldList.filter(item => item.calculatedFieldKey);
// 4. Find the index of the item whose entityName is “Discount” and remove that item from the fieldList
let index = fieldList.findIndex(item => item.entityName === "Discount");
if (index !== -1)
    fieldList.splice(index, 1);
// 5. Change the flag isNumericDataType to true and datatype to Numerical whose entityName is “City”
fieldList.forEach(item => {
    if (item.entityName === "City") {
        item.isNumericDataType = true;
        item.dataType = "Numerical";
    }
});
// 6. Combine variables array into single array from the calculatedfields and find the variables list whose variableType is “numerical”
let variablesArray = calculatedfields.flatMap(item => item.variables || []);
let numericalVariables = variablesArray.filter(v => v.variableType === "numerical");
// 7. From Dimensions array from fields store the index of the item whose Parent = "Order Date" in to array named dataIndex.
let dataIndex = [];
fields.Dimensions.forEach((item, i) => {
    if (item.Parent === "Order Date") {
        dataIndex.push(i);
    }
});
// 8. Loop over Dimensions array and check if the index of the item is present in dataIndex array and if present then print the entityName of that item
fields.Dimensions.forEach((item, i) => {
    if (dataIndex.includes(i)) {
        console.log(item.entityName);
    }
});
// 9. From Measures array from the fields change the key “datasetId” to “datasetKey” or add new key “datasetKey” with same value as “datasetId”
fields.Measures.forEach((item) => {
    item.datasetKey = item.datasetId;
    delete item.datasetId;
});
// 10. Find the item from the fieldList with "variableType" =  "geographical" and then make unMappedLocationCount = 5  
fieldList.forEach(item => {
    if (item.variableType === "geographical") {
        item.mappingDetails.unMappedLocationCount = 5;
    }
});
// 11. Find items from the fields array whose isNumericDataType = true and datatype = float then change subDatasetId to datasetId  and save all the items in array named NumericalItems
let NumericalItems = fieldList
    .filter(item => item.isNumericDataType && item.dataType === "float")
    .map(item => {
    item.datasetId = item.subDatasetId;
    return item;
});

console.log("Calculated Fields:", calculatedfields);
console.log("Numerical Variables:", numericalVariables);
console.log("Numerical Items:", NumericalItems);
