const AMOUNT = process.env.AMOUNT
const NAME = process.env.NAME
const DOC_TYPE = process.env.DOC_TYPE
const INSTRUMENT_TYPE = process.env.INSTRUMENT_TYPE
const DNI = process.env.DNI
const ACT_ID = process.env.ACT_ID
const ACT_DESCRIPTION = process.env.ACT_DESCRIPTION
const CUIT_PREFIX = process.env.CUIT_PREFIX
const CUIT_VERIFIER = process.env.CUIT_VERIFIER
const CUIT_PREFIX_SENDER = process.env.CUIT_PREFIX_SENDER
const DNI_SENDER = process.env.DNI_SENDER
const CUIT_VERIFIER_SENDER = process.env.CUIT_VERIFIER_SENDER
const NAME_SENDER = process.env.NAME_SENDER
const DOC_TYPE_SENDER = process.env.DOC_TYPE_SENDER
const ADDRESS_STREET = process.env.ADDRESS_STREET
const ADDRESS_NUMBER = process.env.ADDRESS_NUMBER
const EMAIL = process.env.EMAIL
const PHONE = process.env.PHONE
const ZIP_CODE = process.env.ZIP_CODE
const CITY = process.env.CITY
const CITY_CODE = process.env.CITY_CODE
const BANK_NAME = process.env.BANK_NAME
const BANK_CUIT_PREFIX = process.env.BANK_CUIT_PREFIX
const BANK_CUIT = process.env.BANK_CUIT
const BANK_CUIT_VERIFIER = process.env.BANK_CUIT_VERIFIER
const BANK_ACCOUNT_NUMBER = process.env.BANK_ACCOUNT_NUMBER
const USERNAME = process.env.USERNAME
const PASSWORD = process.env.PASSWORD

describe('tgb-bert', function () {
  it('tests tgb-bert', function (browser) {
    browser
      .windowRect({ width: 1600, height: 983 })
      .navigateTo(
        'https://www.arba.gov.ar/GuiaTramites/TramiteSeleccionado.asp?tramite=655&categ=40'
      )
      .click('div.pt-5 > button')
      .window.getAllHandles(result => {
        const handle = result.value[1]
        browser.window.switchTo(handle)
      })
      .setValue('#CUIT', USERNAME)
      .setValue('#clave_Cuit', PASSWORD)
      .pause(500)
      .click('#frmDatos button')
      .pause(1000)
      .click('#cmenu > li:nth-of-type(1) > a')
      .click(
        'body > table > tbody > tr:nth-of-type(2) li:nth-of-type(1) > ul > li:nth-of-type(1) > a'
      )
      .click("input[type='submit']")
      .click('tr:nth-of-type(3) tr:nth-of-type(2) a')
      .click('#razonSocial')
      .setValue('#razonSocial', NAME)
      .click('#tipoDoc')
      .click(`#tipoDoc option[value="${DOC_TYPE}"]`)
      .pause(250)
      .click('#tipoInstrumento')
      .click(`#tipoInstrumento option[value="${INSTRUMENT_TYPE}"]`)
      .pause(500)
      .click('#numeroDoc')
      .setValue('#numeroDoc', DNI)
      .click('#fechaInstrumento')
      .click('td.ui-datepicker-today > a')
      .pause(250)
      .click('#fechaActo')
      .click('td.ui-datepicker-today > a')
      .click('#acto')
      .click(`#acto option[value="${ACT_ID}"]`)
      .click('#fechaPedido')
      .click('td.ui-datepicker-days-cell-over > a')
      .click('#descripcionActo')
      .setValue('#descripcionActo', ACT_DESCRIPTION)
      .pause(250)
      .click("input[type='submit']")
      .pause(1000)
      .click('input[name="confirmar"]')
      .pause(1000)
      .click('input[name="volver"]')
      .pause(1000)
      .click('input[title="Agregar"]')
      .pause(1000)

      // Agregar integrante.
      .click('input[title="Agregar INTEGRANTE"]')
      .pause(1000)
      .setValue('#cuitPrefijo', CUIT_PREFIX)
      .setValue('#cuitNumero', DNI)
      .setValue('#cuitDigitoVerificador', CUIT_VERIFIER)
      .setValue('#razonSocial', NAME)
      .click('#tipoDoc')
      .click(`#tipoDoc option[value="${DOC_TYPE}"]`)
      .pause(500)
      .setValue('#numeroDoc', DNI)
      .pause(1000)
      .click('input[name="confirmar"]')
      .pause(1000)
      .click('input[title="Agregar DOMICILIO del INTEGRANTE"]')
      .pause(1000)
      .setValue('#calle', ADDRESS_STREET)
      .setValue('#nro', ADDRESS_NUMBER)
      .setValue('#email', EMAIL)
      .setValue('#telefono', PHONE)
      .setValue('#cp', ZIP_CODE)
      .pause(1000)
      .click('#localidad')
      .click(`#localidad option[value="${CITY}"]`)
      .pause(500)
      .click('#partido')
      .click(`#partido option[value="${CITY_CODE}"]`)
      .pause(1000)
      .click('input[name="confirmar"]')
      .pause(1000)

      // Agregar integrante 2.
      .click('input[title="Agregar INTEGRANTE"]')
      .pause(1000)
      .setValue('#cuitPrefijo', CUIT_PREFIX_SENDER)
      .setValue('#cuitNumero', DNI_SENDER)
      .setValue('#cuitDigitoVerificador', CUIT_VERIFIER_SENDER)
      .setValue('#razonSocial', NAME_SENDER)
      .click('#tipoDoc')
      .click(`#tipoDoc option[value="${DOC_TYPE_SENDER}"]`)
      .pause(500)
      .setValue('#numeroDoc', DNI_SENDER)
      .pause(1000)
      .click('input[name="confirmar"]')
      .pause(1000)
      .click('input[title="Agregar DOMICILIO del INTEGRANTE"]')
      .pause(1000)
      .setValue('#calle', ADDRESS_STREET)
      .setValue('#nro', ADDRESS_NUMBER)
      .setValue('#email', EMAIL)
      .setValue('#telefono', PHONE)
      .setValue('#cp', ZIP_CODE)
      .pause(1000)
      .click('#localidad')
      .click(`#localidad option[value="${CITY}"]`)
      .pause(500)
      .click('#partido')
      .click(`#partido option[value="${CITY_CODE}"]`)
      .pause(1000)
      .click('input[name="confirmar"]')
      .pause(1000)

      // Confirmar integrantes.
      .click('input[name="confirmarTodo"]')
      .pause(1000)

      // Transmisión de bienes.
      .click('.content td:nth-child(9) input')
      .pause(1000)
      .click('input[title="Agregar TRANSMISION"]')
      .pause(1000)
      .click('#idTransmitente')
      .click('#idTransmitente option[value="2"]')
      .pause(500)
      .click('#idBeneficiario')
      .click('#idBeneficiario option[value="1"]')
      .pause(500)
      .click('#gradoParentesco')
      .click('#gradoParentesco option[value="1"]')
      .pause(500)
      .click('input[name="confirmar"]')
      .pause(1000)
      .click('input[title="Confirmar todos las transmisiones"]')
      .pause(1000)

      // Editar transmisiones para poder agregar bienes.
      .click('.content td:nth-child(9) input')
      .pause(1000)
      .click('input[title="Agregar Otros Bienes"]')
      .pause(1000)
      .click('input[title="Agregar"]')
      .pause(500)
      .click('#tipoBienOtro')
      .click('#tipoBienOtro option[value="5"]')
      .pause(1000)
      .click('#codigoBien')
      .click('#codigoBien option[value="1"]')
      .click('#moneda')
      .click('#moneda option[value="1"]')
      .pause(500)
      .setValue('#monto', AMOUNT)
      .setValue('#razonSoc', BANK_NAME)
      .setValue('#cuitPrefijo', BANK_CUIT_PREFIX)
      .setValue('#cuitNumero', BANK_CUIT)
      .setValue('#cuitDigitoVerificador', BANK_CUIT_VERIFIER)
      .setValue('#numeroCuenta', BANK_ACCOUNT_NUMBER)
      .click('input[name="confirmar"]')
      .pause(1000)
      .click('input[title="Confirmar todo"]')
      .pause(1000)
      .click('input[title="Confirmar todos las transmisiones"]')
      .pause(1000)

      // Declarar.
      .click('input[title="Declarar"]')

      // Review details and finish manually.
      .pause(15 * 60 * 1000)
      .end()
  })
})
