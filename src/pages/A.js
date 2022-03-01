import React, { useState } from 'react'
import B from './B'

import F from './F';



export default function A() {
    //State / varible

    const friendName = 'payal';
    const friendName2 = '';
    const friendName1 = 'banwari';
    const friendName6 = 'banwari';
    const friendName7 = 'banwari';
    const friendName8 = 'banwari';
    const friendName9 = 'banwari';
    const friendName10 = 'banwari';
    const friendName11 = 'banwari';
    const friendName12 = 'banwari';
    const friendName13 = 'banwari';
    const friendName14 = 'banwari';
    const friendName15 = 'banwari';
    
    const [friendName3, setFriendName] = useState('madhu');
    const [friendName5, setFriendName5] = useState(['pppp','ewerwer','were']);

    /* const [friendName4, setFriendName4] =useState([ 

                { 
                     name:'payal',
                    surname:'Dhakad',
                    address:'Doulatpura',
                    contact:'1234556722'
                },
                { 
                    name:'madhu',
                    surname:'Dhakad',
                    address:'Doulatpura',
                    contact:'98675757557'
                 },
                { 
                    name:'banwari',
                    surname:'Dhakad',
                    address:'Doulatpura',
                    contact:'456456456456'
                },
                { 
                    name:'manisha',
                    surname:'Dhakad',
                    address:'Doulatpura',
                    contact:'353453463456'
                    }
    
        
                

     ]); */

    //function


   //return statement jsx 
  return (
      <>
    <h1>goodmorning</h1>
    <B friendName ={ friendName}/> 
   
    <F friendName5={friendName5}/>
    
   
    
    </>
  )
}
