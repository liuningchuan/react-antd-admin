import React, { Component } from 'react';

import BaseLayout from '../../layouts/BaseLayout';
import BasicColumn from '../../components/bizcharts/BasicColumn';
import Labelline from '../../components/bizcharts/LabelLine';
import EchartsTest from '../../components/echarts/BasicColumn';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.data = [{
            year: "1951 年",
            sales: 38
        }, {
            year: "1952 年",
            sales: 52
        }, {
            year: "1956 年",
            sales: 61
        }, {
            year: "1957 年",
            sales: 145
        }, {
            year: "1958 年",
            sales: 48
        }, {
            year: "1959 年",
            sales: 38
        }, {
            year: "1960 年",
            sales: 38
        }, {
            year: "1962 年",
            sales: 38
        }];
    }

    render() {
        return (
            <BaseLayout>
                <BasicColumn data={this.data} />
                <Labelline />
                <EchartsTest />
            </BaseLayout>
        );
    }
}

export default Dashboard;