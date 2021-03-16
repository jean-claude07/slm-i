import React, { Component } from 'react'
import './errors.css'

export default class ErrorField extends Component {
    render() {
        const { errors, touched, row } = this.props;
        return (
            <div className="error-field">
                { errors[row] && touched[row] ? (
                    <span>{errors[row]}</span>
                ) : null }
            </div>
        )
    }
}