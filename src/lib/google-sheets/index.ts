const API_KEY = process?.env.GOOGLE_API_KEY;
const SPREADSHEET_ID = process?.env.GOOGLE_SHEET_ID;

export class GoogleSheetsService {
  page: string = '';

  constructor(page: string) {
    this.page = page;
  }

  private getAPIKeyParam = () => {
    return `key=${API_KEY}`;
  };

  private getUrl = (from: string, to: string) => {
    const range = `${this.page}!${from}:${to}`;

    return `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}`;
  };

  async fetch(from: string, to: string) {
    const url = this.getUrl(from, to);

    console.log('Fetch spreadsheet data from:', url);

    return fetch(`${url}?${this.getAPIKeyParam()}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
      })
      .then(data => {
        const values = data.values as string[][];

        return values;
      })
      .catch(error => {
        console.error('Error fetching data:', error);

        return [];
      });
  }
}
