import { JSDOM } from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const { window } = new JSDOM('<!doctype html><html><body></body></html>',  {
    url: "http://localhost:8080"
  });

const { document } = window;

//global accessors for react
global.document = document;
global.window = window;

//So properties provited by window can be used without the window. prefix.
Object.keys(window).forEach((key) => {
    if (!(key in global)) {
        global[key] = window[key];
    }
});

chai.use(chaiImmutable);