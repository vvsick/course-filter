// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
    ];
    
// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];
    
//объявление функции сортировки с входящим параметром фильтрации
function filter_list(range) {
    // объявление массива, который будет содержать отфильтрованные элементы
    let  filteredList = [];
    // перебор исходного массива для дальнейшей фильтрации
    courses.forEach((course) => {
        // далее идет оптимизация параметров фильтрации
        courseMin = course.prices[0] === null ? 0 : course.prices[0];
        courseMax = course.prices[1] === null ? Infinity : course.prices[1];
        rangeMin = range[0] === null ? 0 : range[0];
        rangeMax = range[1] === null ? Infinity : range[1];
        // условие фильтрации
        if (courseMin <= rangeMax && courseMax >= rangeMin) 
        {filteredList.push(course);}
    })
    // возврат значения итогового массива
    return filteredList;
}