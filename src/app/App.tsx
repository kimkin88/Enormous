import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

import { classNames } from 'shared/lib/classNames/classNames';

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
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/' element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App