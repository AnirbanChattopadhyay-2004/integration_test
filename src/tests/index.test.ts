import {expect, it, describe,vi} from 'vitest';
import request from 'supertest';
import {app} from '../index';
describe("POST /sum", () => {
    it("should return the correct sum",async ()=>{
            const res = (await request(app).post("/sum").send({a:1,b:2}))
            const finalresult = res.body.answer
            expect(res.statusCode).toBe(200)
            // expect(res.body.id).toBe(1)
            expect(finalresult).toBe(3)
    })
})