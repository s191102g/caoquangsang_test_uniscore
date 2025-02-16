import * as fs from 'fs';
function minifyJsonFile(inputPath: string, outputPath: string) {
    const jsonData = fs.readFileSync(inputPath, 'utf8'); // read file
    let data = JSON.parse(jsonData); // read data

    const masterKey = Object.keys(data); // get first key : select * from sport_events ....
    
    const values = Object.values(data).flat(); // get each element from array

    /* I noticed that the elements in the array have the same key,
     so I will store the key in one array
      and the values ​​will be in the next arrays.
    */
    const keys = Object.keys(values[0] as object); 
    const list: any[] = [keys];
    list.push(...values.map((obj: any) => Object.values(obj)))
    
    const newObj = {
        [masterKey[0]]: list
    }


    const minifiedData = JSON.stringify(newObj)
        .replace(/\s+/g, '') // remove unnecessary spaces 
    fs.writeFileSync(outputPath, minifiedData);
    return true
}

function revertFile(inputPath: string, outputPath: string) {
    const jsonData = fs.readFileSync(inputPath, 'utf8');
    let data = JSON.parse(jsonData)
    const masterKey = Object.keys(data);
    const values: any[] = Object.values(data).flat();
    const keys = values[0];
    const formattedValues: any[] = values.slice(1).map((item: any) => {
        return Object.fromEntries(keys.map((key: any, index: any) => [key, item[index]]));
    });
    const json = {
        [masterKey[0]]: formattedValues

    }
    fs.writeFileSync(outputPath, JSON.stringify(json, null, 1));
    return true
}


minifyJsonFile('data.json', 'compress.json');
revertFile('compress.json', 'dataRevert.json');

 
  
