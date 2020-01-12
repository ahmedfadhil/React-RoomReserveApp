import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaShuttleVan, FaBeer, FaHiking } from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Coctails",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, distinctio."
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, distinctio."
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, distinctio."
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, distinctio."
            },
        ]
    }
    render() {
        return (
            <div>
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </div>
        )
    }
}
