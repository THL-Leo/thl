import React from 'react';
import Layout from './components/layout';
import Projects from './components/projects';

const ProjectPage = () => {
  return (
    <Layout showNavBar={true}>
      <Projects />
    </Layout>
  );
};

export default ProjectPage;
