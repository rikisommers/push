import React from 'react';
import { navigate } from 'gatsby-link'


function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

export default function Capture() {

    const [state, setState] = React.useState({})

    const handleChange = (e) => {
      setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': form.getAttribute('name'),
            ...state,
          }),
        })
          .then(() => navigate(form.getAttribute('action')))
          .catch((error) => alert(error))
    }

 
    return (
     

          <form
                    name="contact"
                    method="post"
                    action="/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                >

       

            

                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                    <label>
                        Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                    </label>
                    </p>


                    <div class="input-field 1">
                        <input type="text" name="name" placeholder="your name *" onChange={handleChange} />
                    </div>

                    <div class="input-field">
                        <input type="email" name="email" placeholder="your email *" onChange={handleChange} />
                    </div>

                    <div class="input-field">
                        <input type="text" name="company" placeholder="business / product name" onChange={handleChange} />
                    </div>

                    <div class="input-field">
                        <input type="text" name="website" placeholder="website url" onChange={handleChange} />
                    </div>


                    <div class="input-field">
                        <textarea name="message" placeholder="What can we help you with? *" onChange={handleChange} />
                    </div>

                    <p>
                    <button className="c-button" type="submit">Send</button>
                    </p>
                

                </form>







        
    )
}
