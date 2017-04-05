function sampleConf() {
    const d = ['A', 'B', 'C', 'D', 'F', 'H', 'K', 'O', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];
    const b = 4
    const n = 6
    const m = ((2 ** b) ** n) + 1
    const x = 279554824
    // modinv(x, m)
    const y = 7560760
    const mask = (2 ** b) - 1
    const shifts = [0, 4, 8, 12, 16, 20]
    return {
        b,
        d,
        m,
        mask,
        n,
        shifts,
        x,
        y,
    }
}

const conf = sampleConf()

function rhash(c, n) {
    return n * c.x % c.m
}

function invrhash(c, h) {
    return h * c.y % c.m
}

function shortcodeFromHash(c, h) {
    return c.shifts.map((shift) => c.d[(h >> shift) & c.mask])
}

function hashFromShortcode(c, code) {
    return code.reduce((h, l, i) => h | (c.d.indexOf(l) << (i * c.b)), 0)
}

function shortcode(c, v) {
    return shortcodeFromHash(c, rhash(c, v)).join('')
}

function value(c, code) {
    return invrhash(c, hashFromShortcode(c, code.split('')))
}

module.exports = {
    conf,
    shortcode,
    value,
}
