import { CollectionConfig } from 'payload/types';

const FormSubmission: CollectionConfig = {
  slug: 'form-submissions',
  access: {
    create: () => true,
  },
  hooks: {
    afterChange: [
      () => {
        // Send an email to the client
        // with the content of the message
      },
    ],
  },
  fields: [
    {
      type: 'text',
      name: 'email',
      label: 'From Email',
      admin: {
        readOnly: true,
      },
    },
    {
      type: 'textarea',
      name: 'message',
      label: 'Message',
      admin: {
        readOnly: true,
      },
    },
    {
      type: 'text',
      name: 'source',
      label: 'Source',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
  ],
};

export default FormSubmission;
