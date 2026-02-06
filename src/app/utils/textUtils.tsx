/**
 * Utility functions for text handling
 */

export const safeText = (text: string): string => {
  return text.replace(/"/g, '&quot;');
};
