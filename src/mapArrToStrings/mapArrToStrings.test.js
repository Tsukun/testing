const mapArrToStrings = require("./mapArrToStrings")




describe('mapArrToStrings', ()=>{
    test('Корректное значение', () => { 
        expect(mapArrToStrings([1,2,3,4,5])).toEqual(['1','2','3','4','5'])
    })

    test('Мешанина', () => { 
        expect(mapArrToStrings([1,2,3,undefined,4,5, 'asdasdasdasa'])).toEqual(['1','2','3','4','5'])
    })

    test('Пустой массив', () => { 
        expect(mapArrToStrings([])).toEqual([])
    })

    test('Отрицание', () => { 
        expect(mapArrToStrings([1,2,3])).not.toEqual([1,2,3,4])
    })

})