import React, {Component} from 'react';
import {Card , Button} from 'react-bootstrap';
import {environment} from '../environment/environment'
import '../App.css';


class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
          email:'',
          csv:''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        if (event.target.name === 'email') {
            this.setState({ email: event.target.value });
        }
        if (event.target.name === 'csv') {
            this.setState({ csv: event.target.value });
        }
    }
  
    handleSubmit(event) {
     const data ={
         email:this.state.email,
         csv : this.state.csv
     }
     console.log(data)
      event.preventDefault();
        fetch(environment.FORM_DATA_API, {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({data: data})
        });
        this.setState({value: ''});
    }
  
    render() {
     const { email, csv} = this.state;
      return (
        <Card className="center-card">
            <Card.Header as="h5">AGRMS</Card.Header>
            <Card.Body>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" placeholder="TO: Enter Email" name="email" value={email} onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="file" placeholder="choose csv file" name="csv" value={csv} onChange={this.handleChange} />
                    </div>
                    <Button type="submit" variant="outline-primary" >Send</Button>
                </form>
            </Card.Body>
       </Card>
      );
    }
  }
  
  export default Form;