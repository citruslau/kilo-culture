import React from 'react'
import css from './Orders.module.css'

const Orders = () => {
    return (
        <div className={`${css.container} ${css.stylizedImage}`}>
            <div className={css.overlay}>
                <img src="./kiloKulture_Logo.svg" alt="Kilo Kulture Logo" className={css.logo} />
                <span className={css.overlayText}>Welcome to Kilo Kulture</span>
            </div>
        </div>
    )
}

export default Orders
