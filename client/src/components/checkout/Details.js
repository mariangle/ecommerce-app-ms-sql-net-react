import React from 'react';
import { useUser} from "../../utils/hooks/useUser"
import { useFormContext } from 'react-hook-form';

function Details() {
    const { currentUser } = useUser();

    return (
        <div>
            <h1>Contact Information</h1>
            <label>
                Email
                <input value={currentUser?.email} readOnly />
            </label>
            <h2>Shipping Address</h2>
            <div className="divider">
                <label>
                    First Name
                    <input value={currentUser?.firstName} readOnly />
                </label>
                <label>
                    Last Name
                    <input value={currentUser?.lastName} readOnly />
                </label>
            </div>
            <label>
                Phone Number
                <input value={currentUser?.phone} required />
            </label>
            <label>
                Address
                <input value={currentUser?.address} required />
            </label>
            <div className='divider'>
                <label>
                    City
                    <input value={currentUser?.city} required />
                </label>
                <label>
                    Postal Code
                    <input value={currentUser?.postalCode} required />
                </label>
            </div>
        </div>
    );
}

export default Details;
