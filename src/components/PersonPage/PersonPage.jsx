import React from 'react';
import PersonCard from './PersonCard/PersonCard';
import styles from './PersonPage.module.css'
import PersonSidebar from './PersonSidebar/PersonSidebar';
import ServiceCategory from './ServiceCategory/ServiceCategory';
// import OrderCategory from './OrderCategory/OrderCategory';

const PersonPage = () => {
    return (
        <div className={styles.personPage}>
            <div className={styles.wrapper}>
                <PersonSidebar />
                <PersonCard />
            </div>
            <div className={styles.personService}>
                <ServiceCategory />
                {/* <OrderCategory /> */}
            </div>
        </div>
    );
};

export default PersonPage;