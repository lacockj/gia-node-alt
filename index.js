const fetch = require('node-fetch');

const api = 'https://giamaplogin.com/api_v2';

class Gia {
  constructor(key) {
    this.key = key;
  }

  async getBooks() {
    return fetch(`${api}/books?&key=${this.key}`)
      .then(x => x.json().then(books => {
        const mapped = [];
        for (let b in books) {
          mapped.push({
            id: books[b].id,
            title: books[b].title,
            count: books[b].counts.rows,
            scored: books[b].counts.giaScored
          });
        }
        return mapped;
      }))
      .catch(err => err);
  }

  async getSaturation(bookId, lat, lng, rad, miles) {
    const radius = miles ? rad : 50 * 1609.344;
    // return fetch(`${api}/saturation?bookId=${bookId}&lat=${lat}&lng=${lng}&r=${radius}&key=${this.key}`)
    return fetch(`${api}/books/${bookId}/saturation?lat=${lat}&lng=${lng}&r=${radius}&key=${this.key}`)
      .then(x => x.json().then(dat => {
        return {'count': dat.policyCount, 'total': dat.saturation}
      }))
      .catch(err => err);
  }

  async getScore(lat, lng) {
    // return fetch(`${api}/score?lat=${lat}&lng=${lng}&key=${this.key}`)
    return fetch(`${api}/gia-scores?lat=${lat}&lng=${lng}&key=${this.key}`)
      .then(x => x.json().then(dat => {
        return {'score': dat}
      }))
      .catch(err => err);
  }
}

module.exports = Gia;
