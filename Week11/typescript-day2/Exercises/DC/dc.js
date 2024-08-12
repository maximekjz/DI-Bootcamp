function validateUnionType(value, allowedTypes) {
    var typeOfValue = typeof value;
    return allowedTypes.includes(typeOfValue);
}
console.log(validateUnionType(123, ['number', 'string']));
console.log(validateUnionType('hello', ['number', 'boolean']));
console.log(validateUnionType(true, ['boolean', 'object']));
