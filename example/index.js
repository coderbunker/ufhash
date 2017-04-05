'use strict'

const ufhash = require('ufhash')

// TODO: create your own configuration
const c = ufhash.c

const shortcode = ufhash.shortcode(c, 1)
console.log(`should output rzttst: ${shortcode}`)
const value = ufhash.value(c, shortcode)
console.log(`should output 1: ${value}`)
