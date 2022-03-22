import React from 'react';
import PersonCard from './PersonCard/PersonCard';
import styles from './PersonPage.module.css'
import PersonSidebar from './PersonSidebar/PersonSidebar';
import ServiceData from './ServiceData/ServiceData';
const PersonPage = () => {
    return (
        <div className={styles.personPage}>
            <h1>Личный кабинет</h1>
            <PersonCard />
            <div className={styles.personService}>
                <PersonSidebar />
                <ServiceData />
            </div>
        </div>
    );
};

export default PersonPage;