// proptypes
import PropTypes from "prop-types";

// library
import { Form, Button } from "react-bootstrap";

function ReviewForm({ handleSubmit, revText, labelText, defaultValue }) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{labelText}</Form.Label>
        <Form.Control
          ref={revText}
          as="textarea"
          rows={3}
          defaultValue={defaultValue}
        />
      </Form.Group>
      <Button variant="outline-info" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

ReviewForm.propTypes = {
  handleSubmit: PropTypes.func,
  revText: PropTypes.object,
  labelText: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default ReviewForm;
