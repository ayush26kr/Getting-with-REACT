import React from 'react'
import Child from './Child'
function Parent(){
    return <div>
        <h1>This is a Parent Component</h1>
        <Child  country="India" name="Soccer"/>
    </div>
}
export default Parent