export function getDateStr(ts) {
    let date;
    if (ts) {
        date = new Date(ts);
    } else {
        date = new Date();

    }
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    date = dd + '/' + mm + '/' + yyyy;
    return date;
}