import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useTheme } from './theme/useTheme';

import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';

import { classNames } from './helpers/classNames/classNames';

import './styles/index.scss';

const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPageAsync />} />
                    <Route path='/' element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App