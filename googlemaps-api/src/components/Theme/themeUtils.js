import merge from 'lodash/merge';

export const sanitizeThemeConfig = (config, configUrl) => {
  if (!config) {
    return null;
  }
  let sanitized = {};
  if (config.primary_color) {
    sanitized = merge(sanitized, { palette: { primary: { main: config.primary_color } } });
  }
  if (config.primary_color_contrast) {
    sanitized = merge(sanitized, { palette: { primary: { contrast: config.primary_color_contrast } } });
  }
  if (config.secondary_color) {
    sanitized = merge(sanitized, { palette: { secondary: { main: config.secondary_color } } });
  }
  if (config.logo) {
    if (config.logo.main) {
      sanitized = merge(sanitized, { images: { mainLogo: [configUrl, config.logo.main].join('/') } });
    }
  }
  return sanitized;
};
