const ufhash = require('./index.js')
const assert = require('assert')

describe('ufhash', () => {
    it('shortcode is length 6', () => {
        assert.equal(ufhash.shortcode(123456).length, 6)
    })

    it('shortcode is alphabetic', () => {
        assert.equal(/[a-z]{6}/.test(ufhash.shortcode(654321)), true)
    })

    it('can generate shortcode and reverse it for 0', () => {
        assert.equal(ufhash.value(ufhash.shortcode(0)), 0)
    })

    it('can generate shortcode and reverse it for 1', () => {
        assert.equal(ufhash.value(ufhash.shortcode(1)), 1)
    })

    it('can generate shortcode and reverse it for maximum', () => {
        assert.equal(ufhash.value(ufhash.shortcode(16**6)), 16**6)
    })

    it('generate unique shortcodes for first 100K', () => {
        var shortcodes = {}
        for(var i=0; i<100000; i++) {
            var shortcode = ufhash.shortcode(i)
            assert(!shortcodes[shortcode])
            shortcodes[shortcode] = true
        }
    })

    it('consistent shortcode between calls', () => {
        assert.equal(ufhash.shortcode(8888888), 'hsbovu')
    })
})