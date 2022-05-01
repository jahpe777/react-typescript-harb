import React from 'react';
import { State as PropsList } from '../App';

const List: React.FC<PropsList> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      const { name, url, age, note } = person;
      return (
        <li className="List">
          <div className="List-header">
            <img src={url} alt={name} className="List-img" />
            <h2>{name}</h2>
          </div>
          <p>{age} years old</p>
          <p className="List-note">{note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
