export default {
  yearCount: function(strStart, strStop) {
    const start = new Date(strStart)
    let stop
    if(strStop) {
      stop = new Date(strStop)
    } else {
      stop = new Date()
    }
    const diff = stop - start
    return Math.floor(diff/31557600000)
  },
}