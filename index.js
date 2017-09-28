var katzDeli = [];

function takeANumber(katzDeliLine, newname) {
  katzDeliLine.push(newname)
  return `Welcome, ${newname}. You are number ${katzDeliLine.length} in line.`
}

function nowServing() {
  if(katzDeli.length === 0)
  {
    return "There is nobody waiting to be served!"
  }
  else {
    var first = katzDeli[0]
    katzDeli.unshift
    return `Currently serving ${first}.`
  }
}

function currentLine() {
  if(katzDeli.length === 0)
  {
    return "The line is currently empty."
  }
  else {
    var output = "The line is currently: "
    var i = 0
    while(i < katzDeli.length)
    {
      output = output + (i+1) + "." + katzDeli[i] + ", ";
      i++
    }
    return output
  }
}
