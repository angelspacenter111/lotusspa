"use client";
import { useState } from 'react'
import Link from "next/link"
import { name } from '@/app/info'
const Navigation = () => {

    const [manuclass, setmanuclass] = useState('hide')

    const manuhandler = () => {
        if (manuclass == 'show') {
            setmanuclass('hide')
        } else {
            setmanuclass('show')
        }
    }

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <Link className="navbar-brand" href="/">{name}</Link>
                <button className="navbar-toggler" type="button" onClick={manuhandler}>
                    <span className="navbar-toggler-icon" />
                </button>
                <div className={"collapse navbar-collapse " + manuclass} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/services">Services</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation