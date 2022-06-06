import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

function HomePage() {
    return (
    <div className="page-countainer">
        <PageHeader title="Foodapp" />
        <p>test</p>
        <p>Kijk <Link to="/Page1">hier</Link> om op pagina 1 te kijken </p>
    </div>
  );
}

export default HomePage;
