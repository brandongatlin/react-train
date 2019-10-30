import React, {useState} from 'react';
import firebase from '../../Firebase';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const TrainInput = (props)=> {

   const [trainName, setTrainName] = useState("");
   const [trainDestination, setTrainDestination] = useState("");
   const [trainFrequency, setTrainFrequency] = useState("");
   const [trainStart, setTrainStart] = useState("");

    return(
        <Form
            onSubmit={(e)=> {
                e.preventDefault();
                const trainsRef = firebase.firestore().collection('trains');
                const newTrain = {
                    trainName,
                    trainDestination,
                    trainFrequency,
                    trainStart
                }
                trainsRef.add(newTrain);

                setTrainName('');
                setTrainDestination('');
                setTrainFrequency('');
                setTrainStart('');
            }}
        >
            <Row form>
                <Col md={3}>
                    <FormGroup>
                        <Label for='trainName'>Train</Label>
                        <Input value={trainName} type='text' name='trainName' id='trainName' placeholder='New Train Name' 
                        onChange={(e)=> {setTrainName(e.currentTarget.value)}}/>
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label for='trainDestination'>Destination</Label>
                        <Input  value={trainDestination} type='text' name='trainDestination' id='trainDestination' placeholder='New Train Destination' 
                        onChange={(e)=> {setTrainDestination(e.currentTarget.value)}}/>
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                        <Label for='trainFrequency'>Frequency (minutes)</Label>
                        <Input  value={trainFrequency} type='number' name='trainFrequency' id='trainFrequency' placeholder='New Train Frequency' 
                        onChange={(e)=> {setTrainFrequency(e.currentTarget.value)}}/>
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                        <Label for='trainStart'>First Train</Label>
                        <Input  value={trainStart} type='time' name='trainStart' id='trainStart' placeholder='New Train Start Time' 
                        onChange={(e)=> {setTrainStart(e.currentTarget.value)}}/>
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <Button color='success' type='submit'>Submit</Button>
                </Col>
            </Row>
        </Form>
    )
    
}

export default TrainInput;