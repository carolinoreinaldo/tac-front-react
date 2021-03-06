import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#/home">Home
                                <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/home">Edit User</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/home">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;