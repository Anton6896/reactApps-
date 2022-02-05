import React, {useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import GithubContext from "../../context/githubContext";

export default function UserRepos() {

  let { username } = useParams()
  const context = useContext(GithubContext)
  let {getUserRepos, repos} = context

  useEffect(() => {
    getUserRepos(username)
  }, []);


  return (
    <div>
      <h3> user repos data</h3>

      {
        !!repos.length ? repos.map(e => {
          return (
            <div key={e.id}>
              <p> element id: {e.id}, full name: {e.full_name}</p>
            </div>
          )
        }) : <h3> cant get data </h3> 
      }

    </div>
  );
}
