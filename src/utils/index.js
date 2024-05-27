export const addNewUserForm = [
  {
    id: "userRole",
    label: "select role",
    type: "select",
    isRequired: true,
    defaultLabel: "select role",
    options: [
      {
        value: "role1",
        label: "role1",
      },
      {
        value: "role2",
        label: "role2",
      },
      {
        value: "role3",
        label: "role3",
      },
    ],
  },
  {
    id: "supervisor",
    label: "supervisor",
    isRequired: true,
    type: "select",
    defaultLabel: "select supervisor",
    options: [
      {
        value: "sup1",
        label: "sup1",
      },
      {
        value: "sup2",
        label: "sup2",
      },
      {
        value: "sup3",
        label: "sup3",
      },
    ],
  },
  {
    type: "input",
    column: 2,
    fields: [
      {
        id: "firstName",
        label: "first name",
        isRequired: true,
        inputType: "text",
      },
      {
        id: "lastName",
        label: "last name",
        isRequired: true,
        inputType: "text",
      },
    ],
  },
  {
    type: "input_mob",
    id: "mobileNumber",
    label: "mobile number",
    isRequired: true,
  },
  {
    type: "input",
    column: 1,
    id: "email",
    label: "email",
    isRequired: true,
    inputType: "email",
  },
  {
    type: "input",
    column: 2,
    fields: [
      {
        id: "cardLoadLimit",
        label: "card load limit",
        isRequired: true,
      },
      {
        id: "paymentLimit",
        label: "payment limit",
        isRequired: true,
      },
    ],
  },
];
