import GlobalStyles from "styles/GlobalStyles";

// Импорты лекций
// import Lesson06 from "lessons/Lesson06/Lesson06";
// import Lesson07 from "lessons/Lesson07/Lesson07";
// import Lesson08 from "lessons/Lesson08/Lesson08";
// import Lesson09 from "lessons/Lesson09/Lesson09";

// Импорты домашних заданий
// import Homework06 from "homeworks/Homework06/Homework06";
// import Homework07 from "homeworks/Homework07/Homework07";
import Homework09 from "homeworks/Homework09/Homework09";

function App() {
    return (
        <>
            <GlobalStyles/>
            {/* Lessons */}
            { /* Лекция 6 - TypeScript */ }
            {/* <Lesson06/> */}
            {/* <Lesson07 /> */}
            {/* <Lesson08 /> */}
            {/* <Lesson09 /> */}


            {/* Homeworks */}
            {/* <Homework06 /> */}
            {/* <Homework07 /> */}
            <Homework09 />
        </>
    );
}

export default App;
