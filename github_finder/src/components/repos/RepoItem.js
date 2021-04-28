import propType from 'prop-types'

/**
 * individual repo item for projection
 * @returns {JSX.Element}
 * @constructor
 */
const RepoItem = ({repo}) => {
    return (
        <div className={'card'}>
            <h4>
                <a href={repo.svn_url}>{repo.name}</a>
            </h4>
        </div>
    )
}
RepoItem.prototype = {
    repo: propType.object.isRequired
}


export default RepoItem