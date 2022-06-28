import React, { useEffect } from 'react';
import { getUser } from '../service/api';



const AllUser = () => {

    useEffect(() => {
        getAllUser();
    }, []);

    const getAllUser = async () => {
        await getUser();
    };

    return (
        <div className='all_user'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>E-mail</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    )
}

export default AllUser;