const expectEquals = (msg, actual, expected) => {
    console.assert(actual === expected, `Expected ${msg}. Instead got ${actual.name}.`)
}

const True = x => y => x
const False = x => y => y

const Not = b => b(False)(True)
const And = x => y => x(y(True)(False))(False)
const Or = x => y => x(True)(y(True)(False))
const If = null


console.info("%cTest NOT operator against TRUE and FALSE primitives ---", "color: indigo;")
expectEquals("NOT(TRUE) to be equal to FALSE", Not(True), False)
expectEquals("NOT(FALSE) to be equal to TRUE", Not(False), True)

console.info("%cTest AND operator -------------------------------------", "color: indigo;")
expectEquals("AND(TRUE)(TRUE) to be equal to TRUE", And(True)(True), True)
expectEquals("AND(TRUE)(FALSE) to be equal to FALSE", And(True)(False), False)
expectEquals("AND(FALSE)(TRUE) to be equal to FALSE", And(False)(True), False)
expectEquals("AND(FALSE)(FALSE) to be equal to FALSE", And(False)(False), False)

console.info("%cTest OR operator --------------------------------------", "color: indigo;")
expectEquals("OR(FALSE)(TRUE) to be equal to TRUE", Or(False)(True), True)
expectEquals("OR(TRUE)(FALSE) to be equal to TRUE", Or(True)(False), True)
expectEquals("OR(FALSE)(FALSE) to be equal to FALSE", Or(False)(False), False)
expectEquals("OR(TRUE)(TRUE) to be equal to TRUE", Or(True)(True), True)

