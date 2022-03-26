import React from 'react';
import PersonCard from './PersonCard/PersonCard';
import styles from './PersonPage.module.css'
import PersonSidebar from './PersonSidebar/PersonSidebar';
import ServiceCategory from './ServiceCategory/ServiceCategory';
// import OrderCategory from './OrderCategory/OrderCategory';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadOrganization, loadServices } from '../../redux/features/organization';
import { fetchCategories } from '../../redux/features/categories';


const PersonPage = () => {
    const dispatch = useDispatch()
    const loadingPerson = useSelector(state=>state.organization.loadingPerson)
    const loadingService = useSelector(state=>state.organization.loadingService)
    const user = useSelector(state=>state.organization.user)
    const services = useSelector(state=>state.organization.services)
    const service = useSelector(state=>state.addService.service)
    // console.log(userCity)


    useEffect(() => {
        dispatch(loadOrganization())
        dispatch(loadServices())
        dispatch(fetchCategories())
    }, [dispatch])

    


    return (
        <div className={styles.personPage}>
            <div className={styles.wrapper}>
                {/* <PersonNavigate /> */}
                <PersonSidebar />

                {!user ? <div style={{fontSize: '72px'}}>Загрузка</div> : <PersonCard />}
            </div>
            <div className={styles.personService}>
                {!services ? <div style={{fontSize: '72px'}}>Загрузка</div> : <ServiceCategory />}
                {/* <OrderCategory /> */}
            </div>
        </div>
    );
};

export default PersonPage;