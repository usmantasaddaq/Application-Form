
export  const  Data= [
    {
     label:"FirstName",
    id: 'firstName',
    placeholder: 'First name',
    required: true,
    type: 'text',
    },
    {
        label:"LastName",
    id: 'lastName',
    placeholder: 'Last name',
    required: true,
    type: 'text',
    },
    {
        label:"Email",
    id: 'Email',
    required: true,
    type: 'text',
    },
    {
        label:"Address1",
    id: 'address1',
    placeholder: 'Address 1',
    type: 'text',
    },
    {
        label:"City",
    id: 'city',
    type: 'text',
    },
    {
        label:"State1",
    id: 'state1',
    type: 'text',
    },
    {
        label:"Zip",
    id: 'zip',
    type: 'text',
    },
    {
        label:"Phone",
    id: 'phone',
    required: true,
    type: 'text',
    },
    {
        label:"Job Title",
    id: 'jobTitle',
    options: [
    'Engineer - lead',
    'Engineer - mid level',
    'Engineer - junion',
    'Engineer - front end focused',
    'Engineer - backend focused',
    'Engineer - full stack',
    ],
    placeholder: 'Please select job title',
     type: 'select',
    },
    {
        label:"Experience",
    id: 'experience1',
    options: [
    'less than 1 year',
    '1 - 3 years',
    '3 - 5 years',
    'more than 5 years'
    ],
    placeholder: 'Please choose number of years you\'ve been developing',
    required: true,
    type: 'radio',
    },
    {
        label:"Experience",
    id: 'experience',
    options: [
    'JavaScrip',
    'HTML',
    'CSS',
    'SASS',
    'NodeJS',
    'Java',
    'AWS - Lambda',
    'AWS - IAM',
    'AWS - DynamoDB',
    'AWS - S3',
    ],
    placeholder: 'Please choose number of years you\'ve been developing',
    required: true,
    type: 'select',
    },
    {
        label:"Reason",
    id: 'reason',
    placeholder: 'Describe why you are a good fit for the job you are applying for.',
    type: 'textarea',
    }
    ]