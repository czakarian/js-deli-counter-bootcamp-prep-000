var katzDeli = [];

function takeANumber(katzDeliLine, newname) {
  katzDeliLine.push(newname)
  return `Welcome, ${newname}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0)
  {
    return "There is nobody waiting to be served!"
  }
  else {
    var first = katzDeliLine[0]
    katzDeliLine.unshift()
    return `Currently serving ${first}.`
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0)
  {
    return "The line is currently empty."
  }
  else {
    var output = "The line is currently: "
    var i = 0
    while(i < katzDeliLine.length)
    {
      output = output + (i+1) + "." + katzDeliLine[i] + ", ";
      i++
    }
    return output
  }
}
