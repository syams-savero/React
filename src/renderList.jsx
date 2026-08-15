const people = [
  'Gatot: Judge',
  'Nasir: Dancer',
  'King: Runner',
  'Rusdy: Barber'
];

const peoples = [
  {
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  },
  {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  },
  {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  },
  {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
  },
  {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }
];

export default function List() {
  const peopleJob = people.map((person, index) => (
    <li key={index}>{person}</li>
  ));

  const chemist = peoples.filter(person => person.profession === 'chemist');
  const listProfession = chemist.map(person => (
    <li key={person.id}>
      <p>
        <b>{person.name}:</b> {person.profession}
      </p>
    </li>
  ));

  return (
    <div style={{ textAlign: 'left' }}>
      <h3>Daftar Profesi Umum</h3>
      <ul>{peopleJob}</ul>

      <h3>Daftar Chemist</h3>
      <ul>{listProfession}</ul>
    </div>
  );
}
