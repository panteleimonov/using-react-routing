import { Link, useNavigate, useParams } from 'react-router-dom';
import courses from '../data/courses';
import NotFound from './NotFound';
import { useEffect } from 'react';

const SingleCourse = () => {
  const params = useParams();
  const course = courses.find((currCourse) => currCourse.slug === params.slug);
  const navigate = useNavigate();

  // if (!course) {
  //   return (
  //     <>
  //       <NotFound />
  //       <Link to=".." relative="path">
  //         All courses
  //       </Link>
  //     </>
  //   );
  // }

  useEffect(() => {
    if (!course) {
      // You should call navigate() in a React.useEffect(), not when your component is first rendered.
      navigate('..', { relative: 'path' });
      // navigate('../not-found', { relative: 'route' });
    }
  }, [course]);

  return (
    <>
      <h1>Single Course Info</h1>
      <h2>{course?.title}</h2>
      <h3>{course?.id}</h3>
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  );
};

export default SingleCourse;
