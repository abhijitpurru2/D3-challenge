
var svgWidth = 960;
var svgHeight = 500;

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

var chartLocal = svgScatter.append("g").attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.csv("assets/data/data.csv").then(function(dataSet){
    dataSet.forEach(function(data){
        data.age = +data.age;
        data.income = +data.income;
        data.poverty = +data.poverty;
        data.healthcare = +data.healthcare;
        data.smokes = +data.smokes;
        data.obesity = +data.obesity;
        data.abbr = +data.abbr;

    var width = svgWidth - margin.left - margin.right;
    var height = svgHeight - margin.top - margin.bottom;

    var xScale = d3.scaleLinear()
                   .domain([d3.min(dataSet, d => d.poverty),d3.max(dataSet, d => d.poverty)])
                   .range([0, width])

    var yScale = d3.scaleLinear()
                   .domain([d3.min(dataSet, d => d.healthcare),d3.max(dataSet, d => d.healthcare)])
                   .range([height, 0])

    xAxis = d3.axisBottom(xScale);
    yAxis = d3.axisLeft(yScale);

    chartLocal.append("g")
        .classed("x-axis", true)
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis);

    chartLocal.append("g")
        .classed("y-axis", true)
        .call(yAxis);

    var circlesLocal = chartLocal.selectAll("circle")
        .data(dataSet)
        var element = circlesLocal.enter();



    chartLocal.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - 50)
            .attr("x", 0 -250)
            .attr("dy", "1em")
            .attr("class", "axisText")
            .text("Healthcare Lack Percent (%)");

        chartLocal.append("text")
            .attr("transform", `translate(${width / 2.5}, ${height + margin.top + 25})`)
            .attr("class", "axisText")
            .text("Poverty Percent (%)");

    });
});


