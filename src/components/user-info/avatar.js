import React from 'react';
import UserContext from '../../context'

const Avatar = props => {
    let data = React.useContext(UserContext);
    return <img className="avatar" src={data.avatar} alt="avatar" />
}

export default Avatar
