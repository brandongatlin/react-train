import React from 'react';
import firebase from '../../Firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const options = {
    "idField" : "id"
}

const Board = (props) => {
    const [values, loading, error] = useCollectionData(firebase.firestore().collection('trains'), options);

    console.log(values);

    if (loading) return "loading";
    if (error) return error;


    return (
        <div>
            {
                values ?
                    values.map((train) => {
                        return <div key={train.id}>{train.name}</div>
                    })
                    :
                    null
            }
        </div>
    );
}

export default Board;