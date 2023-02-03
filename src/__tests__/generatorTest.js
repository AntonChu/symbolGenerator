import Team from '../js/generator';

test('checkinf of the iterator correct work', () => {
  const anton = new Team(
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Антон',
      type: 'Anton',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Вася',
      type: 'Vlad',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    },
  );
  const result = ['Bowman', 'Anton', 'Vlad'];
  expect(Array.from(anton)).toEqual(result);
});
