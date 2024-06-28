import React from 'react'
import { sidebarData } from './SidebarData'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const Logout = () => {
        window.location.reload();
        localStorage.clear();
        window.location.href = "/";
    }

    return (
        <>
            <div class="border-end border-1" style={{ height: "100%" }}>
                <ul class="list-group">
                    {sidebarData.map((val, index) => {
                        return (
                            <li class="list-group-item list-group-item-action border-0 p-3 fw-semibold">
                                <Link to={`${val.path}`} class="nav-link">{val.name}</Link>
                            </li>
                        )
                    })}
                    <li class="list-group-item list-group-item-action border-0 p-3 fw-semibold">
                        <Link class="nav-link" onClick={Logout}>Logout</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar