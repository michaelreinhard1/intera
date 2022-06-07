import React from 'react'
import './NotFound.css'
import useTitle from '../../../core/hooks/useTitle';
import { t } from 'i18next';

const NotFound = () => {
useTitle(t('notfound.title'));

  return (
    <div className="NotFound">
        {/* Create a 404 error landing page */}
        <h1>404</h1>
        <h2>Page not found</h2>
    </div>
  )
}

export default NotFound