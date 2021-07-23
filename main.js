const test = (description, testBlock, descMaxLength = 60) => {
    console.group(description.padEnd(descMaxLength, "-"))
        testBlock()
    console.groupEnd()
}

const expectEquals = (actual, expected) => {
    const successStyle = `color: green;`
    const failureStyle = `color: red;`
    
    const result = actual === expected
    if (result === false) {
        const expectation = `Expectation: ${expected.name}\n\t${expected.toString()}.`
        const reality = `Reality: ${actual.name}\n\t${actual.toString()}.`

        console.log(`%cTest failed.\n\n${expectation}\n\n${reality}`, failureStyle)
    } else {
        console.log("%cSuccess!", successStyle)
    }
}

const True = first => second => first
const False = first => second => second

const Not = first => first(False)(True)
const And = first => second => first(second(True)(False))(False)
const Or = first => second => first(True)(second(True)(False))
const If = Condition => Then => Else => Condition(Then)(Else)

const $0 = fun => x => x
const $1 = fun => x => fun(x)
const $2 = fun => x => fun(fun(x))
const $3 = fun => x => fun(fun(fun(x)))


test("NOT operator and Booleans", () => {
    expectEquals(Not(True), False)
    expectEquals(Not(False), True)
})

test("AND operator", () => {
    expectEquals(And(True)(True), True)
    expectEquals(And(False)(False), False)
    expectEquals(And(True)(False), False)
    expectEquals(And(False)(True), False)
})

test("OR operator", () => {
    expectEquals(Or(True)(True), True)
    expectEquals(Or(False)(True), True)
    expectEquals(Or(True)(False), True)
    expectEquals(Or(False)(False), False)
})

