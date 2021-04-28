import React, {useState, useContext} from 'react';
import GithubContext from "../context/github/githubContext";
import AlertContext from "../context/alerts/alertContext";

/**
 * search ro nav bar , look at git repo for users
 * @returns {JSX.Element} user
 */

let Search = () => {


    let context = useContext(GithubContext)
    let alertContext = useContext(AlertContext)
    let {searchUsers, users, clearData} = context
    let [text, setText] = useState('')

    return (
        <div>
            <form className={'form'}
                  onSubmit={(e) => {
                      e.preventDefault()
                      if (text === '') {
                          alertContext.setAlertMy('search cant be empty', 'light')
                      } else {
                          searchUsers(text).then(() => {
                              setText('')
                          })

                      }

                  }}>

                <input type="text" name="text" placeholder='Search for user ...'
                       value={text}  /* bound input to local state */
                       onChange={(e) => {
                           setText(e.target.value)  /* grub text for form */
                       }}
                />

                <button className='btn btn-dark btn-block' type='submit'>search</button>
            </form>
            <br/>

            {
                (users.length > 0) &&
                <button
                    className='btn btn-light btn-block'
                    onClick={clearData}>Clear</button>
            }
        </div>
    )
}

export default Search