// Add your SVG drawing logic here



document.addEventListener("DOMContentLoaded", function() {
    // Create the SVG namespace
    const svgNS = "http://www.w3.org/2000/svg"; 

    // Get the SVG element
    const svg = document.getElementById("cat-svg");

   

    // Create stems for the flowers
    var stem1 = document.createElementNS(svgNS, "rect");
    stem1.setAttribute("x", "145");
    stem1.setAttribute("y", "160");
    stem1.setAttribute("width", "10");
    stem1.setAttribute("height", "100");
    stem1.setAttribute("fill", "#228B22");

    var stem2 = document.createElementNS(svgNS, "rect");
    stem2.setAttribute("x", "105");
    stem2.setAttribute("y", "180");
    stem2.setAttribute("width", "10");
    stem2.setAttribute("height", "80");
    stem2.setAttribute("fill", "#228B22");

    var stem3 = document.createElementNS(svgNS, "rect");
    stem3.setAttribute("x", "165");
    stem3.setAttribute("y", "180");
    stem3.setAttribute("width", "10");
    stem3.setAttribute("height", "80");
    stem3.setAttribute("fill", "#228B22");

    // Create leaves
    var leaf1 = document.createElementNS(svgNS, "ellipse");
    leaf1.setAttribute("cx", "100");
    leaf1.setAttribute("cy", "200");
    leaf1.setAttribute("rx", "20");
    leaf1.setAttribute("ry", "10");
    leaf1.setAttribute("fill", "#228B22");

    var leaf2 = document.createElementNS(svgNS, "ellipse");
    leaf2.setAttribute("cx", "170");
    leaf2.setAttribute("cy", "210");
    leaf2.setAttribute("rx", "22");
    leaf2.setAttribute("ry", "10");
    leaf2.setAttribute("fill", "#228B22");

    var leaf3 = document.createElementNS(svgNS, "ellipse");
    leaf3.setAttribute("cx", "185");
    leaf3.setAttribute("cy", "230");
    leaf3.setAttribute("rx", "15");
    leaf3.setAttribute("ry", "8");
    leaf3.setAttribute("fill", "#228B22");

    // Function to create sunflower petals
    function createSunflower(cx, cy, petalColor) {
        // Create a group for the sunflower
        var sunflowerGroup = document.createElementNS(svgNS, "g");

        // Create petals
        for (var i = 0; i < 12; i++) {
            var petal = document.createElementNS(svgNS, "ellipse");
            petal.setAttribute("cx", cx);
            petal.setAttribute("cy", cy);
            petal.setAttribute("rx", "20");
            petal.setAttribute("ry", "10");
            petal.setAttribute("fill", petalColor);
            petal.setAttribute("transform", `rotate(${i * 30} ${cx} ${cy})`);
            sunflowerGroup.appendChild(petal);
        }

        // Create the center of the sunflower
        var center = document.createElementNS(svgNS, "circle");
        center.setAttribute("cx", cx);
        center.setAttribute("cy", cy);
        center.setAttribute("r", "15");
        center.setAttribute("fill", "#8B4513");
        sunflowerGroup.appendChild(center);

        return sunflowerGroup;
    }

    // Create three sunflowers with different petal colors
    var sunflower1 = createSunflower(150, 150, "#FFA500"); // Orange
    var sunflower2 = createSunflower(110, 170, "#FFD700"); // Yellow
    var sunflower3 = createSunflower(180, 170, "#FF6347"); // Red

     // Create the vase
     var vase = document.createElementNS(svgNS, "rect");
     vase.setAttribute("x", "90");
     vase.setAttribute("y", "240");
     vase.setAttribute("width", "100");
     vase.setAttribute("height", "30");
     vase.setAttribute("rx", "20");
     vase.setAttribute("ry", "20");
     vase.setAttribute("fill", "#6480ED"); 

     var vase1 = document.createElementNS(svgNS, "rect");
     vase1.setAttribute("x", "70");
     vase1.setAttribute("y", "250");
     vase1.setAttribute("width", "140");
     vase1.setAttribute("height", "120");
     vase1.setAttribute("rx", "50");
     vase1.setAttribute("ry", "50");
     vase1.setAttribute("fill", "#6495ED"); 
     

    // Append elements to the SVG
    
    svg.appendChild(stem1);
    svg.appendChild(stem2);
    svg.appendChild(stem3);
    svg.appendChild(leaf1);
    svg.appendChild(leaf2);
    svg.appendChild(leaf3);
    svg.appendChild(sunflower1);
    svg.appendChild(sunflower2);
    svg.appendChild(sunflower3);
    svg.appendChild(vase1);
    svg.appendChild(vase);
});