import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
function Home() {
    const history = useHistory();
    const state = useSelector(state => state);

    console.log(state)

    const goToAbout = () => {
        history.push('/about', {
            email: "ghous@gmail.com",
            username: "ghousahmed"
        })
    }
    return (
        <div>
            <h1>Home</h1>

            <button onClick={goToAbout}>ABOUT</button>
        </div>
    );
}

export default Home;
