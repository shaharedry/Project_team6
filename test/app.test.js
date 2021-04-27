import React from "react";
import renderer from "react-test-renderer";
import App from '../App';
import FirstScreen from "../screens/FirstScreen";

/*test('Open first screen', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).dispatch(FirstScreen);
});

it('Test click event', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
});*/

test('renders correctly across screens', () => {
    const tree = renderer.create().toJSON();
    expect(tree).toMatchSnapshot();
}); 