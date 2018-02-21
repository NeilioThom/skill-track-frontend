
// Takes a controller and assigns the result of the form event to it's state
const formStateChange = (component, e) => {
  component.setState(
    { [e.target.name]: e.target.value }
  );
}

export default formStateChange;
