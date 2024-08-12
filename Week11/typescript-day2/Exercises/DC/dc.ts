function validateUnionType(value: any, allowedTypes: string[]): boolean {
    const typeOfValue = typeof value
    return allowedTypes.includes(typeOfValue)
}
console.log(validateUnionType(123, ['number', 'string']));
console.log(validateUnionType('hello', ['number', 'boolean'])); 
console.log(validateUnionType(true, ['boolean', 'object'])); 