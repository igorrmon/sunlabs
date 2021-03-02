const CitySchema = {
  name: 'City',
  primaryKey: 'place_id',
  properties: {
    place_id: 'string',
    lat: 'string',
    long: 'string',
    place_name: 'string',
    place_state: 'string',
    favorite: 'bool',
  },
};

export default CitySchema;
