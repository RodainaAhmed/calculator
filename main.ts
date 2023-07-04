input.onButtonPressed(Button.A, function () {
    a = randint(1, 10)
    basic.showNumber(a)
    b = randint(1, 10)
    basic.showNumber(b)
    addition = a + b
    basic.showNumber(addition)
})
input.onButtonPressed(Button.AB, function () {
    a = randint(1, 10)
    basic.showNumber(a)
    b = randint(1, 10)
    basic.showNumber(b)
    multiply = a * b
    basic.showNumber(multiply)
})
input.onButtonPressed(Button.B, function () {
    a = randint(1, 10)
    basic.showNumber(a)
    b = randint(1, 10)
    basic.showNumber(b)
    if (a > b) {
        subtract = a - b
        basic.showNumber(subtract)
    } else {
        subtract = b - a
        basic.showNumber(subtract)
    }
})
let subtract = 0
let multiply = 0
let addition = 0
let b = 0
let a = 0
a = 0
b = 0
