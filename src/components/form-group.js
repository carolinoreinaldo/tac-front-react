import React from 'react'

class FormGroup extends React.Component {

    render() {
        return (
            <div class="form-group">
                <label htmlFor={this.props.id} className="col-sm-2 col-form-label">
                    {this.props.label}
                </label>
                <input
                    type={this.props.tipoInput}
                    className="form-control mx-sm-3"
                    id={this.props.id}
                    aria-describedby="emailHelp"
                    onChange={this.props.mudarValor}
                    value={this.valor}
                />
            </div>
        )
    }
}

export default FormGroup;