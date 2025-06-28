import { useState } from "react";
import axios from "axios";
import "./form.css";

export default function FORM() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    document.querySelectorAll('.form-input').forEach(input => {
        input.addEventListener('input', () => {
            if (input.value) {
                input.classList.add('has-value');
            } else {
                input.classList.remove('has-value');
            }
        });
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setStatus('Sending...');
            await axios.post('http://localhost:8000/user/sendmail', formData);
            setStatus('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });

        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('Failed to send message.');
        }
    };

    return (
        <section className="section section-sm section-last bg-default text-left">
            <div className="container">
                <article className="title-classic">
                    <div className="title-classic-title">
                        <h3>Get in touch</h3>
                    </div>
                    <div className="title-classic-text">
                        <p>If you have any questions, just fill in the contact form, and we will answer you shortly.</p>
                    </div>
                </article>
                <form onSubmit={handleSubmit}>
                    <div className="row row-14 gutters-14">
                        <div className="col-md-4">
                            <div className="form-wrap">
                                <input
                                    className="form-input"
                                    id="contact-your-name-2"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <label className="form-label rd-input-label" htmlFor="contact-your-name-2">Your Name</label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-wrap">
                                <input
                                    className="form-input"
                                    id="contact-email-2"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <label className="form-label rd-input-label" htmlFor="contact-email-2">E-mail</label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-wrap">
                                <input
                                    className="form-input"
                                    id="contact-phone-2"
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <label className="form-label rd-input-label" htmlFor="contact-phone-2">Phone</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-wrap">
                                
                                <textarea
                                    className="form-input textarea-lg"
                                    id="contact-message-2"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                                <label className="form-label rd-input-label" htmlFor="contact-message-2">Message</label>
                            </div>
                        </div>
                    </div>
                    <button className="button button-primary button-pipaluk" type="submit">Send Message</button>
                </form>
                {status && <p style={{color:'white', backgroundColor: status=='Failed to send message.'? "rgba(255,0,0,0.7)" : status=='Sending...'?"rgba(255,127,0,0.7)":"rgba(11,156,49,0.7)"}}>{status}</p>}
            </div>
        </section>
    );
}
