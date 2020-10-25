import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App = () => {
    const [item, setItem] = useState("");
    const [items, setItems] = useState([]);

    const inputEvents = (event) => {
        setItem(event.target.value);
    };
    
    const listItems = () => {
        setItems((oldItems) => {
            return [...oldItems, item];
        });
        setItem("");
    };
    const delItems = (id) => {
        // console.log('delete')
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    };

    return(
        <reactFragment>
            <div>
                <div><h1>ToDoList</h1></div>
                <div>
                    <input type="text" placeholder="Add an item" onChange={inputEvents} value={item} />
                    <button onClick={listItems}>+</button>
                </div>
                <div>
                    <ol>
                        {
                        items.map( (itemsValue, index) => {
                           return <ToDoList key={index} id={index} text={itemsValue} onSelect = {delItems}/>
                        })
                        }

                       
                    </ol>
                </div>
            </div>
        </reactFragment>
    );
};
export default App;