import Users from "meteor/nova:users";
import { getComponent } from 'meteor/nova:core';

Users.addField([
  {
    fieldName: 'country',
    fieldSchema: {
      type: String,
      optional: true,
      control: getComponent('CountrySelector'),
      insertableBy: ['members'],
      editableBy: ['members'],
      viewableBy: ['guests'],
      //preload: true,
      form: {
        showDefaultOption: true,
        defaultOptionLabel: 'United States',
      }
    }
  },
  {
      fieldName: 'region',
      fieldSchema: {
        type: String,
        optional: true,
        control: getComponent('RegionSelector'),
        insertableBy: ['members'],
        editableBy: ['members'],
        viewableBy: ['guests'],
      }
    },
]);
