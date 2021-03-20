import React, { Component } from 'react';
import { Select } from 'antd';

const { Option } = Select;

export default class YouName extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
    }

    render() {
        return (
            <>
                <Select defaultValue={{}} style={{ width: 120 }} allowClear labelInValue onChange={(e) => console.log(e, '-e')}>
                    <Option value="1">Lucy</Option>
                    <Option value="2">petr</Option>
                    <Option value="3">swag</Option>
                </Select>
            </>
        );
    }
}