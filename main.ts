export default function greeter(lastName: string, firstName: string) {
    console.log(`Yo, ${firstName} ${lastName}. What's up?`)
    console.log(`Time is ${new Date().toISOString()}`)
}