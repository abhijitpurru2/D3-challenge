
var svgWidth = 850;
var svgHeight = 600;

var margin = {
      top: 20,
      right: 40,
      bottom: 80,
      left: 100
};

var svgScatter = d3.select("#scatter")
                   .append("svg")
                   .attr("width", svgWidth)
                   .attr("height", svgHeight);

var chartLocal = svg.append("g").attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.csv("assets/data/data.csv").then(function(dataSet){
    dataSet.forEach(function(data){
        data.age = +data.age;
        data.income = +data.income;
        data.poverty = +data.poverty;
        data.healthcare = +data.healthcare;
        data.smokes = +data.smokes;
        data.obesity = +data.obesity;

    var width = svgWidth - margin.left - margin.right;
    var height = svgHeight - margin.top - margin.bottom;

    var xScale = d3.scaleLinear()
                   .domain([d3.min(dataSet, d => d.poverty),d3.max(dataSet, d => d.poverty)])
                   .range([0, width])

    var yScale = d3.scaleLinear()
                   .domain([d3.min(dataSet, d => d.healthcare),d3.max(dataSet, d => d.healthcare)])
                   .range([0, width])

    xAxis = d3.axisBottom(xScale);
    yAxis = d3.axisLeft(yScale);

    });
});


