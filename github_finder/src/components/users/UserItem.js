import propTypes from "prop-types";
import {Link} from 'react-router-dom'

/**
 * @param user (specific user from git hub repo )
 * @returns {JSX.Element}
 */
let UserItem = ({user}) => {
    return (
        <div className={"card text-center "}>
            <a href={user.html_url}>
                <img
                    src={user.avatar_url}
                    alt=""
                    style={{width: "60px"}}
                    className={"round-img"}
                />
            </a>

            <div>
                <Link to={`/single_user/${user.login}`} style={{color: '#05173e'}}> {user.login} </Link>
            </div>
        </div>
    );
}


UserItem.prototype = {
    user: propTypes.object.isRequired // force user be object type User
}

export default UserItem;
