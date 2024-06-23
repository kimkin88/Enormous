import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

// КОМПОНЕНТ ДЛЯ ТЕСТИРОВАНИЯ ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);
    const throwErr = () => setError(true);
    const { t } = useTranslation();
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={throwErr}>
            {t('Кинуть ошибку')}
        </Button>
    );
};
