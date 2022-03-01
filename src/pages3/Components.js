import React from 'react'
import Components2 from './Components2';
//import Components3 from './Components3';
//import Components4 from './Components4';


export default function Components() {

    //state
        const  comp = [
            { 
                id: 1,
                name:'payal',
                surname:'Dhakad',
                address:'Doulatpura',
                contact:'9660378932'

            },
            { 
                id: 2,
                name:'madhu',
                surname:'Dhakad',
                address:'jawad',
                contact:'123456'

            },
            { 
                id: 3,
                name:'manisha',
                surname:'Dhakad',
                address:'neemuch',
                contact:'353245224'

            },
            {
                id: 4,
                name:'banwari',
                surname:'Dhakad',
                address:'tumdiya',
                contact:'1234564574567456'

            }
        ];
    //function

    //return statement jsx
  return (
      <>
            <h1>List:-</h1>
            <ol> 
                {comp.map((p)=><Components2
                  key={p.id}
                  surname={p.surname} 
                  name={p.name}
                  address={p.address}
                  contact={p.contact}

                  />)}
            </ol>
            {/* <ul> 
                {comp.map((b)=><Components3
                  key={b.id}
                  surname={b.surname} 
                  name={b.name}
                  address={b.address}
                  contact={b.contact}

                  />)}
            </ul>
            <ol> 
                {comp.map((c)=><Components4
                  key={c.id}
                  surname={c.surname} 
                  name={c.name}
                  address={c.address}
                  contact={c.contact}

                  />)}
            </ol> */}
      </>
  )
}
