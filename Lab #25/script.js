const table = document.getElementById("dataTable");
const chartCanvas = document.getElementById("chartCanvas");
const data = [];

function rowToObject(row) {
    const object = {}
    for (let j = 1; j < row.length; j++) {
        let value = row.item(j).innerHTML
        switch (j) {
            case 1: {
                object.name = value;
                break;
            }
            case 2: {
                object.level1 = value;
                break;
            }
            case 3: {
                object.level2 = value;
                break;
            }
            case 4: {
                object.level3 = value;
                break;
            }
        }
    }
    return object;
}

function readDataFromTable(table, array) {
    // Loop through each row of the table after header
    for (let i = 1; i < table.rows.length; i++) {
        // Get the cells collection of the current row
        let objCells = table.rows.item(i).cells;
        //
        array.push(rowToObject(objCells));
    }
}

function drawChart(canvas, arrayOfObjects) {
    canvas.classList.add('show');
    const context = canvas.getContext('2d');
    let startPosition = 20;
    let nameStartPosition = 60;

    arrayOfObjects.forEach(object => {
        context.beginPath();
        context.rect(startPosition, 50, 30, parseInt(object.level1) * 10);
        context.fillStyle = "Red";
        context.fill();
        context.font = "10px Arial";
        context.fillText("Level 1", startPosition, 45);

        context.beginPath();
        context.rect(startPosition + 40, 50, 30, parseInt(object.level2) * 10);
        startPosition = startPosition + 40;
        context.fillStyle = "Green";
        context.fill();
        context.font = "10px Arial";
        context.fillText("Level 2", startPosition, 45);

        context.beginPath();
        context.rect(startPosition + 40, 50, 30, parseInt(object.level3) * 10);
        startPosition = startPosition + 40;
        context.fillStyle = "Blue";
        context.fill();
        context.font = "10px Arial";
        context.fillText("Level 3", startPosition, 45);

        context.font = "bold 16px Arial";
        context.fillText(object.name, nameStartPosition, 30);
        startPosition += 40;
        nameStartPosition += 115
    })
}

readDataFromTable(table, data);
