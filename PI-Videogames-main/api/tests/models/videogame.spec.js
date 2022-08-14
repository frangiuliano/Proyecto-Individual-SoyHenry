const { Genre, Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Videogame.create({ name: 'Grand Theft Auto V' });
      });
      it('should return name not found', done => {
        Videogame.findAll()
        .then(r => expect(r[1].name).to.be.false('NameNotFound'))
        .catch(() => done())
      });
    });
  });
});