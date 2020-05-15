import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const FormSchema = Yup.object().shape({
  suburb: Yup.string().required('please enter suburb name to search'),
});

function PropertySearchForm({ onSearch }) {
  return (
    <div id="property-search-form">
      <Formik initialValues={{ suburb: '' }} validationSchema={FormSchema} onSubmit={onSearch}>
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <Field id="suburb" type="text" name="suburb" placeholder="Carlton, South Yarra ..." />
            <Button type="submit" disabled={isSubmitting}>
              Search
            </Button>
            {errors.suburb && touched.suburb ? <div>{errors.suburb}</div> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
}

PropertySearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default PropertySearchForm;
