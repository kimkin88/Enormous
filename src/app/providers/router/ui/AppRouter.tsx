import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => (
    <Suspense fallback={<div>Загрузка...</div>}>
        <div className="page-wrapper">
            <Routes>
                {Object.values(routeConfig).map((route) => (
                    <Route key={route.path} {...route} />
                ))}
            </Routes>
        </div>
    </Suspense>
);
