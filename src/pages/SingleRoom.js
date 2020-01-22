import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import moduleName from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../Context'
export default class SingleRoom extends Component {
    constructor(props) {
        super(props)

        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }
    // componentDidMount() { }
    static contextType = RoomContext
    render() {
        const { getRoom } = this.contextType
        return (
            <div>
                <h3>hello from single room</h3>

            </div>
        )
    }
}
