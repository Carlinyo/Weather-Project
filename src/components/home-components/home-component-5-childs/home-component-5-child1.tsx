import { useForm } from "react-hook-form";
import { GetCurrentData, GetWeatherDataA, SetSearchData } from "../../../actions/weather-actions";
import { useAppDispatch} from "../../../utils/helpers";
import HomeComponent5Child1Styles from "./home-component-5-child.style.module.css";

const HomeComponent5Child1 = () => {
  const {
    register,
    handleSubmit,
  } = useForm();
  const dispatch = useAppDispatch();
  return (
    <div className={HomeComponent5Child1Styles.container}>
      <form className={HomeComponent5Child1Styles.inputContainer} onSubmit={handleSubmit((data)=>{
        dispatch(SetSearchData(data.searchData))
        dispatch(GetWeatherDataA(data.searchData))
        dispatch(GetCurrentData(data.searchData))
      })}>
        <input
          type="text"
          placeholder="Search..."
          {...register("searchData", { required: true })}
        />
        <img
          src="/search.png"
          width="25px"
          alt=""
          className={HomeComponent5Child1Styles.Search}
        />
        <img
          src="/location.png"
          width="30px"
          alt=""
          className={HomeComponent5Child1Styles.location}
        />
        <button>Search...</button>
      </form>
      <div className={HomeComponent5Child1Styles.user}>
        <input alt="" type="image" src="/bluenotification.png" width="30px" />
        <img alt="" src="/user.png" width="30px" />
      </div>
    </div>
  );
};
export default HomeComponent5Child1;
