let jsonConcat = require('json-concat');

jsonConcat({
    src: 'json-server/mock-data',
    dest: 'json-server/db.json',
}, function(json) {
    console.log("db.json has been updated"+ json);
})