import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
        <section>
          <div >
            <div>
              <h1 className=" w-3/5 text-3xl font-bold text-center border-b-6 border-whiteblue text-primary text-center m-auto py-8">Contactanos</h1>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                className="p-8 my-8"
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="mb-4">
                  <label className="label" htmlFor={'name'}>
                    Tu nombre
                  </label>
                  <div className="mt-4">
                    <input
                      className="w-full rounded-xl"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="mt-4">
                    <input
                      className="w-full rounded-xl"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor={'message'}>
                    Mensaje
                  </label>
                  <div className="mt-4">
                    <textarea
                      className="form-textarea w-full rounded-xl"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="bg-primary text-white px-32 md:px-12 py-3 rounded-xl md:ml-0 my-8" type="submit">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
