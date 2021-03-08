import React{useRef,useState,useMemo,useCallback} from 'react';
import UserList from './userList';
import CreateUser from './CreateUser';

function countActiveUsers(users){
    console.log('활성 사용자 수를 세는중');
    return users.filter(user => user.active).length
}

const initialState = {
    inputs: {
        username: '',
        email: ''
    },
    users: [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
        }
    ]
}

function reducer(state,action){
    switch (action.type){
        case 'CHANGE_INPUT':
            return{
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            }
        default :
            return state;
    }
}

function App() {
    const [state,dispath] = useReducer(reducer,initialState);
    const {users} = state;
    const {username,email} = state.inputs;

    const onChange = useCallback(e => {
        const {name,value} = e.target;
        dispath({
            type
        })
    })
    return (
    <div>
        <CreateUser username={username} email={email}/>
        <UserList users={[users]}/>
        <div>활성화사용자 수 : 0</div>
    </div>
  );
}

export default App;
