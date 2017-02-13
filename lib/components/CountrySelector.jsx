import React from 'react';
import { registerComponent } from 'meteor/nova:core'
import { CountryDropdown } from 'react-country-region-selector';

class CountrySelector extends React.Component {
  constructor (props) {
    super(props);
  }

  selectCountry (val) {
    this.context.updateCurrentValues({
      country: val,
    });
  }

  render () {
    return (
      <div className="form-group row">
        <label className="control-label col-sm-3">{this.props.label}</label>
        <div className="col-sm-9">
          <div className="upload-field">
            <CountryDropdown
              value={this.props.value}
              classes={'form-control'}
              onChange={(val) => this.selectCountry(val)} />
          </div>
        </div>
      </div>
    );
  }
}

CountrySelector.displayName = 'CountrySelector'

CountrySelector.contextTypes = {
  updateCurrentValues: React.PropTypes.func,
}

registerComponent('CountrySelector', CountrySelector)
