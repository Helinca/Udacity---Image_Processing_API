import supertest from 'supertest';
import app from '../index';

//endpoint testing
const request = supertest(app);

describe('Test end point http://localhost:3000/api/images responses', () => {
  it('The api endpoint was opend with status 200', async () => {
    const response = await request.get('/api/images'); //?filename=River.jpg&width=400&height=300
    expect(response.status).toBe(200);
  });
});
