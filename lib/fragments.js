import { extendFragment } from 'meteor/nova:core'

extendFragment('UsersProfile', `
  country
  region
`)
