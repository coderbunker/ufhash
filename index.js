const d = ['a', 'b', 'c', 'd', 'f', 'h', 'k', 'o', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
const b = 4
const n = 6
const m = (2**b)**n+1
const x = 279554824
const y = 7560760 // modinv(x, m)
const mask = (2**b)-1

function rhash(n) {
    return n * x % m
} 

function invrhash(h) {
    return h * y % m  
}

function shortcode_from_hash(h) {
    return [0, 4, 8, 12, 16, 20].map((shift) => d[h >> shift & mask])
}

function hash_from_shortcode(shortcode) {
    return shortcode.reduce((h, l, i) => h |= d.indexOf(l) << i*b, 0)
}

function shortcode(v) {
    return shortcode_from_hash(rhash(v)).join('')
} 

function value(shortcode) {
    return invrhash(hash_from_shortcode(shortcode.split('')))
}

module.exports = {
    shortcode,
    value
}