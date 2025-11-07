import "./styles.css";

function Lesson07() {
    // Тип any - любой тип
    let city: any = "Berlin";
    city = 123;
    city = true;
    city = [34, "London", null, false];

    // Типизация объектов через interface
    interface User {
        name: string;
        age: number;
        isAdmin?: boolean; // знак вопроса указывает, что свойство не обязательное
    }

    const userData: User = {
        name: "John",
        age: 43,
        isAdmin: true, // может отсутствовать в объекте
    };
    console.log(userData);

    interface Address {
        city: string;
        postcode: string | number;
    }

    const address1: Address = {
        city: "Paris",
        postcode: 12345,
        street: "Main street",
    };

    const address2: Address = {
        city: "London",
        postcode: "54321",
        street: "Main street",
    };

    // Создание одноименных интерфейсов - интерфейс с таким же именем не будет отдельным интерфейсом, он будет дополнять предыдущий

    interface Address {
        street: string;
    }

    // Наследование интерфейсов
    interface Person {
        fullname: string;
        email: string;
    }

    interface Admin extends Person {
        adminId: number;
    }

    const personData: Person = {
        fullname: "Adam Smith",
        email: "adamsmith@mail.com",
    };

    const adminData: Admin = {
        fullname: "John Johnson",
        email: "john@mail.com",
        adminId: 666666,
    };

    // Типизация через type
    // Использованияе type для создания усложненного типа для переменных
    type Weight = string | number | null;
    let personWeight: Weight = "56 kg";
    let userWeight: Weight = null;
    userWeight = 45;
    // userWeight = true; // Ошибка

    // Использование type для типизации объектов
    type Animal = {
        name: string;
        weight: Weight;
    };

    // Одноименные типы (type) создавать нельзя
    // type Animal = string; // Ошибка

    // Объединение типов
    type ZooAnimal = Animal & { country: string };

    const zebra: ZooAnimal = {
        country: "Afrika",
        name: "Zebra",
        weight: null,
    };

    const animalData: Animal = {
        name: "Lion",
        weight: "200 kg",
    };

    // Generic - это переменная, в которую мы можем подставить нужный тип в момент использования
    // Generic & Type
    type CustomTupel<T = string> = [number, string, T];

    const arrayMix: CustomTupel<boolean> = [24, "Bob", false];
    const arrayMix2: CustomTupel<number> = [40, "Mary", 2345];
    const arrayMix3: CustomTupel = [56, "Tom", "Berlin"];

    // Generic & Interface
    interface Fruit<T = number> {
        title: string;
        address: T;
    }

    const fruit1: Fruit = {
        title: "Apple",
        address: 45,
    };

    const fruit2: Fruit<string> = {
        title: "Apple",
        address: "68309",
    };

    // enum
    // Числовое перечисление
    enum Colors {
        Red = 5,
        Black,
        Green,
    }

    let currentColor: Colors = Colors.Green;
    console.log(currentColor);

    // Строкоыое перечисление
    // enum для цветов светофора
    enum TRAFFIC_LIGHT {
        RED = "red",
        YELLOW = "yellow",
        GREEN = "green",
    }

    const getAction = (light: TRAFFIC_LIGHT) => {
        switch (light) {
            case TRAFFIC_LIGHT.RED:
                return "Stop!";
            case TRAFFIC_LIGHT.YELLOW:
                return "Ready";
            case TRAFFIC_LIGHT.GREEN:
                return "Kann going";
        }
    };

    // Задача
    interface USER {
        id: number;
        name: string
    };
    
    const arrayUsers: USER[] = [
        {id: 1, name: "Tom"},
        {id: 2, name: "Alex"},
        {id: 3, name: "Mary"},
    ];

    return (
        <div className="lesson07-wrapper">{getAction(TRAFFIC_LIGHT.GREEN)}</div>
    );
}

export default Lesson07;
