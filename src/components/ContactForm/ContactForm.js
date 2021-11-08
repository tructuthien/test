import React from 'react'
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './Contact.css'

const ContactForm = () => {

    const [name, setName] = React.useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (

        <div style={{ padding: "0 50px" }}>

            <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>

            <div className="input-box">
                <FormControl variant="standard" sx={{ width: '100%' }}>
                    <InputLabel htmlFor="component-simple">Name</InputLabel>
                    <Input id="component-simple" value={name} onChange={handleChange} />
                </FormControl>
            </div>

            <div className="input-box">
                <FormControl variant="standard" sx={{ width: '100%' }}>
                    <InputLabel htmlFor="component-simple">Email Address</InputLabel>
                    <Input id="component-simple" value={name} onChange={handleChange} />
                </FormControl>
            </div>

            <div className="input-box">
                <FormControl variant="standard" sx={{ width: '100%' }}>
                    <InputLabel htmlFor="component-simple">Phone Number</InputLabel>
                    <Input id="component-simple" value={name} onChange={handleChange} />
                </FormControl>
            </div>

            <div className="input-box">
                <TextField
                    id="standard-multiline-static"
                    label="Message"
                    multiline
                    rows={7}
                    variant="standard"
                    sx={{ width: '100%' }}
                />
            </div>

            <Button variant="contained"
                size="large"
                endIcon={<SendIcon />}
                sx={{
                    backgroundColor: '#0085a1',
                    margin: '100px 0 50px 0',
                    borderRadius: 0
                }}>
                Send
            </Button>

        </div>

    )
    
}

export default ContactForm