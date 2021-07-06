import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getTodos } from '../store/action';
import { useEffect } from 'react'
function Home() {
    let state = useSelector(state => state);
  

    console.log("state==>",state)

    return (
        <div>
            <h1>Home</h1>
            <h2>{state.username}</h2>

            {/* <button onClick={update}>UPDATE</button> */}

            {state.todos ? state.todos.map((v, i) => <p>{v.title}</p>) : <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>}
        </div>
    );
}

export default Home;
