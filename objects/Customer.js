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
    await this.page.getByLabel('* Due date').click();
    await this.page.getByLabel('* Due date').fill('5');
    await this.page.getByLabel('Client of branch').selectOption('Yield d.o.o.');
    await this.page.getByText('Select brands').click();
    await this.page.locator('label').filter({ hasText: /^Gazzda$/ }).click();
    await this.page.locator('label').filter({ hasText: /^Yield$/ }).click();
    await this.page.getByTitle(' 2 Selected').locator('i').click();

    await this.page.getByText('Select price lists').click();
    await this.page.locator('li').filter({ hasText: 'Gazzda - Mobel Pfister DAP prices - 2021 - EUR (Gazzda)' }).locator('i').click();

    await this.page.getByRole('button', { name: 'Save' }).click();

    await this.page.getByRole('link', { name: 'Address & Contact' }).click();

    await this.page.locator('svg.add-small-button path').nth(0).click();


    await this.page.getByPlaceholder('Search address').click();
    await this.page.getByLabel('* Country').selectOption('Bosnia and Herzegovina');
    await this.page.getByPlaceholder('Enter a city').click();
    await this.page.getByPlaceholder('Enter a city').fill('Sarajevo');
    await this.page.getByPlaceholder('Enter zip code').click();
    await this.page.getByPlaceholder('Enter zip code').fill('71000');
    await this.page.getByPlaceholder('Enter address 1').click();
    await this.page.getByPlaceholder('Enter address 1').fill('Address1');
    await this.page.getByPlaceholder('Enter street number').click();
    await this.page.getByPlaceholder('Enter street number').fill('13');

    await this.page.getByRole('button', { name: 'Save' }).click();


    await this.page.pause()

    console.log("End of the test")
  }
}
