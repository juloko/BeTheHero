const request = require('supertest')
const app = require('../../src/app');

const connection = require('../../src/database/connection')

beforeEach(async ()=>{
    await  connection.migrate.rollback();
    await  connection.migrate.latest();
})

afterAll(async ()=>{
    await connection.destroy();
})

describe('ONG', () => {
    it('shoudl be create a new ong', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Apade",
                email: "apade@gmail.com",
                whatsapp: "85998614541",
                city: "Teresina",
                uf: "PI"
            })

            expect(response.body).toHaveProperty('id')
            expect(response.body.id).toHaveLength(8)
    })
})
