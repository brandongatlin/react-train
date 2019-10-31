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
        
        <Table id='train-board' bordered hover striped>
            <thead>
                <tr>
                    <th>Train</th>
                    <th>Destination</th>
                    <th>Arriving In...</th>
                    <th>Next Arrival</th>
                    <th>Frequency</th>
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
                                    <td className={train.wait <= 5 ? "leaving-soon" : null}>
                                        {5} Minute(s)
                                        {/* {train.wait} */}
                                    </td>
                                    <td>
                                        {train.trainStart}
                                    </td>
                                    <td>
                                        Every {train.trainFrequency} Minute(s)
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