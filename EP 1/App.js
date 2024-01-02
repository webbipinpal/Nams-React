const heading = React.createElement('h1', {id:'hello', alt:'hi'}, 'Hello world from React!');

console.log(heading);
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(heading);