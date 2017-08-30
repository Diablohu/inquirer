const fs = require('fs-extra')
const path = require('path')
const inquirer = require('inquirer')

const run = async () => {
    const list = await fs.readdir(path.resolve('./examples'))
    // console.log(list)

    console.log(``)

    const answers = await inquirer.prompt(
        {
            type: 'list',
            name: 'selected',
            message: 'Which example to run?',
            choices: list
        }
    )

    // console.log(JSON.stringify(answers, null, '  '))
    console.log(`> running: ${answers.selected}`)

    console.log(``)

    // const exec = require('child_process').exec
    // exec(path.resolve('./examples/', answers.selected), function callback(error, stdout, stderr) {
    //     console.log(stdout, stderr)
    // })
    require(path.resolve('./examples/', answers.selected))
}

run()