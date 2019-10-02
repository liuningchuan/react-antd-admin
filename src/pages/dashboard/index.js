import React, {Component} from 'react';

import BaseLayout from '../../layouts/BaseLayout';
import Basiccolumn from '../../components/bizcharts/BasicColumn';

class Dashboard extends Component {
    
    render() {
        return (
            <BaseLayout>
                <Basiccolumn/>
            </BaseLayout>
        );
    }
}

export default Dashboard;