const square = require("./square")

describe('square', ()=>{

    //Перед каждым тестов
    beforeEach(()=>{
    })
    // Один раз перед всеми тестами
    beforeAll(()=>{
    })
    test('Корректное значение', ()=>{
        // expect(square(5)).toBe(25)
        // expect(square(5)).toBeLessThan(100)
        // expect(square(5)).toBeGreaterThan(20)

        // Смотрит на то сколько раз вызвался метод который указали - pow
        const spyMathPow = jest.spyOn(Math, 'pow') // Эти моки накапливают вызовы
        square(2)
        expect(spyMathPow).toHaveBeenCalledTimes(1)
    })

    test('Корректное значение', ()=>{
        // Смотрит на то сколько раз вызвался метод который указали - pow
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(1)
        expect(spyMathPow).toHaveBeenCalledTimes(0)
    })

    // После каждого теста
    afterEach(()=>{
        jest.clearAllMocks();
    })

    // Один раз после всех тестов
    afterAll(()=>{})

})