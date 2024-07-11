function anagram(object1='', object2=''){

    let string1 = object1.trim().toLowerCase().replace(/\s+/g, '').split('')
    let string2 = object2.trim().toLowerCase().replace(/\s+/g, '').split('')

    console.log(string1)
    console.log(string2)

    if (string1.length !== string2.length){
        return`${object1} and ${object2} are not anagrams`;
    }
        let obj1 = {}
        let obj2 = {}
        console.log('same length')

        string1.forEach((letter)=>{
            if(letter in obj1){
                obj1[letter]++
            }
            else {
                obj1[letter] = 1
            }
            console.log(obj1)
        })
        string2.forEach((letter)=>{
            if(letter in obj2){
                obj2[letter]++
            }
            else {
                obj2[letter] = 1
            }
            console.log(obj2)
        })

        for(let key in obj1){
            if(obj1[key]!==obj2[key])
            {return `${object1} and ${object2} are not anagrams`}
        }
        return `${object1} and ${object2} are anagrams`
        };
    
console.log(anagram('The classroom','School master'))