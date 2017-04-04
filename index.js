function sampleConf() {
    const d = ['a', 'b', 'c', 'd', 'f', 'h', 'k', 'o', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
    const b = 4
    const n = 6
    const m = (2**b)**n+1
    const x = 279554824
    const y = 7560760 // modinv(x, m)
    const mask = (2**b)-1
    const shifts = [0, 4, 8, 12, 16, 20]
    return {
        d,
        b,
        n,
        m,
        x,
        y,
        mask,
        shifts
    }
}

const c = sampleConf()

function rhash(c, n) {
    return n * c.x % c.m
} 

function invrhash(c, h) {
    return h * c.y % c.m  
}

function shortcode_from_hash(c, h) {
    return c.shifts.map((shift) => c.d[h >> shift & c.mask])
}

function hash_from_shortcode(c, shortcode) {
    return shortcode.reduce((h, l, i) => h |= c.d.indexOf(l) << i*c.b, 0)
}

function shortcode(c, v) {
    return shortcode_from_hash(c, rhash(c, v)).join('')
} 

function value(c, shortcode) {
    return invrhash(c, hash_from_shortcode(c, shortcode.split('')))
}

module.exports = {
    shortcode,
    value,
    c
}