var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(typeof message.createAt).toBe('number');
    expect(message).toMatchObject({from,text});
  })
});

describe('generateLocationMessage', () => {
  it('should generate correct location message object', () => {
    var from = 'Jen';
    var latitude = 59;
    var longitude = 30;
    var url = 'https://www.google.com/maps?q=59,30'
    var message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.createAt).toBe('number');
    expect(message).toMatchObject({from,url});
  })
});
