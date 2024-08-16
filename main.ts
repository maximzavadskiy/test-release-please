export default function greeter(lastName: string, firstName: string) {
    console.log(`Dear ${firstName} ${lastName}.What's up?`)
    console.log(`Time is ${new Date().toISOString()}`)
    console.log(`Let me tell you a joke?`)
}