import React from 'react';
import firebase from '../../Firebase';
import { Table } from 'reactstrap';

import { useCollectionData } from 'react-firebase-hooks/firestore';

const getQuery = firebase.firestore().collection('trains');

const options = {
    "idField" : "id"
}

const Board = (props) => {
    const [trains, loading, error] = useCollectionData(getQuery, options);

    if (loading) return "CHOO CHOO! (Train's Coming!)";
    if (error) return error;

    return (
        
        <Table>
            <thead>
                <tr>
                    <th>Train</th>
                    <th>Destination</th>
                    <th>Frequency</th>
                    <th>Next Arrival</th>
                    <th>In...</th>
                </tr>
            </thead>
            <tbody>
                {
                    trains ?
                        trains.map((train) => {

                            return(
                                <tr key={train.id}>
                                    <td>
                                        {train.trainName}
                                    </td>
                                    <td>
                                        {train.trainDestination}
                                    </td>
                                    <td>
                                        {train.trainFrequency}
                                    </td>
                                    <td>
                                        {99}
                                        {/* {train.nextArrival} */}
                                    </td>
                                    <td>
                                        {99}
                                        {/* {train.wait} */}
                                    </td>
                                </tr>
                            ) 
                        })
                        :
                        null
                }
            </tbody>
        </Table>
                
            
            
    );
}

export default Board;