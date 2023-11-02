import React from "react";
import { getPeopleList } from "../api/tmdb-api";
import PageTemplate from '../components/templatePeopleListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const PeoplePage = () => {
  const { data, error, isLoading, isError } = useQuery('people', getPeopleList)

  if (isLoading) {
    return <Spinner />
  }
  if (isError) {
    return <h1>{error.message}</h1>
  }

  const people = data.results;
  console.log(people)
  return (
    <PageTemplate
      title="Popular People"
      people={people}
    />
  );
};
export default PeoplePage;
