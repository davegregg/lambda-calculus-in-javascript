const expectEquals = (msg, actual, expected) => {
    console.assert(actual === expected, `Expected ${msg}. Instead got ${actual.name}.`)
}

const TRUE = x => y => x
const FALSE = x => y => y

const NOT = b => b(FALSE)(TRUE)
const AND = x => y => x(y(TRUE)(FALSE))(FALSE)
const OR = null
const XOR = null


expectEquals("NOT(TRUE) to be equal to FALSE", NOT(TRUE), FALSE)
expectEquals("NOT(FALSE) to be equal to TRUE", NOT(FALSE), TRUE)

expectEquals("AND(TRUE)(TRUE) to be equal to TRUE", AND(TRUE)(TRUE), TRUE)
expectEquals("AND(TRUE)(FALSE) to be equal to FALSE", AND(TRUE)(FALSE), FALSE)
expectEquals("AND(FALSE)(TRUE) to be equal to FALSE", AND(FALSE)(TRUE), FALSE)
expectEquals("AND(FALSE)(FALSE) to be equal to FALSE", AND(FALSE)(FALSE), FALSE)