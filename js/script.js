const validation = new JustValidate('#form');

validation
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Поле email не должно быть пустым',
    },
    {
      rule: 'email',
      errorMessage: 'Введен не корректный email! Пожалуйста перепроверьте',
    },
  ]);