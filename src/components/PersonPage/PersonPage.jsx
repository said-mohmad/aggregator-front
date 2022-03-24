import React from 'react';
import PersonCard from './PersonCard/PersonCard';
import styles from './PersonPage.module.css'
import PersonSidebar from './PersonSidebar/PersonSidebar';
import ServiceCategory from './ServiceCategory/ServiceCategory';
// import OrderCategory from './OrderCategory/OrderCategory';

const PersonPage = () => {
    return (
        <div className={styles.personPage}>
            {/* <h1 style={{fontSize:'44px', margin:'15px 0'}}>Личный кабинет</h1> */}
            <PersonCard />
            <div className={styles.personService}>
                <PersonSidebar />
                <ServiceCategory />
                {/* <OrderCategory /> */}
            </div>
        </div>
    );
};

export default PersonPage;