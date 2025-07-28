import hubspotData from '../data.json';

export const useHubSpotData = () => {
  return {
    data: hubspotData,
    loading: false,
  };
};
