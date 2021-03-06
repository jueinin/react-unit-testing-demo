// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
jest.spyOn(console,"error").mockImplementation((msg:string)=>{
    if (msg && msg.includes(`wrapped in act(...)`)) {
        return;
    } else {
        console.log(msg);
    }
})