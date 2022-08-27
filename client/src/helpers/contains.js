export const contains = (where, what) =>{
    let isContains = false;
    for(let i = 0; i < what.length; i++) {
        if(where.indexOf(what[i]) === -1) {
            isContains = false;
            break;
        }
        isContains = true;
    }
    return isContains;
}
