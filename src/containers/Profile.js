import { useParams } from 'react-router-dom';


function Profile() {
    const { id, username } = useParams();
    return (
        <div>
            <h1>Profile</h1>
            <h2>{username}</h2>
        </div>
    );
}

export default Profile;
