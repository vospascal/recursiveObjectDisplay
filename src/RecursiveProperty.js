import React from 'react';
import styled from '@emotion/styled';

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const Cell = styled.div`
  flex: 1;
`;

const checkArrayOfStrings = x => {
  if (Array.isArray(x)) {
    return x.every(i => typeof i === 'string');
  }
  return false;
};

const checkArrayOfObjects = x => {
  if (Array.isArray(x)) {
    return x.every(i => typeof i === 'object' && !Array.isArray(i));
  }
  return false;
};

const createPropertyPath = (propertyPath = 'root', propertyKey) => {
  if (propertyKey) {
    return `${propertyPath}.${propertyKey}`;
  }
  return '';
};

const test = (property, propertyKeys, propertyName, propertyPath) => {
  // om te kunnen groeperen deze logic
  if (
    typeof property === 'object' &&
    JSON.stringify(Object.keys(property)) === JSON.stringify(['naam', 'value'])
  ) {
    return (
      <React.Fragment key={property.naam}>
        <div>
          <Row>
            <Cell>naam</Cell>
            <Cell>{property.naam}</Cell>
            <Cell>{checkType(property.naam)}</Cell>
            <Cell>{propertyPath}</Cell>
          </Row>
          <Row>
            <Cell>value</Cell>
            <Cell>{JSON.stringify(property.value)}</Cell>
            <Cell>{checkType(property.value)}</Cell>
            <Cell>{propertyPath}</Cell>
          </Row>
        </div>
      </React.Fragment>
    );
  }
  // om te kunnen groeperen deze logic
  if (
    typeof property === 'object' &&
    JSON.stringify(Object.keys(property)) === JSON.stringify(['text', 'value'])
  ) {
    return (
      <React.Fragment key={property.naam}>
        <div>
          <Row>
            <Cell>text</Cell>
            <Cell>{property.text}</Cell>
            <Cell>{checkType(property.text)}</Cell>
            <Cell>{propertyPath}</Cell>
          </Row>
          <Row>
            <Cell>value</Cell>
            <Cell>{checkType(property.value)}</Cell>
            <Cell>{propertyPath}</Cell>
          </Row>
        </div>
      </React.Fragment>
    );
  }

  // om met array van strings om te gaan deze logic
  if (checkArrayOfStrings(property)) {
    return (
      <Row>
        <Cell>{propertyName}</Cell>
        <Cell>{JSON.stringify(Object.values(property))}</Cell>
        <Cell>{checkType(property)}</Cell>
        <Cell>{propertyPath}</Cell>
      </Row>
    );
  }

  // recursive
  return Object.values(property).map(
    // eslint-disable-next-line no-shadow
    (property, index) => (
      <div style={{ paddingLeft: '10px' }}>
        {checkType(property) === 'object' && (
          <Row>
            <Cell>{propertyName}</Cell>
            <Cell>{checkType(property)}</Cell>
            <Cell>{propertyPath}</Cell>
          </Row>
        )}
        <RecursiveProperty
          key={propertyKeys[index]}
          property={property}
          propertyName={propertyKeys[index]}
          propertyPath={createPropertyPath(propertyPath, propertyKeys[index])}
        />
      </div>
    ),
  );
};

const check = (property, propertyName, propertyPath) => {
  if (
    typeof property === 'number' ||
    typeof property === 'string' ||
    typeof property === 'boolean'
  ) {
    return (
      <Row>
        <Cell>{propertyName}</Cell>
        <Cell>{checkValue(property)}</Cell>
        <Cell>{checkType(property)}</Cell>
        <Cell>{propertyPath}</Cell>
      </Row>
    );
  }
  return test(property, Object.keys(property), propertyName, propertyPath);
};

const checkValue = property => {
  if (property === null) {
    return 'null';
  }
  if (property === undefined) {
    return 'undefined';
  }
  return JSON.stringify(property);
};

const checkType = property => {
  console.log(Array.isArray(property));
  if (property === null) {
    return 'null';
  }
  if (property === undefined) {
    return 'undefined';
  }
  if (Array.isArray(property)) {
    return 'array';
  }
  return typeof property;
};

const RecursiveProperty = ({ property, propertyName, propertyPath }) => {
  return (
    <React.Fragment>
      {property ? (
        check(property, propertyName, propertyPath)
      ) : (
        <Row>
          <Cell>{propertyName}</Cell>
          <Cell>{checkValue(property)}</Cell>
          <Cell>{checkType(property)}</Cell>
          <Cell>{propertyPath}</Cell>
        </Row>
      )}
    </React.Fragment>
  );
};

export default RecursiveProperty;
