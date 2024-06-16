import React from 'react'
import { sidebarData } from './SidebarData'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div class="border-end border-1" style={{height:"100vh"}}>
                <ul class="list-group">
                    {sidebarData.map((val, index) => {
                        return (
                            <li class="list-group-item list-group-item-action border-0">
                                <Link to={`${val.path}`} class="nav-link">{val.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Sidebar