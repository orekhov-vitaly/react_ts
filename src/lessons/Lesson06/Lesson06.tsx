import "./styles.css";

function Lesson06() {
    // Типы переменных
    // Тип переменных указывается после название через двоеточие
    // 1. Типизация строк - string
    let userName: string = "Mary";
    userName = `Tom`;
    // userName = true;
    let result = 1 + 2 + "4";

    // 2. Типизация чисел - number
    let simpleNumber: number = 23;
    simpleNumber = Infinity;
    simpleNumber = 2.6;
    simpleNumber = -2;
    simpleNumber = NaN;

    // 3. Типизация логического типа - Boolean
    let isAdmin: boolean = true;
    isAdmin = false;
    isAdmin = userName !== "Bob";

    // 4. Типизация неопределенного типа - Undefined
    let age: undefined = undefined;

    // 5. Типизация пустого типа - Null
    let data: null = null;

    // 6. Типизация большого числа - bigint
    let bigNumber: bigint = 123123123123123123123123n;

    // 7. Типизация символа - symbol
    let uniq: symbol = Symbol("description");
    // uniq = "234809fffffff2";

    // 8.1 Типизация массива - указываем после названия массива тип данных, которые будут храниться в массиве, а затем ставим квадратные скобки
    const colors: string[] = ["red", "green", "blue"];
    // colors.push(123);

    // Типизация массива постоянной длины (может иметь разные типы), можно использовать кортеж (tupel)
    const colorCode: [string, number] = ["blue", 673];

    // 8.2 Типизация функций
    // Если функция ничего не возвращает
    const showMessage = (): void => {
        console.log("Hello");
    };

    // Если функция возвращает значение, тогда указываем тип возвращаемого значения
    const getSum = (): number => {
        const sum: number = 2 + 7;
        return sum;
    };

    // Типизация параметров функции
    const getUserData = (firstName: string, age: number): string => {
        return `${firstName} - ${age} y.o.`;
    };

    // 9. Автоматическое определение типов
    let name = "Bob";
    // name = true;

    const number = [4, 5, 6];

    // 10. Union типы
    let  color: string | number = 78;
    color = "blue";

    const example: (string | number)[] = [34, "green", 67];

    return (
        <div className="lesson06-wrapper">
            <div>Lesson06 - TypeScript</div>
            {userName}
            <br />
            {result}
            <br />
            {simpleNumber}
            <br />
            {isAdmin && "Bob"}
            <br />
            {getUserData("Tom", 45)}
        </div>
    );
}

export default Lesson06;
