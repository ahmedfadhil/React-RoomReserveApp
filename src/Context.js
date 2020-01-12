import React, { Component } from 'react'

const RoomContext = React.createContext();
// <RoomContext.Provider value={obj}/>
// <RoomContext.Consumer value={obj}/>
export default class RoomProvider extends Component {
    state = {
        greeting: 'hello world',
        name: "John"
    }
    render() {
        return (
            <RoomContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}
const RoomConsumer = RoomContext.Consumer;

export {
    RoomContext,
    RoomProvider,
    RoomConsumer
}
