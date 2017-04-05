const ufhash = require('./index.js')
const assert = require('assert')
const c = ufhash.conf

describe('ufhash', () => {
    it('shortcode is length 6', () => {
        assert.equal(ufhash.shortcode(c, 123456).length, 6)
    })

    it('shortcode is alphabetic uppercase', () => {
        assert.equal(/[A-Z]{6}/.test(ufhash.shortcode(c, 654321)), true)
    })

    it('value accepts lowercase', () => {
        assert.equal(ufhash.value(c, 'ABCDZ'), 14547564)
    })

    it('can generate shortcode and reverse it for 0', () => {
        assert.equal(ufhash.value(c, ufhash.shortcode(c, 0)), 0)
    })

    it('can generate shortcode and reverse it for 1', () => {
        assert.equal(ufhash.value(c, ufhash.shortcode(c, 1)), 1)
    })

    it('can generate shortcode and reverse it for maximum', () => {
        assert.equal(ufhash.value(c, ufhash.shortcode(c, 16 ** 6)), 16 ** 6)
    })

    it('generate unique shortcodes for first 100K', () => {
        var shortcodes = {}
        for(var i = 0; i < 100000; i++) {
            var shortcode = ufhash.shortcode(c, i)
            assert(!shortcodes[shortcode])
            shortcodes[shortcode] = true
        }
    })

    it('consistent shortcode between calls', () => {
        assert.equal(ufhash.shortcode(c, 8888888), 'HSBOVU')
    })
})
