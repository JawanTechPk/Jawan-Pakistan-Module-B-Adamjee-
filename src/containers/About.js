// import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';

function About(props) {
    const state = useSelector(state => state)
    console.log(state)
    // const location = useLocation()
    // console.log(location.state)
    return (
        <div>
            <h1>About</h1>

        </div>
    );
}

export default About;
