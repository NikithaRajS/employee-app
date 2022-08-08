import { decrement, increment } from "../store/slices/counterSlice";
import {useSelector,useDispatch} from 'react-redux';
import { useGetAllEmployeesQuery } from "../services/Api";

const DemoPage = () => {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <button onClick={()=>dispatch(increment())}>Increment Value</button>
//       {console.log(count)}
//       <button onClick={()=>dispatch(decrement())}>Decrement Button</button>
//     </div>
//   );

        const { data, error, isLoading } = useGetAllEmployeesQuery();
        console.log(data);
        return (
            <div >
              {data?.data?.name}
            </div>
          )


};

export default DemoPage;
