# ufhash: User-friendly Hash

## Overview

From a sequential number obtain a non-sequential short alphabetic string.

## Purpose

* Map numbers to unique shortcode
* Provide users with a memorizable (less than 7 characters) alphabetic shortcode
* Hide internal sequential array and resist attempts to casually retrieve data by guessing sequence
* Remove hard to distinguish visually or orally letters (e and i, p and q, l and i, etc)

## Usage

```
const ufhash = require('ufhash')

// TODO: create your own configuration
const c = ufhash.c

const shortcode = ufhash.shortcode(c, 1)
console.log(`should output RZTTST: ${shortcode}`)
const value = ufhash.value(c, shortcode)
console.log(`should output 1: ${value}`)
```

## Theory

Given a co-prime number x:

```
In number theory, two integers a and b are said to be relatively prime, mutually prime, or coprime (also spelled co-prime) if the only positive integer that divides both of them is 1. That is, the only common positive factor of the two numbers is 1. This is equivalent to their greatest common divisor being 1.
```

We can find it's modulo inverse y relative to number m (the space of numbers).

This is then map to 2^4 (16 values) array of symbols (letters).

## Configuration

Every function takes in a configuration object. 

This contains all the equation numbers and the list of symbols.