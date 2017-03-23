import React from 'react';
import { registerComponent } from 'meteor/vulcan:core'
import { RegionDropdown } from 'react-country-region-selector';

class RegionSelector extends React.Component {
  constructor (props) {
    super(props);
  }

  selectRegion (val) {
    this.context.updateCurrentValues({
      region: val,
    });
  }

  render () {
    return (
      <div className="form-group row">
        <label className="control-label col-sm-3">{this.props.label}</label>
        <div className="col-sm-9">
          <div className="upload-field">
            <RegionDropdown
              country={this.props.document.country}
              value={this.props.value}
              classes={'form-control'}
              onChange={(val) => this.selectRegion(val)} />
            </div>
          </div>
        </div>
    );
  }
}

RegionSelector.displayName = 'RegionSelector'

RegionSelector.contextTypes = {
  updateCurrentValues: React.PropTypes.func,
}
registerComponent('RegionSelector', RegionSelector)
