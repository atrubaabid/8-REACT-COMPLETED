import React, { useState } from 'react'
import Header from '../Common/Header'


export default function Home() {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    let handleform = (e) => {
        e.preventDefault()
        
        // console.log(e.target.ii.value);
        // console.log(e.target.ee.value);

        console.log(username, password);

    }


    return (
        <div>
            <Header />
            <h1>Home</h1>

            <div className='form'>
                <form onSubmit={handleform}>
                    <div>
                        <label>Username <br />
                            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} name='ii' />
                        </label>
                    </div>

                    <div>
                        <label>Password <br />
                            <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} name='ee' />
                        </label>
                    </div>

                    <div>
                        <button>Save</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
