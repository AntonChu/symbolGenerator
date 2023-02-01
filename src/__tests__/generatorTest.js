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
      name: 'Лучник',
      type: 'Anton',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Лучник',
      type: 'Vlad',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    },
  );
  const result = ['Bowman', 'Anton'];
  expect([...anton]).toEqual(result);
});
