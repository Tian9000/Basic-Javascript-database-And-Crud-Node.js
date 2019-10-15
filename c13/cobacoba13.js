const fs = require('fs');

let simple = JSON.parse(fs.readFileSync("kerja.json", 'utf8'));
let daftar = process.argv;
console.log(simple);



 switch (daftar[2]) {
    case 'undefined':
        console.log('>>>> JS TODO <<<<');
        console.log('$ node todo.js <command>');
        console.log('$ node todo.js list');
        console.log('$ node todo.js task');
        console.log('$ node todo.js add');
        console.log('$ node todo.js delete');
        console.log('$ node todo.js complete');
        console.log('$ node todo.js uncomplete');
        console.log('$ node todo.js list:outstanding asc|desc');
        console.log('$ node todo.js list:completed asc|desc');
        console.log('$ node todo.js tag');
        console.log('$ node todo.js filter');
        break;

    case 'add':
        let arr = []
        for (let i = 3; i < daftar.length; i++) {
            arr.push(daftar[i]);

        }
        //console.log(arr);

        let work = arr.join(' ');
        //console.log(work);

        simple.push({
            "task_content": work,
            "status": false,
            "tag": []
        })
        fs.writeFileSync("kerja.json", JSON.stringify(simple, null, 3));
        console.log(`'${work}' telah ditambahkan.`);
        break;


 }

