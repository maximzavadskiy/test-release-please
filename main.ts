export default function greeter(lastName: string, firstName: string) {
    console.log(`Dear ${firstName} ${lastName}.What's up?`)
    console.log(`Time is ${new Date().toISOString()}`)
    console.log(`Do you want to play?`)
    console.log(`I'd really love to!`)
    console.log(`Its currenlty sunny.`)
}