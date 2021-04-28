import RepoItem from "./RepoItem";
import propType from 'prop-types'

/**
 * call to RepoItem and project to ui
 * @param repos list or gut hub repositories
 * @returns {JSX.Element}
 */
const Repos = ({repos}) => {
    return (
        <div style={repoStyle}>
            {repos.map(repo => (<RepoItem key={repo.id} repo={repo}/>))}
        </div>
    )
}

Repos.prototype = {
    repos: propType.array.isRequired
}

let repoStyle = {
    display: 'grid',
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: '1rem'
}

export default Repos