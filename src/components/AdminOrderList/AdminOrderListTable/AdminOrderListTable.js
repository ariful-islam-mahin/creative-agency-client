import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const AdminOrderListTable = ({orderList}) => {
    return (
        <div className="px-3">
            <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email ID</th>
                    <th scope="col">Service</th>
                    <th scope="col">Project Details</th>
                    </tr>
                </thead>
                {
                    orderList.length === 0 && <CircularProgress className="m-4" />
                }
                <tbody className="bg-white">
                    {
                        orderList.map(data => 
                                <tr key={data._id}>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.serviceName}</td>
                                    <td>{data.projectDetail}</td>
                                </tr> 
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AdminOrderListTable;