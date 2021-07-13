import React from 'react'
import { Link } from 'gatsby'

export default function Contact() {
    return (
        <div className="bg-primary flex flex-col md:flex-row lg:flex-row justify-around py-20 items-center">
            <div className="text-white">
                <p className="text-4xl">¿Tienes comentarios</p>
                <p className="text-2xl pt-4">O denuncias ?</p>
            </div>      
            <div>
                <Link to="/contact" className="border-white border-2 text-white px-32 md:px-12 py-3 rounded-xl md:ml-0 my-8" type="submit">
                    Contactanos
                </Link>
            </div>      
        </div>
    )
}
