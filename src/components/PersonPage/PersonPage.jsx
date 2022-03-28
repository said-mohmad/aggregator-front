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
import Loader from './Loader/Loader';
import { fetchOrders } from '../../redux/features/orders';
import OrderCategory from './ServiceCategory/OrderCategory';
import { useState } from 'react';


const PersonPage = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.organization.user)
    const services = useSelector(state => state.organization.services)
    const orders = useSelector(state => state.orders.orders)
    // console.log(userCity)

    const [go, setGo] = useState(true)


    const handleGo = () => {
        setGo(!go)
    }

    useEffect(() => {
        dispatch(loadOrganization())
        dispatch(loadServices())
        dispatch(fetchCategories())
    }, [dispatch])




    return (
        <div className={styles.personPage}>
            <div className={styles.wrapper}>

                {!user ? <div style={{ width: '100%', height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Loader /></div> : <><PersonSidebar go={go} handleGo={handleGo} /><PersonCard /></>}
            </div>
            <div style={{ backgroundColor: 'white', width: '100%', margin: 'auto'  }}>
                {!services || !orders || !user ? <div style={{ width: '100%', height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Loader /></div>
                    :
                    <div style={{ width: '1140px', margin: 'auto'  }}>
                        {go ? '' : <ServiceCategory />}
                        {go ? <OrderCategory /> : ''}
                    </div>
                }
            </div>
        </div>
    );
};

export default PersonPage;