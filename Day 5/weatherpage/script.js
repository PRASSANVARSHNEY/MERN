
//weather.visualcrossing.com weather api
function fetchAPI()
{
 const url="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/38.9697,-77.385?key=MVEQTUC4VEGZQ3NRLKZG6PEPR"
 fetch(url)
 .then((res)=>res.json())
 .then(renderUI);
}
fetchAPI()
function renderUI(data)
{
    // const days=data.days;

    const row=document.createElement("tr");
    const childRow = document.createElement("row");
    const cell1=document.createElement("th");
    cell1.innerText='Date';
    row.appendChild(cell1);

    const cell2=document.createElement("th");
    cell2.innerText='Maximum Temperature';
    row.appendChild(cell2);
 
    const cell3=document.createElement("th");
    cell3.innerText='Minimum Temperature';
    row.appendChild(cell3);

    root.append(row);

    

}
renderUI();