import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function UserRepos({ getUserRepos, repos }) {

  let { username } = useParams()

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
