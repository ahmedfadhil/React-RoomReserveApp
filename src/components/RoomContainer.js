import React from 'react'
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomList'
import { RoomConsumer } from '../Context'

export default function RoomsContainer() {
    return (
        <RoomConsumer>
            {

            }
        </RoomConsumer>
        <div>
            hello from rooms container
            <RoomsFilter />
            <RoomsList />
        </div>
    )
}
