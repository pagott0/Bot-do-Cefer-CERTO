const puppeteer = require('puppeteer')
const cron = require('node-cron')
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8877;

app.get('/', (req, res) => {
    res.json({
        msg: 'OK'
    })
})

app.listen(PORT, () => {
    console.log('Escutando na porta: ' + PORT);
})

const prompt = require('prompt-sync')();

const emailcliente = prompt('Digite o seu e-mail: ')
const senhacliente = prompt('Digite sua senha: ')
const direcionador = prompt('Para quando você deseja agendar o Cefer? Digite no formato: sexta 12 00  Substitua o dia e a hora pelo desejado \nLembre-se, você deve fazer isso com no MÍNIMO 24 horas de antecedencia \nDigite: ')

//SEXTA-FEIRA 12HRS
if (direcionador == 'sexta 12 00') { console.log('Ok, o robo irá agendar para você')
    async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://cefer.reservio.com/client/login")

    await page.setViewport({ width: 1920, height: 937 })

    await page.type("#frm-loginForm-email", emailcliente)
    await page.type("#frm-loginForm-password", senhacliente)

    await page.waitForSelector('.col > .card > #frm-loginForm > .form-buttons > .btn')
    await page.click('.col > .card > #frm-loginForm > .form-buttons > .btn')

    await page.goto("https://cefer.reservio.com/booking/business/event?businessId=efeb16af-6b6b-44f1-a5e3-75691573a4ea")
//OS 2 DEBAIXOS TEM Q EDITAR PARA O EVENTO QUE VC QUER MARCAR, USAR EXTENSAO DO CHROME
    await page.waitForSelector('.calendar-week > .calendar-body-col:nth-child(6) > .calendar-eventList > .calendarEvent:nth-child(8) > strong')
    await page.click('.calendar-week > .calendar-body-col:nth-child(6) > .calendar-eventList > .calendarEvent:nth-child(8) > strong')


    await page.waitForSelector('form > .card-footer > .btns-row > .btn > span')
    await page.click('form > .card-footer > .btns-row > .btn > span')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.screenshot({ path: "amazing.png"})
    

    await browser.close()
}

cron.schedule("10 0 12 * * 5", start)    
}


//TEM QUE DEIXAR ABERTO EXECUTANDO

//CRIAR VÁRIAS FUNÇÕES, UMA PRA CADA HORARIO E DIA, MUDAR O CRON PRA DIAS ESPECIFICOS

//SEXTA-FEIRA 18 HRS
else if (direcionador == 'sexta 18 00') {console.log('Ok, o robo irá agendar para você')
    async function sexta18() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://cefer.reservio.com/client/login")

    await page.setViewport({ width: 1920, height: 937 })

    await page.type("#frm-loginForm-email", emailcliente)
    await page.type("#frm-loginForm-password", senhacliente)

    await page.waitForSelector('.col > .card > #frm-loginForm > .form-buttons > .btn')
    await page.click('.col > .card > #frm-loginForm > .form-buttons > .btn')

    await page.goto("https://cefer.reservio.com/booking/business/event?businessId=efeb16af-6b6b-44f1-a5e3-75691573a4ea")
//OS 2 DEBAIXOS TEM Q EDITAR PARA O EVENTO QUE VC QUER MARCAR, USAR EXTENSAO DO CHROME
    await page.waitForSelector('.calendar-week > .calendar-body-col:nth-child(6) > .calendar-eventList > .calendarEvent:nth-child(15) > strong')
    await page.click('.calendar-week > .calendar-body-col:nth-child(6) > .calendar-eventList > .calendarEvent:nth-child(15) > strong')

    await page.waitForSelector('form > .card-footer > .btns-row > .btn > span')
    await page.click('form > .card-footer > .btns-row > .btn > span')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.screenshot({ path: "amazing.png"})
    

    await browser.close()
}

cron.schedule("00 00 18 * * 4", sexta18)  //NOTE: Dias da semana: Começa em 00 que é domingo. Cuidado para não confundir, você tem que colocar o dia que o robo realizará o ato de marcar o cefer, não para que dia você está marcando.
    
}


//SEGUNDA FEIRA 12 00 (RODA DOMINGO 12 00)
else if (direcionador == 'segunda 12 00') {console.log('Ok, o robo irá agendar para você')
    async function segunda12() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://cefer.reservio.com/client/login")

    await page.setViewport({ width: 1920, height: 937 })

    await page.type("#frm-loginForm-email", emailcliente)
    await page.type("#frm-loginForm-password", senhacliente)

    await page.waitForSelector('.col > .card > #frm-loginForm > .form-buttons > .btn')
    await page.click('.col > .card > #frm-loginForm > .form-buttons > .btn')

    await page.goto("https://cefer.reservio.com/booking/business/event?businessId=efeb16af-6b6b-44f1-a5e3-75691573a4ea")
//OS 2 DEBAIXOS TEM Q EDITAR PARA O EVENTO QUE VC QUER MARCAR, USAR EXTENSAO DO CHROME
    await page.waitForSelector('.calendar-week > .calendar-body-col:nth-child(2) > .calendar-eventList > .calendarEvent:nth-child(8) > strong')
    await page.click('.calendar-week > .calendar-body-col:nth-child(2) > .calendar-eventList > .calendarEvent:nth-child(8) > strong')

    await page.waitForSelector('form > .card-footer > .btns-row > .btn > span')
    await page.click('form > .card-footer > .btns-row > .btn > span')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.screenshot({ path: "amazing.png"})
    

    await browser.close()
}

cron.schedule("00 00 12 * * 00", segunda12)
    
}


//TERÇA-FEIRA 12 00 (RODA SEGUNDA 12 00)
else if (direcionador == 'terça 12 00' || direcionador == 'terca 12 00') {console.log('Ok, o robo irá agendar para você')
    async function terça12() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://cefer.reservio.com/client/login")

    await page.setViewport({ width: 1920, height: 937 })

    await page.type("#frm-loginForm-email", emailcliente)
    await page.type("#frm-loginForm-password", senhacliente)

    await page.waitForSelector('.col > .card > #frm-loginForm > .form-buttons > .btn')
    await page.click('.col > .card > #frm-loginForm > .form-buttons > .btn')

    await page.goto("https://cefer.reservio.com/booking/business/event?businessId=efeb16af-6b6b-44f1-a5e3-75691573a4ea")
//OS 2 DEBAIXOS TEM Q EDITAR PARA O EVENTO QUE VC QUER MARCAR, USAR EXTENSAO DO CHROME
    await page.waitForSelector('.calendar-week > .calendar-body-col:nth-child(3) > .calendar-eventList > .calendarEvent:nth-child(9) > strong')
    await page.click('.calendar-week > .calendar-body-col:nth-child(3) > .calendar-eventList > .calendarEvent:nth-child(9) > strong')

    await page.waitForSelector('form > .card-footer > .btns-row > .btn > span')
    await page.click('form > .card-footer > .btns-row > .btn > span')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.waitForSelector('.card > form > .card-footer > .btns-row > .btn')
    await page.click('.card > form > .card-footer > .btns-row > .btn')

    await page.screenshot({ path: "amazing.png"})
    

    await browser.close()
}

cron.schedule("00 00 12 * * 01", terça12)
    
}
