import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const UserModal = ({ open, onClose, onSave, initialData }) => {
    const [user, setUser] = useState(initialData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'firstName' || name === 'lastName') {
            setUser(prev => ({
                ...prev,
                name: {
                    ...prev.name,
                    [name]: value,
                },
            }));
        } else {
            setUser(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSave = () => {
        onSave(user);
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box className="modal-box">
                <h2 style={{ color: 'white' }}>{initialData.id ? 'Edit User' : 'Add User'}</h2>
                <TextField
                    label="First Name"
                    name="firstName"
                    value={user.name.firstName}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ style: { color: '#ccc' } }}
                    InputProps={{ style: { color: 'white' } }}
                />
                <TextField
                    label="Last Name"
                    name="lastName"
                    value={user.name.lastName}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ style: { color: '#ccc' } }}
                    InputProps={{ style: { color: 'white' } }}
                />
                <TextField
                    label="Membership Type"
                    name="membershipType"
                    value={user.membershipType}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ style: { color: '#ccc' } }}
                    InputProps={{ style: { color: 'white' } }}
                />
                <Button onClick={handleSave} variant="contained" color="primary">
                    Save
                </Button>
            </Box>
        </Modal>
    );
};

export default UserModal;
