/*
* Function
* return String
*/
const starScore = rate => {return '★★★★★☆☆☆☆☆'.slide(5-rate, 10 - rate)}

// starScore(1) => '★☆☆☆☆'
// starScore(4) => '★★★★☆'
