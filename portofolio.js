var tabButtos=document.querySelectorAll(".tabContainers .buttonContainer button")
var tabePanel=document.querySelectorAll(".tabContainers .tabPanel button")

function showPanel (panelIndex, colorCode) {
    tabButtons.forEach(function(node ) {
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node ) {
        node.stlye.display="";
    });
    tabPanels[panelIndex].stlye.display="block";
    tabPanels[panelIndex].stlye.backgroundColor=colorCode;
    
}
