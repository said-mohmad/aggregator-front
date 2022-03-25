import React from 'react';
import PersonCard from './PersonCard/PersonCard';
import styles from './PersonPage.module.css'
import PersonSidebar from './PersonSidebar/PersonSidebar';
import ServiceCategory from './ServiceCategory/ServiceCategory';
// import OrderCategory from './OrderCategory/OrderCategory';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadOrganization, loadServices } from '../../redux/features/organization';


const PersonPage = () => {
    const dispatch = useDispatch()
    const loadingPerson = useSelector(state=>state.organization.loadingPerson)
    const loadingService = useSelector(state=>state.organization.loadingService)
    const userCity = useSelector(state=>state.organization.user.city)


    useEffect(() => {
        dispatch(loadOrganization())
        dispatch(loadServices())
    }, [dispatch])

    


    return (
        <div className={styles.personPage}>
            <div className={styles.wrapper}>
                <PersonSidebar />
                {loadingPerson ? <div style={{fontSize: '72px'}}>Загрузка</div> : <PersonCard />}
            </div>
            <div className={styles.personService}>
                {loadingService ? <div style={{fontSize: '72px'}}>Загрузка</div> : <ServiceCategory userCity={userCity} />}
                {/* <OrderCategory /> */}
            </div>
        </div>
    );
};

export default PersonPage;