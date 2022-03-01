//import Aria
import React, { createContext } from 'react'
import {useState} from 'react'
import Comp2 from './Comp2'

const UserContext = createContext();

export default function Comp1() {

    //state
        const [user, setUser] = useState('payal dhakad')
    //function 


    //reurn statement jsx


        return (
            <UserContext.Provider>
              <h1>{`Hello ${user}!`}</h1>
              <Comp2 user={user} />
            </UserContext.Provider>
          );
        }
