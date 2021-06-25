import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
function Home() {
    let state = useSelector(state => state);
    let dispatch = useDispatch();

    const updateData = ()=>{
         dispatch({type: "UPDATEDATA",username: "basit"})
    }
    return (
        <div>
            <h1>Home</h1>
            <h2>{state.username}</h2>
            <button onClick={updateData}>UPDATE</button>
            {/* {state.users.map((v,i)=> <p>{v.username}</p>)} */}
        </div>
    );
}

export default Home;
