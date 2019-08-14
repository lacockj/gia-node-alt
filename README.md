# gia-node-alt

Replaces `gia-node` while under maintenance.

## Usage

First you need to create an object with your assigned API key

```
const Gia = require('gia-node-alt');
const { API_KEY } = process.env;

const gia = new Gia(API_KEY);

```

## Methods

All methods return a promise

### getBooks

Returns an array of your books of business

```
// Sample request:

gia.getBooks().then(x => console.log(x));

// Sample response

[ ({ id: 84, title: 'The First Book 01-28-2019', count: 314, scored: 0},
{ id: 83, title: 'Another Book 01-03-2019', count: 12, scored: 1 },
{ id: 82, title: 'The Third Book 02-12-2019', count: 477, scored: 0 }) ];

```

### getScore

Returns an object representing a gia score at a lat/lon

```
// Sample request:

const lat = 36.78324;
const long = -41.40894;

gia.getScore(lat, long).then(x => console.log(x));

// Sample response

{ score: 2 }

```

### getSaturation

Returns an object with the count and total for that book of business. This method also takes an optional fifth parameter if you would like to use miles instead of meters for the radius. The value of the parameter does not matter - if included, the radius will be treated as miles

```
// Sample request:

const lat = 36.78324;
const long = -41.40894;
const radiusInMeters = 90567.2;
const radiusInMiles = 50

const saturation = gia.getSaturation(lat, lon, radiusInMeters)
const sameSaturation = gia.getSaturation(lat, lon, radiusInMiles)


// Sample response

{ count: 12, total: 1394900 }

```
