let fs = require('fs');

let simple = JSON.parse(fs.readFileSync("kerja.json", 'utf8'));
 let daftar = process.argv;


switch (daftar[2]) {
    case undefined:
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

    case 'list':
            console.log('Daftar Pekerjaan');
            for(let i = 0; i < simple.length; i++) {
                console.log(`${i + 1}.${simple[i].status ? '[x]' : '[ ]'} ${simple[i].task_content}`);   
            }
        break;

    case 'delete':
            let id = parseInt(daftar[3] - 1);
            let real = simple[id]
            simple.splice(id, 1)
            fs.writeFileSync("kerja.json", JSON.stringify(simple, null, 3));
            console.log(`" ${real.task_content}" telah dihapus dari daftar `);
        break; 

    case 'complete' :
            let id2 = parseInt(daftar[3] - 1);
            simple[id2].status = true;
            fs.writeFileSync("kerja.json", JSON.stringify(simple, null, 3));
            console.log(`" ${simple[id2].task_content}" telah selesai `);
        break;
    
    case 'help' :
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

    case 'uncomplete' :
            let id3 = parseInt(daftar[3] - 1);
            simple[id3].status = false;
            fs.writeFileSync("kerja.json", JSON.stringify(simple, null, 3));
            console.log(`" ${simple[id3].task_content}" status selesai dibatalkan `);
        break;

    case 'list:outstanding':
            if (daftar[3] == "asc") {
                for (let i = 0; i < simple.length; i++) {
                    if(!simple[i].status) {
                        console.log(`${i + 1}.${simple[i].status ? '[x]' : '[ ]'} ${simple[i].task_content}`);
                        
                    }
                }
            }
            if(daftar[3] == "desc") {
                for (let i = simple.length -1; i >= 0; i--) {
                    if (!simple[i].status) {
                        console.log(`${i + 1}.${simple[i].status ? '[x]' : '[ ]'} ${simple[i]. task_content}`);
                        
                    }
                }
            }
            break;

    case 'list:completed':
            if (daftar[3] == "asc") {
                for (let i = 0; i < simple.length; i++) {
                    if (simple[i].status) {
                        console.log(`${i + 1}. ${simple[i].status ? '[x]' : '[ ]'} ${simple[i].task_content}`);
                        
                    }
                }
            }
            if (daftar[3] == "desc") {
                for (let i = simple.length - 1; i >= 0; i--) {
                    if (simple[i].status) {
                        console.log(`${i + 1}. ${simple[i].status ? '[x]' : '[ ]'} ${simple[i].task_content}`);
                        
                    }
                }
            }
            break;
        
        case 'task' :
                let contain = parseInt(daftar[3] - 1);
                console.log(`${contain + 1}.${simple[contain].status ? '[x]': '[ ]'} ${simple[contain].task_content}`);
            break;

        case 'tag':
                let primer = parseInt(daftar[3] - 1);
                for (let i = 4; i < daftar.length; i++) {
                    if (!simple[primer].tag.includes(daftar[i])) {
                        simple[primer].tag.push(daftar[i])
                    }
                }
                fs.writeFileSync("kerja.json", JSON.stringify(simple, null, 3))
                console.log(simple[primer].tag + ' ' + "telah ditambahkan ke daftar" + ' ' + simple[primer].task_content);
            break;

};






    
                

                









    
            
            
            
            
             











