import React from 'react';
import axios from "axios"
import * as qs from "query-string"
import { navigate } from 'gatsby-link'


// function encode(data) {
//     return Object.keys(data)
//       .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
//       .join('&')
//   }

  class Capture extends React.Component {

    constructor(props) {
        super(props)
        this.domRef = React.createRef()
        this.state = { feedbackMsg: null }
    }
    
    
      handleSubmit(event) {
            // Do not submit form via HTTP, since we're doing that via XHR request.
            event.preventDefault()
            // Loop through this component's refs (the fields) and add them to the
            // formData object. What we're left with is an object of key-value pairs
            // that represent the form data we want to send to Netlify.
            const formData = {}
            Object.keys(this.refs).map(key => (formData[key] = this.refs[key].value))

            // Set options for axios. The URL we're submitting to
            // (this.props.location.pathname) is the current page.
            const axiosOptions = {
            url: typeof window !== 'undefined' ? window.location.href : '',
            method: "post",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: qs.stringify(formData),
            }

            // Submit to Netlify. Upon success, set the feedback message and clear all
            // the fields within the form. Upon failure, keep the fields as they are,
            // but set the feedback message to show the error state.
            axios(axiosOptions)
            .then(response => {
            this.setState({
            feedbackMsg: "Form submitted successfully!",
            })
            this.domRef.current.reset()
            })
            .catch(err =>
            this.setState({
            feedbackMsg: "Form could not be submitted.",
            })
            )
      }
    
 

    // const handleSubmit = (e) => {

    //     console.log('farty bom bom')

      
 

    //     .then(() => {
    //         // this.setState({
    //         //   feedbackMsg: "Form submitted successfully!",
    //         // })
    //         alert(`Cheers we will get back to you asap`)
    //         this.domRef.current.reset()
    //     })
    //     .catch((error) => alert(error))
    // }

    render() {
        console.log(this.props.location);
    return (

        
        <div>
          {this.state.feedbackMsg && <p>{this.state.feedbackMsg}</p>}



        
        {/* <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field"
         */}
          <form ref={this.domRef} name="contact" method="POST" data-netlify="true" onSubmit={event => this.handleSubmit(event)}>
          
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                    <label>
                        Don’t fill this out: <input name="bot-field"  />
                    </label>
                    </p>


                    <div class="input-field 1">
                        <input type="text" name="name" required placeholder="your name *"  />
                    </div>

                    <div class="input-field">
                    {/* onChange={handleChange}  */}
                        <input type="email" name="email" required placeholder="your email *" />
                    </div>

                    <div class="input-field">
                        <input type="text" name="company" placeholder="business / product name"  />
                    </div>

                    <div class="input-field">
                        <input type="text" name="website" placeholder="website url"  />
                    </div>


                    <div class="input-field">
                        <textarea name="message" required placeholder="What can we help you with? *"  />
                    </div>

                    <p>
                    <button className="c-button" type="submit">Send</button>
                    </p>
                

                </form>





                </div>

        
    )}
}

export default Capture