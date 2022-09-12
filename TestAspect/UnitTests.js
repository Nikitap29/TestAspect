var assert = require('assert');
var func = require('./func');

describe('Test Suite 1', function () {
    it('Test 1 - empty result', async () => {
        let res = await func.select("table1", "q");
        assert.ok(res[0] == 0 && res[1].length == 0, "This shouldn't fail");
    });
    it('Test 2 - five records', async () => {
        let res = await func.select("table1", "row");
        assert.ok(res[0] == 5 && res[1].length == 5, "This shouldn't fail");
    });
    it('Test 3 - count more than returned records', async () => {
        let res = await func.select("table1", "o");
        assert.ok(res[0] == 22 && res[1].length == 20, "This shouldn't fail");
    });
    it('Test 4 - not exists table', async () => {
        let res = await func.select("table4", "o");
        assert.ok(res[0] == 0 && res[1] == null, "This shouldn't fail");
    });
    it('Test 5 - empty field', async () => {
        let res = await func.select("table1", "");
        assert.ok(res[0] == 22 && res[1].length == 20, "This shouldn't fail");
    });
    it('Test 6 - incorrect data table', async () => {
        let res = await func.select(1, "");
        assert.ok(res[0] == 0 && res[1] == null, "This shouldn't fail");
    });
    it('Test 7 - incorrect data search', async () => {
        let res = await func.select("table1", 2);
        assert.ok(res[0] == 3 && res[1].length == 3, "This shouldn't fail");
    });
    it('Test 8 - incorrect data all', async () => {
        let res = await func.select(1, 2);
        assert.ok(res[0] == 0 && res[1] == null, "This shouldn't fail");
    });
});
