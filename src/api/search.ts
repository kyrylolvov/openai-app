import instance from './instance';

const getJobs = async () => instance.get('/remote-jobs', {
  params: {
    limit: 5,
  },
});

export default getJobs;
