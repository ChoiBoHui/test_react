import React, { useState, useEffect } from 'react';
// https://proglish.tistory.com/165?category=951170
const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
    const [users, setUsers] = useState([]);

    // url주소 가져오기 
    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
    };

    // [] = 사용하지 않으면 데이터가 무한으로 reload된다. 
    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h3>github users</h3>
            <ul className='users'>
                {users.map((user) => {
                    const { id, login, avatar_url, html_url } = user;
                    return (
                        <li key={id}>
                            <img src={avatar_url} alt={login} />
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url}>profile</a>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default UseEffectFetchData;