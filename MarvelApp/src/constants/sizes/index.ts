import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

// Custom hook to get window sizes
export function useWindowSizes(): SizeTypes {
  return {width: width, height: height};
}

export function useSizes(): AppSizes {
  return {
    iconSizeBig: width * 0.13,
    iconSizeMedium: width * 0.08,
    iconSizeSmall: width * 0.03,
  };
}
