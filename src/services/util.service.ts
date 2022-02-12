export const utilService = {
    makeId,
    getDeepCopy
}

function makeId(length: number = 5): string {
    var txt = ''
    var possible = '0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function getDeepCopy(item: any): any {
    return JSON.parse(JSON.stringify(item))
}