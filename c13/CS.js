case 'list:outstanding':
        if (input[3] == "asc") {
            for (let k = 0; k < data.length; k++) {
                if (!data[k].status) {
                    console.log(`${k + 1}.${data[k].status ? '[x]' : '[ ]'} ${data[k].task_content}`);
                }
            }
        }
        if (input[3] == "desc") {
            for (let k = data.length - 1; k >= 0; k--) {
                if (!data[k].status) {
                    console.log(`${k + 1}.${data[k].status ? '[x]' : '[ ]'} ${data[k].task_content}`);
                }
            }
        }
        process.exit(0);

    case 'list:completed':
        if (input[3] == "asc") {
            for (let k = 0; k < data.length; k++) {
                if (data[k].status) {
                    console.log(`${k + 1}.${data[k].status ? '[x]' : '[ ]'} ${data[k].task_content}`);
                }
            }
        }
        if (input[3] == "desc") {
            for (let k = data.length - 1; k >= 0; k--) {
                if (data[k].status) {

                    console.log(`${k + 1}.${data[k].status ? '[x]' : '[ ]'} ${data[k].task_content}`);
                }
            }
        }
        process.exit(0);

    case 'task':
        let indexTask = parseInt(input[3]) - 1;
        console.log(`${indexTask + 1}.${data[indexTask].status ? '[x]' : '[ ]'} ${data[indexTask].task_content}`);
        process.exit(0);

    case 'tag':
        let indexTag = parseInt(input[3]) - 1;
        for (let i = 4; i < input.length; i++) {
            if (!data[indexTag].tag.includes(input[i])) {
                data[indexTag].tag.push(input[i])
            }
        }
        console.log(data[indexTag].tag + ' ' + "telah ditambahkan ke daftar" + ' ' + data[indexTag].task_content);
        fs.writeFileSync("todo.json", JSON.stringify(data, null, 3))
        process.exit(0);

};
word(process.argv[2])
function word() {
    let a = process.argv[2]
    let b = a.slice(0, 7)
    if (b == 'filter:') {
        data.map((number, index) => {
            if (number.tag.includes(a.slice(7))) {
                console.log(`${index + 1}.${number.status ? '[x]' : '[ ]'} ${number.task_content}`);
            }
        })
    };

};