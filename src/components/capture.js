import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

export default class IndexPage extends React.Component {
    state = {
        name: null,
        email: null,
    }

    _handleChange = (e) => {
        console.log({
            [`${e.target.name}`]: e.target.value,
        });
        this.setState({
            [`${e.target.name}`]: e.target.value,
        });
    }

    _handleSubmit = (e) => {
        e.preventDefault();

        console.log('submit', this.state);

        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {
                console.log('msg', `${result}: ${msg}`);

  
                if (result !== 'success') {
                  throw msg;
                }
                alert(msg)

                this.nameInput.value = "";
                this.emailInput.value = "";
                
            })
            .catch((err) => {
                console.log('err', err);
                alert(err);
            });
    }

    render() {
        return (
     
            <header className="o-banner c-hero"> 

            <div className="o-content">

              <h3>Hi people</h3>
              <p>Submit the form below and check your browser console!</p>
              <form onSubmit={this._handleSubmit}>
                <input
                    ref={(ref) => this.nameInput= ref}
                    type="text"
                    onChange={this._handleChange}
                    placeholder="name"
                    name="name"
                />
                <input
                    ref={(ref) => this.emailInput= ref}
                    type="email"
                    onChange={this._handleChange}
                    placeholder="email"
                    name="email"
                />
                
                <input type="submit" />
              </form>
            </div>

            </header>


        );
    }
}
