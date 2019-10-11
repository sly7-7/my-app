/* eslint-env node */
'use strict';

// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

module.exports = function(app) {
  app.get('/families/1', function(req, res) {
    res.send({
      data: {
        type: 'family',
        id: 1,
        relationships: {
          persons: {
            links: { related: '/families/1/persons' }
          }
        }
      }
    });
  });

  app.get('/families/1/persons', function(req, res) {
    const data = [];
    for (let i = 0; i < 6000; i++) {
      data.push({ type: 'person', id: i, attributes: { name: `Name${i}` } });
    }
    res.send({ data });
  });
};
