const add=(a,b)=>a+b
const greeting=(name='Anonymous')=>`Hi ${name}! Good Morning`

test('should add two numbers',()=>{
    const result=add(2,5)

    // if(result!==7){
    //     throw new Error(`The expected result should be 7 and what we got is ${result}`)
    // } // we have jest default assertions to run the test caese
    expect(result).toBe(7)
})

test('Greetings for the day',()=>{
    const result=greeting('swamy')

    expect(result).toBe('Hi swamy! Good Morning')
})

test('Greetings of the day if no name is define',()=>{
    const result=greeting()
    expect(result).toBe('Hi Anonymous! Good Morning')
})