import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { fetchCurrentUser } from '../../ducks/user.duck';
//import { logout } from '../../ducks/auth.duck';

const ProfilePage = props => {

    const dispatch = useDispatch();
/*     const {
        currentUser
    } = useSelector(state => state.user); */

/*     React.useEffect(() => {
        dispatch(fetchCurrentUser());
    }, [dispatch]); */

    const handleLogout = () => {
        console.log("Profile page logout handle")
    }

/*     const fullName = currentUser && currentUser.displayName;
    const firstLetterName = fullName ? fullName.charAt(0) : null;
    const email = currentUser && currentUser.email; */

    return (
        <h1>Profile Page</h1>
    )
};

export default ProfilePage;