import React from 'react'
import { useTranslation } from 'react-i18next'

const Header = () => {
    const { t } = useTranslation()
    return (
        <header className='header bg-slate-900 py-3'>
            <div className="container d-flex align-items-center justify-content-between">
                <h1 className='fs-1 text-white m-0'>{t("Quizapp")}</h1>
                <div className="header-box d-flex align-items-center rounded-3 p-3 bg-cyan-400">
                    <i className="fa-solid fa-cloud-arrow-down mr-5 text-white"></i>
                    <p className='text-white fs-5'>Install App</p>
                </div>
            </div>
        </header>
    )
}

export default Header