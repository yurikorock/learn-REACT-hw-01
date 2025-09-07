// export default function HomePage(){
//     return(
//         <div>
//             <h1>Home page</h1>
//         </div>
//     )
// }

// програмна навігація, це коли треба не по лінку перенаправляти користувача
// а по якійсь події, логін сабміт Наприклад людинка залогінилась і її треба перекинути вже на
// сторінку зареєстрованого користувача

import { useNavigate } from "react-router-dom"

export default function HomePage(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/dashboard");
    }
    return(
        <div onClick={handleClick}>
            <h1>Home page</h1>
        </div>
    )
}