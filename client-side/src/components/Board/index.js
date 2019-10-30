import React from 'react';
import firebase from '../../Firebase';
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
        <div>
            {
                trains ?
                    trains.map((train) => {
                        return <div key={train.id}>{train.name}</div>
                    })
                    :
                    null
            }
        </div>
    );
}

export default Board;