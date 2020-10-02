import React from 'react';
import '../App.css';
import { Table } from 'reactstrap';

const PastRecord = (props) => {
    return (
        <Table responsive >
            <thead >
                <tr>
                    <th>Date</th>
                    <th>Tasks</th>
                    <th>Planned Slots</th>
                    <th>Actual Slots</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                <tr>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                <tr>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default PastRecord;