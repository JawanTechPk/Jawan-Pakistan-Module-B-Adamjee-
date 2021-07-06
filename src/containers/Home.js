import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getTodos } from '../store/action';
import { useEffect } from 'react'
function Home() {
    let state = useSelector(state => state);
    let dispatch = useDispatch();

    const update = () => {

        // dispatch({ type: "UPDATEDATA", username: "basit" })
    }

    useEffect(() => {
        dispatch(getTodos())
    }, [])
    console.log("todos===>", state.todos)

    return (
        <div>
            <h1>Home</h1>
            <h2>{state.username}</h2>

            <button onClick={update}>UPDATE</button>

            {state.todos.map((v,i)=> <p>{v.title}</p>)}
        </div>
    );
}

export default Home;
