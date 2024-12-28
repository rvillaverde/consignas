const API_KEY = process?.env.GOOGLE_API_KEY;
const SHEET_ID = process?.env.GOOGLE_SHEET_ID;

export class GoogleSheetsService {
  page: string = '';

  constructor(page: string) {
    this.page = page;
  }

  private getUrl = (from: string, to: string) => {
    const range = `${this.page}!${from}:${to}`;

    return `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`;
  };

  async fetch(from: string, to: string) {
    const url = this.getUrl(from, to);

    return fetch(url)
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
