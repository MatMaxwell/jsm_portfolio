
import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'
import works from './works'
import abouts from './abouts'
import skills from './skills'
import educations from './educations'
import classes from './classes'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([works, abouts, skills, educations, classes]),})