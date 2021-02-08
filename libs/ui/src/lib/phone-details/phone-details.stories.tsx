import React from 'react';
import { PhoneDetails, PhoneDetailsProps } from './phone-details';

export default {
  component: PhoneDetails,
  title: 'PhoneDetails',
};

const onSubmit = (data) => console.log(data);

export const add = () => {
  /* eslint-disable-next-line */
  const props: PhoneDetailsProps = {
    view: 'add',
    onSubmit,
  };

  return <PhoneDetails {...props} />;
};

export const edit = () => {
  /* eslint-disable-next-line */
  const props: PhoneDetailsProps = {
    view: 'edit',
    data: {
      id: '1',
      type: 'Snow',
      color: 'Jon',
      serial: '123',
      metadata: '{ "test": 1 }',
    },
    onSubmit,
  };

  return <PhoneDetails {...props} />;
};
