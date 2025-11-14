import GlobalStyles from "styles/GlobalStyles";

// Импорты лекций
// import Lesson06 from "lessons/Lesson06/Lesson06";
// import Lesson07 from "lessons/Lesson07/Lesson07";
// import Lesson08 from "lessons/Lesson08/Lesson08";
// import Lesson09 from "lessons/Lesson09/Lesson09";
// import Lesson10 from "lessons/Lesson10/Lesson10";
// import Lesson12 from "lessons/Lesson12/Lesson12";

// Импорты домашних заданий
// import Homework06 from "homeworks/Homework06/Homework06";
// import Homework07 from "homeworks/Homework07/Homework07";
// import Homework09 from "homeworks/Homework09/Homework09";
// import Homework10 from "homeworks/Homework10/Homework10";
import Homework12 from "homeworks/Homework12/Homework12";

function App() {
    return (
        <>
            <GlobalStyles/>
            { /* Лекция 6 - TypeScript */ }
            {/* <Lesson06/> */}
            {/* <Homework06 /> */}
            
            { /* Лекция 7 -  */ }
            {/* <Lesson07 /> */}
            {/* <Homework07 /> */}
            
            { /* Лекция 8 -  */ }
            {/* <Lesson08 /> */}

            { /* Лекция 9 -  */ }
            {/* <Lesson09 /> */}
            {/* <Homework09 /> */}

            {/* Lesson 10 - useEffect */}
            {/* <Lesson10 /> */}
            {/* <Homework10 /> */}

            {/* Lesson 12 - formik */}
            {/* <Lesson12 /> */}
            <Homework12 />
        </>
    );
}

export default App;
