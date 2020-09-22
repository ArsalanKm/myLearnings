import React from 'react'
import {Field, reduxForm} from 'redux-form'


class StreamForm extends React.Component {

    renderError = ({error, touched}) => {
        if (touched && error) {
            return (<div className="ui error message">
                <div className="header">
                    {error}

                </div>
            </div>)
        }
    }

    renderInput = (field) => {
        const {label, meta} = field
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>
                    {label}
                </label>
                <input {...field.input} type="text" autoComplete="off"/>

                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    render() {
        const {handleSubmit} = this.props

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}
                  className="ui form error">
                <Field name='title'
                       component={this.renderInput} label="title"/>
                <Field name='description'
                       component={this.renderInput} label="description"/>
                <button className="ui button primary">submit</button>
            </form>
        )

    }
}

const validate = (formValues) => {

    const errors = {}
    if (!formValues.title) {
        errors.title = 'You must enter a title'
    }
    if (!formValues.description) {
        errors.description = 'You must enter a description'
    }
    return errors
}

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm)

