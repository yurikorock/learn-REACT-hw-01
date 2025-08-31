import { useDispatch, useSelector } from "react-redux"
import { changeLang } from "../../redux/store.js";

export default function LangSwitcher(){
    const dispatch = useDispatch();
    //useSelector - функція яка повертає шматочок стану
      const lang = useSelector(state => state.locale.lang)

      const handleChange = (e) => {
        // console.log(e.target.value);
        dispatch(changeLang(e.target.value));
        // {type: "locale/changeLang", payload: e.target.value"} ось такий обєкт ми діспатчимо
      }
    return(
        <select value={lang} onChange={handleChange}>
            <option value="en">EN</option>
            <option value="uk">UK</option>
            <option value="pl">PL</option>
        </select>
        
    )
};