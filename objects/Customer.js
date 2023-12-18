export class Customer {

  constructor(page) {
    this.page = page;
  }

  async create() {
    await this.page.goto(process.env.URL + 'customers/new');

    await this.page.getByLabel('Company name').fill("Vorta Test");
    await this.page.getByLabel('Customer brand name').fill("VRT Brand");
    await this.page.getByLabel('Abbreviation').fill("VRT Brand");
    await this.page.getByLabel('EORI number').fill("EORI1234567890");
    await this.page.getByLabel('VAT number').fill("123444444222");

    await this.page.getByLabel('Contract delivery week').fill("2");



    await this.page.getByLabel('Customer brand name').fill("VRT Brand");



    await this.page.getByLabel('Incoterms').selectOption('DAP');
    await this.page.getByLabel('Client of branch').selectOption('Yield d.o.o.');
    await this.page.getByLabel('Brands').selectOption(['Gazzda', 'Yield']);


    await this.page.pause()

    console.log("End of the test")
  }
}
