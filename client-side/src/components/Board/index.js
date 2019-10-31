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
                            const now = new Date().toLocaleTimeString();
                            const nowColon = now.indexOf(':');
                            const nowHour = now.substring(0, 2)
                            const nowMinutes = now.substring(nowColon + 1, nowColon + 3);

                            const startColon = train.trainStart.indexOf(':');
                            const startHour = train.trainStart.substring(0, startColon);
                            const startMinutes = train.trainStart.substring(startColon + 1);

                            const minDiff = nowMinutes - startMinutes;
                            const remainder = minDiff % train.trainFrequency;
                            const minutesAway = train.trainFrequency - remainder;
                            const nextMinutes = minutesAway + parseInt(nowMinutes);
                            train.wait = minutesAway;
                            train.next = `${nowHour}${nextMinutes}`


                            return(
                                <tr key={train.id}>
                                    <td>
                                        {train.trainName}
                                    </td>
                                    <td>
                                        {train.trainDestination}
                                    </td>
                                    <td className={train.wait <= 5 ? "leaving-soon" : null}>
                                        {train.wait} Minute(s)
                                    </td>
                                    <td>
                                        {train.next}
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