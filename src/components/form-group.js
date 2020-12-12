import React from 'react'

class FormGroup extends React.Component {

    render() {
        return (
            <div class="form-group">
                <label for={this.props.id}>
                    {this.props.label}
                </label>
                <input 
                    type={this.props.tipoInput} 
                    class="form-control" 
                    id={this.props.id} 
                    aria-describedby="emailHelp" 
                    onChange={(e) => {
                        this.props.mudarValor(e.target.value);
                    }}
                />
            </div>
        )
    }
}

export default FormGroup;