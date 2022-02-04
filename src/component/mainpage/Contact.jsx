import React from 'react';
import AbsContent from './AbsContent';
import Footer2 from '../Footer2';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Contact = () => {
    const containerStyle = {
        width: '100%',
        height: '450px'
    };

    const center = {
        lat: 24.363588,
        lng: 88.624138
    };

    const ContactInfo = (props) => {
        return (
            <>
                <div className='contact_all d-flex'>
                    <h6>{props.title}</h6>
                    <div className='d-flex flex-column' style={{ width: '160px', textAlign: 'right' }}>
                        <p>{props.para1}</p>
                        <p>{props.para2}</p>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <section className='contact'>
                <AbsContent title='CONTACT' para=' Contact' />
                <div className="form_div">
                    <div className="container">
                        <div className="map_div">
                            <LoadScript googleMapsApiKey="AIzaSyDRfY2p4iCttSplNkPL98Gzp2Grd3RJSdk">

                                <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={center}
                                    zoom={10}
                                />
                            </LoadScript>
                        </div>
                        <div className="contact_info_box">
                            <div className="row d-flex justify-content-between">
                                <div className='contact_sdiv col-4 col-md-4 col-lg-4'>
                                    <h3>Contact Info</h3>
                                    <ContactInfo title='Phone:' para1='+012 345 678 102' para2='+012 345 678 203' />
                                    <ContactInfo title='Email:' para1='email@here.com' para2='your@email.here' />
                                    <ContactInfo title='Address:' para1='Address goes here,' para2='street, Crossroad 123.' />
                                </div>
                                <div className='contact_info_right col-7 col-md-7 col-lg-7'>
                                    <h3>Get In Touch</h3>
                                    <div className='all_input_contact d-flex flex-column'>
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex flex-column col-5'>
                                                <label htmlFor="first name">First Name</label>
                                                <input type="text" />
                                            </div>
                                            <div className='d-flex flex-column col-5'>
                                                <label htmlFor="last name">Last Name</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <label htmlFor="Subject">Subject</label>
                                            <input type="text" />
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <label htmlFor="msg">Message</label>
                                            <textarea name="" id="" cols="20" rows="6"></textarea>
                                        </div>
                                        <button className='btn'>Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer2 />
            </section>
        </>
    )
}

export default Contact;
// AIzaSyDRfY2p4iCttSplNkPL98Gzp2Grd3RJSdk