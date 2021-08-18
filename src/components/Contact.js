import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react'

const Contact = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const encode = (data) => {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),

      })
        .then(setTimeout(() => alert("Message sent!"),1))
        .catch((error) => alert(error));
      
    }

    return (
        <section id='contact'>
            <h1 id='contact_title'>
                Contact me
            </h1>
            <div>
                <h2 class='contact_section_title'>
                    Email
                </h2>
                <a href="mailto:maurice@gedney.uk">
                    maurice@gedney.uk
                </a>
            </div>
            <form netlify name="contact" onSubmit={handleSubmit} method='POST'>
                <h2  class='contact_section_title'>
                    Hire Me
                </h2>
                <p>
                    If you have any question please do get in touch
                </p>
                <div id='contact_form_container'>
                    <div class='contact_section_container'>
                        <label htmlFor="name" class='contact_label'>
                            Name
                        </label>
                        <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div class='contact_section_container'>
                        <label htmlFor="email" class='contact_label'>
                            Email
                        </label>
                        <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div class='contact_section_container'>
                        <label htmlFor="message" class='contact_label'>
                            Message
                        </label>
                        <textarea id="message" name="message" onChange={(e) => setMessage(e.target.value)}/>
                    </div>
                    <div  id='contact_submit_container'>
                        <button type="submit" id='contact_submit'>
                            Submit
                        </button>
                        <button type="reset" id='contact_reset'>
                            Clear
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default Contact;