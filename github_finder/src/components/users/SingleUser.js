import React, {useState, useEffect, useContext} from 'react';
import Spinner from "../layout/Spiner";
import {Link} from "react-router-dom";
import GithubContext from "../context/github/githubContext";


const SingleUser = ({match}) => {

    let context = useContext(GithubContext)


    // load user data from gitHub
    useEffect(() => {
        context.getUser(match.params.login)
        context.getUserRepos(match.params.login)
        //eslint-disable-next-line
    }, [])

    let {name, company, followers, following, html_url, hireable} = context.user


    // spinner while loading
    if (context.loading) {
        return <Spinner/>
    }

    return (
        <div>
            <h3> user data : </h3>
            <ul className={'card grid-2'}>
                <li>name : {name}</li>
                <li>company : {company}</li>
                <li>followers : {followers}</li>
                <li>following : {following}</li>
                <li>html_url : <a href={html_url}>{html_url}</a></li>
                <li>hireable : {
                    hireable ? (<i style={{color: 'green'}} className="fas fa-thumbs-up">.</i>) :
                        (<i style={{color: 'red'}} className="fas fa-times-circle">.</i>)}</li>
            </ul>

            <h3> user repos : (last 6)</h3>
            <ul className={'card grid-2'}>
                {context.repos.map(repo => (<li key={repo.id}><a href={repo.svn_url}>{repo.name}</a></li>))}
            </ul>


            <Link to={'/'}>
                <button style={{margin: 'auto', padding: '5px'}}
                        className='btn btn-light btn-block'>
                    back
                </button>
            </Link>
        </div>
    )
}


export default SingleUser