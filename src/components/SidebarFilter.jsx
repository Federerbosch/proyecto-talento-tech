import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";

const SidebarFilter = ({ setSelectedType }) => {
  const [types, setTypes] = useState([]);
  const [counts, setCounts] = useState({});

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/type");
        const data = await res.json();
        setTypes(data.results);

        const countsData = {};
        for (const type of data.results) {
          const resType = await fetch(type.url);
          const typeData = await resType.json();
          countsData[type.name] = typeData.pokemon.length;
        }

        setCounts(countsData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTypes();
  }, []);

  return (
    <div>
      <Form>
        {types.map((type, i) => (
          <Form.Check
            type="radio"
            name="type"
            id={`type-${type.name}`}
            label={`${type.name.charAt(0).toUpperCase() + type.name.slice(1)}${
              counts[type.name] !== undefined ? ` (${counts[type.name]})` : ""
            }`}
            onChange={() => setSelectedType(type.name)}
            key={i}
            className="mb-2"
          />
        ))}

        <Form.Check
          type="radio"
          name="type"
          id="all"
          label="Todos"
          onChange={() => setSelectedType(null)}
          className="mt-3"
        />
      </Form>
    </div>
  );
};

export default SidebarFilter;
