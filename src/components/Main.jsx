import React, { Component } from 'react'
import './css/MainCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Alert } from 'react-bootstrap';

export class Main extends Component {


    componentDidMount(){
        var content = localStorage.getItem('content');
        document.getElementById('edit_content').value = content;
        var now = localStorage.getItem('date');
        document.getElementById('edit_date').setAttribute('placeholder', 'Last updated: ' + now );
    }

    

    render() {
        

        var setDate = ()=> {

            let now = new Date;
            now = now.toLocaleString();
            document.getElementById('edit_date').setAttribute('placeholder', 'Last updated: ' + now );
            localStorage.setItem('date', now);

        }

        var save = ()=>{
            var content = document.getElementById('edit_content').value;
            localStorage.setItem('content', content);

            setDate();            

        }

        var clear = ()=>{
            document.getElementById('edit_content').value = '';
            localStorage.setItem('content', '');
        }
        
        var copy = ()=>{
            document.getElementById('edit_content').select();
            document.execCommand("Copy");

            alert('클립보드에 복사 완료.');

        }


        return (
            <div>
                
                
                
                <div className='box'>

                <div className='menu'>
                    <Button variant="dark" onClick={()=>{clear()}}>Clear</Button>
                    <Button variant="dark" onClick={()=>{copy()}}>Copy</Button>
                    <Button variant="dark" onClick={()=>{save()}}>Save</Button>
                </div>

    


                    <Form.Control id='edit_date' type="text" placeholder="" disabled />
                    <Form.Control onChange={ ()=>{save()} } id='edit_content' as="textarea" rows={20} style={ {resize:'none'} } />
                </div>

            </div>
        )
    }
}

export default Main
