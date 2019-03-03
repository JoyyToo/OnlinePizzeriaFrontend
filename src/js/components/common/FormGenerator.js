import React from 'react';
import { Field, Form as FinalForm } from 'react-final-form';
import { Link } from "react-router-dom";


const FormInput = ({name, validate, type, label}) => (
    <Field
        name={name}
        validate={validate}
        label={label}
        render={({input}) => (
          <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                className="form-control"
                {...input}
            />
          </div>
        )}
    />
);

class FormGenerator extends React.Component {
    onSubmit = (values) => {
        const {onClickSubmit} = this.props;
        onClickSubmit(values);
    };

    render() {
        const {
            formInputMetadata, formTitle, primaryButton, secondaryButton, secondaryLink
        } = this.props;
        return (
            <FinalForm
                onSubmit={this.onSubmit}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <h2>{formTitle}</h2>
                        <div className="form-group">
                         {formInputMetadata.map(props => (
                            <FormInput
                                key={props.name}
                                {...props}
                            />
                        ))}
                        </div>


                        <button className="btn btn-primary" type='submit' >
                            {primaryButton}
                        </button>
                        &nbsp; Or &nbsp;
                        <Link to={secondaryLink}>
                            <button className="btn btn-primary" type='submit'>
                                {secondaryButton}
                            </button>
                        </Link>
                    </form>
                )}/>
        );
    }
}

export default FormGenerator;
