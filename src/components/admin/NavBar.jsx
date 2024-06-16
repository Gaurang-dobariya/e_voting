import React from 'react'

const NavBar = () => {
    return (
        <>

            <header class="p-3 border-bottom">
                <div class="container-fluid">
                    <div class="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-between">
                        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                            Navbar
                        </a>

                        <form class="col-12  col-lg-auto mb-3 mb-lg-0 me-lg-3" style={{width:"25%"}} role="search">
                            <input type="search" class="form-control rounded-pill text-center" placeholder="Search..." aria-label="Search"/>
                        </form>

                        <div class="dropdown text-end">
                            <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"/>
                            </a>
                            <ul class="dropdown-menu text-small">
                                <li><a class="dropdown-item" href="#">New project...</a></li>
                                <li><a class="dropdown-item" href="#">Settings</a></li>
                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default NavBar