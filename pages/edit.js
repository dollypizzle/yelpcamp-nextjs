import Edit from '../src/components/Campgrounds/Edit/Edit';

const editCamp = ({ id }) => {
  return <Edit id={id} />;
};

editCamp.getInitialProps = async ({ query }) => {
  return { id: query.id };
};
export default editCamp;
